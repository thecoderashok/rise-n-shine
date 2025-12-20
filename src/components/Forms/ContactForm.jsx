import React, { useRef } from "react";
import { useClassNames } from "../../hook/useClassNames";
import { useFormSubmit } from "../../hook/useFormSubmit";
import Button from "../Button/Button";
import IntlTelInputField from "./IntlTelInputField";
import { getMailerSettings } from "../../mailerSettings";

const ContactForm = () => {
    const classes = useClassNames();
    const formRef = useRef(null);

    const {
        formData,
        handleChange,
        handleSubmit,
        intlTelInputRef,
        formValidation,
        setFormValidation,
        setFormData,
    } = useFormSubmit({
        initialData: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        },

        handleValidation: (fields, intlTelInputRef) => {
            const validation = {};
            const isEmpty = (value) => !value || !String(value).trim();

            const validate = ({ name, condition, error }) => {
                if (condition) {
                    validation[name] = {
                        isInvalid: true,
                        error,
                    };
                }
            };

            validate({
                name: "firstName",
                condition: isEmpty(fields.firstName),
                error: "First name is required.",
            });

            validate({
                name: "lastName",
                condition: isEmpty(fields.lastName),
                error: "Last name is required.",
            });

            validate({
                name: "email",
                condition: !/\S+@\S+\.\S+/.test(fields.email),
                error: "Valid email address is required.",
            });

            validate({
                name: "phone",
                condition:
                    !intlTelInputRef.current ||
                    !intlTelInputRef.current.isValidNumber(),
                error: "Valid phone number is required.",
            });

            validate({
                name: "subject",
                condition: isEmpty(fields.subject),
                error: "Please add a subject.",
            });

            return validation;
        },

        emailMethod: "api",
        mailerSetting: getMailerSettings({
            fromName: "Website Enquiry",
            subject: "New Contact Form Submission",
        }),
    });

    return (
        <form
            ref={formRef}
            id="enquiry_form"
            className="contact-form needs-validation"
            onSubmit={handleSubmit}
            noValidate
        >
            <div className="row">
                <div className="col-md-6 input-wrapper">
                    <label className="form-label">First name*</label>
                    <input
                        className={classes(
                            "form-control",
                            formValidation.firstName?.isInvalid && "is-invalid"
                        )}
                        name="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        onChange={handleChange}
                        value={formData.firstName}
                    />
                    <div className="invalid-feedback">
                        {formValidation.firstName?.error}
                    </div>
                </div>

                <div className="col-md-6 input-wrapper">
                    <label className="form-label">Last name*</label>
                    <input
                        className={classes(
                            "form-control",
                            formValidation.lastName?.isInvalid && "is-invalid"
                        )}
                        name="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        onChange={handleChange}
                        value={formData.lastName}
                    />
                    <div className="invalid-feedback">
                        {formValidation.lastName?.error}
                    </div>
                </div>

                <div className="col-md-6 input-wrapper">
                    <label className="form-label">Phone number*</label>
                    <IntlTelInputField
                        id="phone"
                        name="phone"
                        className={classes(
                            "form-control phone-input",
                            formValidation.phone?.isInvalid && "is-invalid"
                        )}
                        intlTelInputRef={intlTelInputRef}
                        error={formValidation.phone?.error}
                        setFormData={setFormData}
                        setFormValidation={setFormValidation}
                        required
                    />
                </div>

                <div className="col-md-6 input-wrapper">
                    <label className="form-label">Email address*</label>
                    <input
                        className={classes(
                            "form-control",
                            formValidation.email?.isInvalid && "is-invalid"
                        )}
                        name="email"
                        type="email"
                        placeholder="Enter email address"
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <div className="invalid-feedback">
                        {formValidation.email?.error}
                    </div>
                </div>

                <div className="col-md-12 input-wrapper">
                    <label className="form-label">Subject</label>
                    <input
                        className={classes(
                            "form-control",
                            formValidation.subject?.isInvalid && "is-invalid"
                        )}
                        name="subject"
                        type="text"
                        placeholder="Enter subject"
                        onChange={handleChange}
                        value={formData.subject}
                    />
                    <div className="invalid-feedback">
                        {formValidation.subject?.error}
                    </div>
                </div>

                <div className="col-12 input-wrapper">
                    <label className="form-label">Message</label>
                    <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        placeholder="Explain your requirement in detail"
                        onChange={handleChange}
                        value={formData.message}
                    />
                </div>

                <div className="button-wrapper">
                    <Button
                        textLabel="Send a Message"
                        type="submit"
                        iconClass="fa-solid fa-paper-plane"
                    />
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
