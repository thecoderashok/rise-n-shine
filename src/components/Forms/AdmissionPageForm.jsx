import React, { useRef } from "react";
import Button from "../Button/Button";
import IntlTelInputField from "./IntlTelInputField";
import { useFormSubmit } from "../../hook/useFormSubmit";
import { getMailerSettings } from "../../mailerSettings";
import { useClassNames } from "../../hook/useClassNames";

const AdmissionPageForm = () => {
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
            fullName: "",
            dateOfBirth: "",
            email: "",
            phone: "",
            nationality: "",
            currentEducation: "",
            occupation: "",
            specialization: "",
            reasonForChoosing: "",
            preferredMode: "",
            priorExperience: "",
            declaration: false,
        },

        handleValidation: (fields, intlTelInputRef) => {
            const validation = {};
            const isEmpty = (v) => !v || !String(v).trim();

            const validate = ({ name, condition, error }) => {
                if (condition) {
                    validation[name] = {
                        isInvalid: true,
                        error,
                    };
                }
            };

            // Basic Information
            validate({
                name: "fullName",
                condition: isEmpty(fields.fullName),
                error: "Full name is required.",
            });

            validate({
                name: "dateOfBirth",
                condition: !fields.dateOfBirth,
                error: "Date of birth is required.",
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
                name: "nationality",
                condition: isEmpty(fields.nationality),
                error: "Nationality is required.",
            });

            validate({
                name: "currentEducation",
                condition: isEmpty(fields.currentEducation),
                error: "Current education/qualification is required.",
            });

            // Programme selection
            validate({
                name: "specialization",
                condition: isEmpty(fields.specialization),
                error: "Please select a specialization programme.",
            });

            // Additional details
            const wordCount =
                fields.reasonForChoosing?.trim().split(/\s+/).filter(Boolean)
                    .length || 0;

            validate({
                name: "reasonForChoosing",
                condition: isEmpty(fields.reasonForChoosing),
                error: "Reason for choosing this programme is required.",
            });

            validate({
                name: "reasonForChoosing",
                condition: wordCount > 200,
                error: "Reason must be 200 words or less.",
            });

            validate({
                name: "preferredMode",
                condition: isEmpty(fields.preferredMode),
                error: "Please select preferred mode of study.",
            });

            validate({
                name: "priorExperience",
                condition: isEmpty(fields.priorExperience),
                error: "Please indicate if you have prior experience.",
            });

            // Declaration
            validate({
                name: "declaration",
                condition: !fields.declaration,
                error: "You must agree to the declaration to proceed.",
            });

            return validation;
        },

        emailMethod: "api",
        mailerSetting: getMailerSettings({
            subject: "Admission Application from Website",
            fromName: "Admission Page Form",
        }),
    });

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prev) => ({ ...prev, [name]: checked }));
        setFormValidation((prev) => ({ ...prev, [name]: null }));
    };

    const wordCount =
        formData.reasonForChoosing
            ?.trim()
            .split(/\s+/)
            .filter(Boolean).length || 0;

    return (
        <form
            ref={formRef}
            className="admission-page-form needs-validation"
            data-lenis-prevent="true"
            onSubmit={handleSubmit}
            noValidate
        >
            <div className="row">
                <div className="col-12 input-wrapper">
                    <label className="form-label">Full Name*</label>
                    <input
                        type="text"
                        name="fullName"
                        className={classes(
                            "form-control",
                            formValidation.fullName?.isInvalid && "is-invalid"
                        )}
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                        {formValidation.fullName?.error}
                    </div>
                </div>

                <div className="col-md-6 input-wrapper">
                    <label className="form-label">Date of Birth*</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        className={classes(
                            "form-control",
                            formValidation.dateOfBirth?.isInvalid && "is-invalid"
                        )}
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                        {formValidation.dateOfBirth?.error}
                    </div>
                </div>

                <div className="col-md-6 input-wrapper">
                    <label className="form-label">Email Address*</label>
                    <input
                        type="email"
                        name="email"
                        className={classes(
                            "form-control",
                            formValidation.email?.isInvalid && "is-invalid"
                        )}
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                        {formValidation.email?.error}
                    </div>
                </div>

                <div className="col-md-6 input-wrapper">
                    <label className="form-label">Phone Number*</label>
                    <IntlTelInputField
                        name="phone"
                        className={classes(
                            "form-control phone-input",
                            formValidation.phone?.isInvalid && "is-invalid"
                        )}
                        intlTelInputRef={intlTelInputRef}
                        setFormData={setFormData}
                        setFormValidation={setFormValidation}
                        error={formValidation.phone?.error}
                        required
                    />
                </div>

                <div className="col-md-6 input-wrapper">
                    <label className="form-label">Nationality*</label>
                    <input
                        type="text"
                        name="nationality"
                        className={classes(
                            "form-control",
                            formValidation.nationality?.isInvalid && "is-invalid"
                        )}
                        value={formData.nationality}
                        onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                        {formValidation.nationality?.error}
                    </div>
                </div>

                <div className="col-md-6 input-wrapper">
                    <label className="form-label">
                        Current Education / Qualification*
                    </label>
                    <input
                        type="text"
                        name="currentEducation"
                        className={classes(
                            "form-control",
                            formValidation.currentEducation?.isInvalid &&
                                "is-invalid"
                        )}
                        value={formData.currentEducation}
                        onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                        {formValidation.currentEducation?.error}
                    </div>
                </div>

                <div className="col-md-6 input-wrapper">
                    <label className="form-label">Occupation</label>
                    <input
                        type="text"
                        name="occupation"
                        className="form-control"
                        value={formData.occupation}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-12 input-wrapper">
                    <label className="form-label">
                        Which specialization are you applying for?*
                    </label>
                    <select
                        name="specialization"
                        className={classes(
                            "form-select",
                            formValidation.specialization?.isInvalid &&
                                "is-invalid"
                        )}
                        value={formData.specialization}
                        onChange={handleChange}
                    >
                        <option value="">Select a specialization</option>
                        <option value="marketing">
                            Marketing Specialization Programme
                        </option>
                        <option value="finance">
                            Finance Specialization Programme
                        </option>
                        <option value="digital-storytelling">
                            Art of Digital Storytelling
                        </option>
                    </select>
                    <div className="invalid-feedback">
                        {formValidation.specialization?.error}
                    </div>
                </div>

                <div className="col-12 input-wrapper">
                    <label className="form-label">
                        Reason for Choosing this Programme*
                    </label>
                    <textarea
                        name="reasonForChoosing"
                        rows="3"
                        className={classes(
                            "form-control",
                            formValidation.reasonForChoosing?.isInvalid &&
                                "is-invalid"
                        )}
                        value={formData.reasonForChoosing}
                        onChange={handleChange}
                    />
                    <div className="word-count">
                        Words: {wordCount} / 200
                    </div>
                    <div className="invalid-feedback">
                        {formValidation.reasonForChoosing?.error}
                    </div>
                </div>

                <div className="col-md-6 input-wrapper">
                    <label className="form-label">Preferred Mode of Study*</label>
                    <select
                        name="preferredMode"
                        className={classes(
                            "form-select",
                            formValidation.preferredMode?.isInvalid &&
                                "is-invalid"
                        )}
                        value={formData.preferredMode}
                        onChange={handleChange}
                    >
                        <option value="">Select mode</option>
                        <option value="online">Online</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="in-person">In-person</option>
                    </select>
                    <div className="invalid-feedback">
                        {formValidation.preferredMode?.error}
                    </div>
                </div>

                <div className="col-md-6 input-wrapper">
                    <label className="form-label">
                        Do you have prior experience?*
                    </label>
                    <select
                        name="priorExperience"
                        className={classes(
                            "form-select",
                            formValidation.priorExperience?.isInvalid &&
                                "is-invalid"
                        )}
                        value={formData.priorExperience}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <div className="invalid-feedback">
                        {formValidation.priorExperience?.error}
                    </div>
                </div>

                <div className="col-12 input-wrapper">
                    <div
                        className={classes(
                            "form-check",
                            formValidation.declaration?.isInvalid &&
                                "is-invalid"
                        )}
                    >
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="declaration"
                            name="declaration"
                            checked={formData.declaration}
                            onChange={handleCheckboxChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="declaration"
                        >
                            I hereby declare that the information provided is
                            true and I consent to be contacted for further
                            admission procedures.*
                        </label>
                        <div className="invalid-feedback">
                            {formValidation.declaration?.error}
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="button-wrapper justify-content-center">
                        <Button
                            textLabel="Submit Application"
                            type="submit"
                            iconClass="fa-solid fa-paper-plane"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AdmissionPageForm;
