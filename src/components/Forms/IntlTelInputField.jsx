"use client";
import React, { useEffect, useMemo, useRef } from "react";
import intlTelInput from "intl-tel-input";

const DEFAULT_CONFIG = {
    initialCountry: "in",
    separateDialCode: true,
    strictMode: true,
    loadUtils: () => import("intl-tel-input/utils"),
};

const IntlTelInputField = ({
    itiRef,
    onNumberChange,
    className = "",
    error = "",
    showError = true,
    errorClassName = "invalid-feedback",
    itiConfig: providedItiConfig,
    ...inputProps
}) => {
    const inputRef = useRef(null);
    const changeHandlerRef = useRef(onNumberChange);
    const mergedConfig = useMemo(
        () => ({ ...DEFAULT_CONFIG, ...(providedItiConfig || {}) }),
        [providedItiConfig]
    );

    useEffect(() => {
        changeHandlerRef.current = onNumberChange;
    }, [onNumberChange]);

    useEffect(() => {
        const inputElement = inputRef.current;
        if (!inputElement) return undefined;

        const instance = intlTelInput(inputElement, mergedConfig);

        if (typeof itiRef === "function") {
            itiRef(instance);
        } else if (itiRef) {
            itiRef.current = instance;
        }

        const handlePhoneChange = () => {
            const formattedNumber = instance.getNumber();
            if (changeHandlerRef.current) {
                changeHandlerRef.current(formattedNumber, instance);
            }
        };

        inputElement.addEventListener("input", handlePhoneChange);
        inputElement.addEventListener("blur", handlePhoneChange);

        const countryList = inputElement.parentElement?.querySelector(".iti__country-list");
        if (countryList) {
            countryList.setAttribute("data-lenis-prevent", "true");
        }

        return () => {
            inputElement.removeEventListener("input", handlePhoneChange);
            inputElement.removeEventListener("blur", handlePhoneChange);
            instance.destroy();
            if (typeof itiRef === "function") {
                itiRef(null);
            } else if (itiRef) {
                itiRef.current = null;
            }
        };
    }, [itiRef, mergedConfig]);

    const { type = "tel", ...restInputProps } = inputProps;

    return (
        <>
            <input
                ref={inputRef}
                className={className}
                type={type}
                {...restInputProps}
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
