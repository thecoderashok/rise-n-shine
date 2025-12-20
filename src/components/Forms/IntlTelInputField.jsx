import React, { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";

const DEFAULT_CONFIG = {
    initialCountry: "ae",
    separateDialCode: true,
    strictMode: true,
    loadUtils: () => import("intl-tel-input/utils"),
};

const IntlTelInputField = ({
    intlTelInputRef,
    setFormData,
    setFormValidation,
    className = "",
    error = "",
    showError = true,
    errorClassName = "invalid-feedback",
    customConfig,
    onChangeNumber,
    ...props
}) => {
    const inputRef = useRef(null);
    const instanceRef = useRef(null);
    const onChangeNumberRef = useRef(onChangeNumber);

    const name = props.name ?? "phone";

    useEffect(() => {
        onChangeNumberRef.current = onChangeNumber;
    }, [onChangeNumber]);

    // Build config ONCE
    const configRef = useRef({
        ...DEFAULT_CONFIG,
        ...(customConfig ?? {}),
    });

    useEffect(() => {
        const phoneInput = inputRef.current;
        if (!phoneInput) return;

        instanceRef.current = intlTelInput(phoneInput, configRef.current);

        // prevent Lenis scroll capture on country list
        const listElement =
            phoneInput.parentElement?.querySelector(".iti__country-list");
        if (listElement) {
            listElement.setAttribute("data-lenis-prevent", "true");
        }

        if (intlTelInputRef) {
            intlTelInputRef.current = instanceRef.current;
        }

        const handleChange = () => {
            if (!instanceRef.current) return;
            const number = instanceRef.current.getNumber();
            const isValid = instanceRef.current.isValidNumber();

            const rawValue = inputRef.current.value.trim();

            if (setFormData) {
                setFormData((prev) => ({ ...prev, [name]: number }));
            }
            if (setFormValidation) {

                setFormValidation((prev) => {
                    if (rawValue === "") {
                        return { ...prev, [name]: { error: "", isInvalid: false } };
                    }
                    if (!isValid) {
                        return {
                            ...prev,
                            [name]: { error: "Valid phone number is required!", isInvalid: true },
                        };
                    }

                    return { ...prev, [name]: { error: "", isInvalid: false } };
                });
            }

            if (onChangeNumberRef.current) {
                onChangeNumberRef.current(number, instanceRef.current);
            }
        };

        phoneInput.addEventListener("input", handleChange);
        phoneInput.addEventListener("blur", handleChange);
        phoneInput.addEventListener("countrychange", handleChange);

        return () => {
            phoneInput.removeEventListener("input", handleChange);
            phoneInput.removeEventListener("blur", handleChange);
            phoneInput.removeEventListener("countrychange", handleChange);

            if (instanceRef.current?.destroy) {
                instanceRef.current.destroy();
            }
            instanceRef.current = null;

            if (intlTelInputRef) {
                intlTelInputRef.current = null;
            }
        };
    }, [intlTelInputRef, name, setFormValidation, setFormData]);

    return (
        <>
            <input
                ref={inputRef}
                className={className}
                type="tel"
                {...props}
            />

            {showError && (
                <div
                    className={errorClassName}
                    style={error ? { display: "block" } : undefined}
                >
                    {error}
                </div>
            )}
        </>
    );
};

export default IntlTelInputField;
