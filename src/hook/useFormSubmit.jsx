import { useState, useEffect, useRef } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { useToast } from "../context/Toast/ToastContext";
import { useFormLoader } from "../context/FormLoader/FormLoaderContext";
import EmailTable from "../components/Forms/EmailTable";

export const useFormSubmit = ({
    initialData,
    handleValidation = () => ({}),
    emailMethod = "api",
    mailerSetting,
}) => {
    const { showToast } = useToast();
    const { showFormLoader, hideFormLoader } = useFormLoader();
    const [formData, setFormData] = useState(initialData);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const itiRef = useRef(null);

    useEffect(() => {
        const handleBeforeUnload = (e) => {
            if (isSubmitting) {
                e.returnValue =
                    "Your message is still being sent. Are you sure you want to leave?";
                return e.returnValue;
            }
        };
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => window.removeEventListener("beforeunload", handleBeforeUnload);
    }, [isSubmitting]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const resetForm = () => {
        setFormData(initialData);
        setErrors({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        form.classList.add("was-validated");

        const errs = handleValidation(formData, itiRef) || {};
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }

        setIsSubmitting(true);
        showFormLoader();

        const submitButton = form.querySelector("button[type='submit']");
        if (submitButton) submitButton.disabled = true;

        const formArray = Object.entries(formData).map(([key, value]) => ({
            label: key,
            value,
        }));

        try {
            let response, result;

            if (emailMethod === "api") {
                const htmlContent = renderToStaticMarkup(
                    <EmailTable data={formArray} />
                );

                response = await fetch("/api/send-email", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        sender: {
                            name: mailerSetting.fromName,
                            email: "verligte@gmail.com",
                        },
                        to: mailerSetting.sendTo,
                        cc: mailerSetting.sendToCC,
                        subject: mailerSetting.subject || "New Enquiry from Website",
                        htmlContent,
                    }),
                });

                const responseInText = await response.text();

                try {
                    result = JSON.parse(responseInText);
                } catch {
                    result = { success: false, error: "Invalid JSON response" };
                }

                console.log("Parsed Result:", result);

                if (!response.ok || !result.success) {
                    throw new Error(result.error || "Failed to send message.");
                }
            } else if (emailMethod === "php") {
                return;
            }

            const modal = form.closest(".modal");
            if (modal) {
                const modalInstance = window.bootstrap.Modal.getInstance(modal);
                if (modalInstance) {
                    modalInstance.hide();
                }
            }

            resetForm();
            hideFormLoader();
            // alert("Thank you! Your message has been sent successfully.")
            showToast({
                message: "Thank you! Your message has been sent successfully.",
                type: "success",
            });
        } catch (error) {
            console.error(error);
            hideFormLoader();
            // alert("Submission failed. Please try again.")
            showToast({
                message: "Submission failed. Please try again.",
                type: "error",
            });
        } finally {
            form.classList.remove("was-validated");
            const inputs = form.querySelectorAll(".is-valid, .is-invalid");
            inputs.forEach((input) =>
                input.classList.remove("is-valid", "is-invalid")
            );
            if (submitButton) submitButton.disabled = false;
            setIsSubmitting(false);
        }
    };

    return {
        formData,
        setFormData,
        errors,
        setErrors,
        isSubmitting,
        handleChange,
        handleSubmit,
        resetForm,
        itiRef,
    };
};
