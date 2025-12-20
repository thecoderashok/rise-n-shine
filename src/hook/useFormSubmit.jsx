
import { useState, useEffect, useRef, useCallback } from "react";
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
    const [formValidation, setFormValidation] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const intlTelInputRef = useRef(null);

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

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;

        setFormData((prev) => {
            const updatedData = { ...prev, [name]: value };
            const validationErrors = handleValidation(updatedData, intlTelInputRef);

            setFormValidation((prevValidation) => ({
                ...prevValidation,
                [name]: {
                    error: validationErrors[name]?.error || "",
                    isInvalid: validationErrors[name]?.isInvalid || false,
                },
            }));

            return updatedData;
        });
    }, [handleValidation, intlTelInputRef]);

    const resetForm = () => {
        setFormData(initialData);
        setFormValidation({});
    };

    const addInvalidAnimation = useCallback((form) => {
        if (!form) return;
        const invalidInputs = form.querySelectorAll('input.is-invalid, .phone-input.is-invalid');

        invalidInputs.forEach((input) => {
            if (!input.classList.contains('shake-animation')) {
                input.classList.add('shake-animation');
                const handleAnimationEnd = () => {
                    input.classList.remove('shake-animation');
                    input.removeEventListener('animationend', handleAnimationEnd);
                };
                input.addEventListener('animationend', handleAnimationEnd);
            }
        });
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        form.classList.add("was-validated");

        const validations = handleValidation(formData, intlTelInputRef);
        const hasInvalidFields = Object.values(validations).some(
            (fieldValidation) => fieldValidation?.isInvalid === true
        );

        if (hasInvalidFields) {
            setFormValidation((prev) => {
                const next = { ...prev };
                Object.entries(validations).forEach(([name, fieldValidation]) => {
                    next[name] = {
                        error: fieldValidation?.error || "",
                        isInvalid: fieldValidation?.isInvalid || false,
                    };
                });
                return next;
            });
            addInvalidAnimation(form);
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

                response = await fetch("https://verligte.com/api/send-email.php", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        sender: {
                            name: mailerSetting.fromName,
                            email: "niyaz@wisecowconsultants.com ",
                        },
                        to: mailerSetting.sendTo,
                        cc: mailerSetting.sendToCC,
                        subject: mailerSetting.subject || "New Enquiry from Website",
                        htmlContent,
                    }),
                });

                const text = await response.text();
                console.log("Raw Response:", text);

                try {
                    result = JSON.parse(text);
                } catch {
                    result = { success: false, error: "Invalid JSON response" };
                }

                console.log("Parsed Result:", result);

                if (!response.ok || !result.success) {
                    throw new Error(result.error || "Failed to send message.");
                }
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
            showToast({
                message: "Thank you! Your message has been sent successfully.",
                type: "success"
            });
        } catch (error) {
            console.error(error);
            hideFormLoader();
            showToast({
                message: "Submission failed. Please try again.",
                type: "error"
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
        isSubmitting,
        handleChange,
        handleSubmit,
        resetForm,
        setFormData,
        formValidation,
        setFormValidation,
        intlTelInputRef,
    };
};
