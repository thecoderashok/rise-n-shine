
import { useState, useEffect, useRef } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { useToast } from "../context/Toast/ToastContext";
import { useFormLoader } from "../context/FormLoader/FormLoaderContext";
import EmailTable from "../components/Forms/EmailTable";

export const useFormSubmit = ({
    initialData,
    handleValidation = () => ({}),
    emailMethod = "php",
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
                e.returnValue = "Your message is still being sent. Are you sure you want to leave?";
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
                            email: "cooperate.ashok@gmail.com",
                        },
                        to: mailerSetting.sendTo.map((email) => ({ email })),
                        subject: mailerSetting.subject || "New Enquiry from Website",
                        htmlContent,
                    }),
                });

                result = await response.json();
                console.log(result)

                if (!response.ok || !result.success) {
                    throw new Error(result.error || "Failed to send message.");
                }

            } else if (emailMethod === "php") {
                response = await fetch(`https://verligte.com/api/contactMailer.php`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Smtp-Host": "mail.modern-developers.comm",
                        "Smtp-Port": 465,
                        "Smtp-User": "mailer@modern-developers.comm",
                        "Smtp-Password": "DpooZQ%vt,Ia"
                    },
                    body: JSON.stringify({
                        fromName: mailerSetting.fromName,
                        subject: "New Enquiry from Website",
                        tableHeaderColor: "#09509F",
                        to: mailerSetting.sendTo.map((email) => ({ email })),
                        fields: formArray,
                    }),
                });

                const result = await response.json();
                console.log(result);
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
            // showToast({
            //     message: "Thank you! Your message has been sent successfully.",
            //     type: "success"
            // });
        } catch (error) {
            console.error(error);
            hideFormLoader();
            // showToast({
            //     message: "Submission failed. Please try again.",
            //     type: "error"
            // });
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
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
        resetForm,
        itiRef,
    };
};
