import React, { useRef } from "react";
import Button from "../Button/Button";
import IntlTelInputField from "./IntlTelInputField";
import { useFormSubmit } from "../../hook/useFormSubmit";
import { getMailerSettings } from "../../mailerSettings";
import { useClassNames } from "../../hook/useClassNames";

const AdmissionForm = () => {
    const classes = useClassNames();
    const formRef = useRef(null);

    const {
        formData,
        handleChange,
        handleSubmit,
        intlTelInputRef,
        formValidation,
        setFormData,
        setFormValidation,
    } = useFormSubmit({
        initialData: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            dob: "",
            country: "",
            intake: "",
            curriculum: "",
            details: "",
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
                name: "dob",
                condition: !fields.dob,
                error: "Date of birth is required.",
            });

            validate({
                name: "country",
                condition: isEmpty(fields.country),
                error: "Country of residence is required.",
            });

            validate({
                name: "intake",
                condition: isEmpty(fields.intake),
                error: "Select an intake of interest.",
            });

            validate({
                name: "curriculum",
                condition: isEmpty(fields.curriculum),
                error: "Select a curriculum.",
            });

            return validation;
        },

        emailMethod: "api",
        mailerSetting: getMailerSettings({
            subject: "Admission Enquiry from Website",
            fromName: "Admission Form",
        }),
    });

    return (
        <form
            ref={formRef}
            className="admission-form needs-validation"
            onSubmit={handleSubmit}
            noValidate
        >
            <div className="row">
                <div className="col-md-6  input-wrapper">
                    <label className="form-label">First name*</label>
                    <input
                        type="text"
                        name="firstName"
                        className={classes(
                            "form-control",
                            formValidation.firstName?.isInvalid && "is-invalid"
                        )}
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                        {formValidation.firstName?.error}
                    </div>
                </div>

                <div className="col-md-6  input-wrapper">
                    <label className="form-label">Last name*</label>
                    <input
                        type="text"
                        name="lastName"
                        className={classes(
                            "form-control",
                            formValidation.lastName?.isInvalid && "is-invalid"
                        )}
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                        {formValidation.lastName?.error}
                    </div>
                </div>

                <div className="col-md-6 input-wrapper">
                    <label className="form-label">Email*</label>
                    <input
                        type="email"
                        name="email"
                        className={classes(
                            "form-control",
                            formValidation.email?.isInvalid && "is-invalid"
                        )}
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                        {formValidation.email?.error}
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
                    <label className="form-label">Date of birth*</label>
                    <input
                        type="date"
                        name="dob"
                        className={classes(
                            "form-control",
                            formValidation.dob?.isInvalid && "is-invalid"
                        )}
                        value={formData.dob}
                        onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                        {formValidation.dob?.error}
                    </div>
                </div>

                <div className="col-md-6 input-wrapper">
                    <label className="form-label">Country of Residence*</label>
                    <select
                        name="country"
                        className={classes(
                            "form-select",
                            formValidation.country?.isInvalid && "is-invalid"
                        )}
                        value={formData.country}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="uae">United Arab Emirates</option>
                        <option value="in">India</option>
                        <option value="uk">United Kingdom</option>
                        <option value="us">United States</option>
                        <option value="sa">Saudi Arabia</option>
                    </select>
                    <div className="invalid-feedback">
                        {formValidation.country?.error}
                    </div>
                </div>

                <div className="col-md-6 input-wrapper">
                    <label className="form-label">Intake of interest*</label>
                    <select
                        name="intake"
                        className={classes(
                            "form-select",
                            formValidation.intake?.isInvalid && "is-invalid"
                        )}
                        value={formData.intake}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="jan">January</option>
                        <option value="apr">April</option>
                        <option value="jul">July</option>
                        <option value="oct">October</option>
                    </select>
                    <div className="invalid-feedback">
                        {formValidation.intake?.error}
                    </div>
                </div>

                <div className="col-md-6 input-wrapper">
                    <label className="form-label">Curriculum*</label>
                    <select
                        name="curriculum"
                        className={classes(
                            "form-select",
                            formValidation.curriculum?.isInvalid && "is-invalid"
                        )}
                        value={formData.curriculum}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="marketing">Marketing & Sales</option>
                        <option value="finance">Finance & Analytics</option>
                        <option value="tech">Technology & AI</option>
                        <option value="other">Other</option>
                    </select>
                    <div className="invalid-feedback">
                        {formValidation.curriculum?.error}
                    </div>
                </div>

                <div className="col-12">
                    <label className="form-label">Additional details</label>
                    <textarea
                        name="details"
                        className="form-control"
                        rows="3"
                        placeholder="Tell us anything else we should know."
                        value={formData.details}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-12">
                    <div className="button-wrapper justify-content-end">
                        <Button
                            textLabel="Submit"
                            type="submit"
                            iconClass="fa-solid fa-paper-plane"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AdmissionForm;
