import React from "react";
import Button from "../Button/Button";
import IntlTelInputField from "./IntlTelInputField";
import { useFormSubmit } from "../../hook/useFormSubmit";
import { getMailerSettings } from "../../mailerSettings";

const AdmissionPageForm = () => {
    const {
        formData,
        errors,
        handleChange,
        handleSubmit,
        setFormData,
        setErrors,
        itiRef,
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
        handleValidation: (values, phoneItiRef) => {
            const errs = {};

            // Basic Information
            if (!values.fullName.trim()) errs.fullName = "Full name is required.";
            if (!values.dateOfBirth) errs.dateOfBirth = "Date of birth is required.";
            if (!/\S+@\S+\.\S+/.test(values.email)) errs.email = "Valid email address is required.";

            const itiInstance = phoneItiRef?.current;
            const isPhoneValid = itiInstance ? itiInstance.isValidNumber() : /^\+?[0-9]{10,15}$/.test(values.phone);
            if (!values.phone.trim() || !isPhoneValid) errs.phone = "Valid phone number is required.";

            if (!values.nationality.trim()) errs.nationality = "Nationality is required.";
            if (!values.currentEducation.trim()) errs.currentEducation = "Current education/qualification is required.";

            // Programme Selection
            if (!values.specialization) errs.specialization = "Please select a specialization programme.";

            // Additional Details
            if (!values.reasonForChoosing.trim()) errs.reasonForChoosing = "Reason for choosing this programme is required.";
            if (values.reasonForChoosing.trim().split(/\s+/).length > 200) {
                errs.reasonForChoosing = "Reason must be 200 words or less.";
            }
            if (!values.preferredMode) errs.preferredMode = "Please select preferred mode of study.";
            if (!values.priorExperience) errs.priorExperience = "Please indicate if you have prior experience.";

            // Declaration
            if (!values.declaration) errs.declaration = "You must agree to the declaration to proceed.";

            return errs;
        },
        emailMethod: "api",
        mailerSetting: getMailerSettings({
            subject: "Admission Application from Website",
            fromName: "Admission Page Form",
        }),
    });

    const handlePhoneNumberChange = (formattedNumber) => {
        setFormData((prev) => ({ ...prev, phone: formattedNumber || "" }));
        setErrors((prev) => ({ ...prev, phone: "" }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prev) => ({ ...prev, [name]: checked }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const wordCount = formData.reasonForChoosing.trim().split(/\s+/).filter(word => word.length > 0).length;

    return (
        <form className="admission-page-form needs-validation" data-lenis-prevent="true" onSubmit={handleSubmit} noValidate>
            <div className="row g-3">
                <div className="col-12">
                    <label className="form-label">Full Name*</label>
                    <input
                        type="text"
                        className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                        placeholder="Enter your full name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    <div className="invalid-feedback">{errors.fullName}</div>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Date of Birth (DD/MM/YYYY)*</label>
                    <input
                        type="date"
                        className={`form-control ${errors.dateOfBirth ? "is-invalid" : ""}`}
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                    />
                    <div className="invalid-feedback">{errors.dateOfBirth}</div>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Email Address*</label>
                    <input
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        placeholder="your.email@example.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <div className="invalid-feedback">{errors.email}</div>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Phone Number*</label>
                    <IntlTelInputField
                        className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                        name="phone"
                        placeholder="Mobile number"
                        itiRef={itiRef}
                        value={formData.phone}
                        itiConfig={{ initialCountry: "ae", nationalMode: false }}
                        required
                        onChange={handleChange}
                        onNumberChange={handlePhoneNumberChange}
                        error={errors.phone}
                    />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Nationality*</label>
                    <input
                        type="text"
                        className={`form-control ${errors.nationality ? "is-invalid" : ""}`}
                        placeholder="Your nationality"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        required
                    />
                    <div className="invalid-feedback">{errors.nationality}</div>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Current Education/Qualification*</label>
                    <input
                        type="text"
                        className={`form-control ${errors.currentEducation ? "is-invalid" : ""}`}
                        placeholder="e.g., Bachelor's Degree, Master's Degree"
                        name="currentEducation"
                        value={formData.currentEducation}
                        onChange={handleChange}
                        required
                    />
                    <div className="invalid-feedback">{errors.currentEducation}</div>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Occupation (if applicable)</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Your current occupation"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-12">
                    <label className="form-label">Which specialization are you applying for?*</label>
                    <select
                        className={`form-select ${errors.specialization ? "is-invalid" : ""}`}
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select a specialization</option>
                        <option value="marketing">Marketing Specialization Programme</option>
                        <option value="finance">Finance Specialization Programme</option>
                        <option value="digital-storytelling">Art of Digital Storytelling</option>
                    </select>
                    <div className="invalid-feedback">{errors.specialization}</div>
                </div>

                <div className="col-12">
                    <label className="form-label">
                        Reason for Choosing this Programme*
                    </label>
                    <textarea
                        className={`form-control ${errors.reasonForChoosing ? "is-invalid" : ""}`}
                        rows="3"
                        placeholder="Explain why you are interested in this programme..."
                        name="reasonForChoosing"
                        value={formData.reasonForChoosing}
                        onChange={handleChange}
                        required
                    />
                    <div className="word-count">
                        Words: {wordCount} / 200
                    </div>
                    <div className="invalid-feedback">{errors.reasonForChoosing}</div>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Preferred Mode of Study*</label>
                    <select
                        className={`form-select ${errors.preferredMode ? "is-invalid" : ""}`}
                        name="preferredMode"
                        value={formData.preferredMode}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select mode</option>
                        <option value="online">Online</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="in-person">In-person</option>
                    </select>
                    <div className="invalid-feedback">{errors.preferredMode}</div>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Do you have prior experience in this field?*</label>
                    <select
                        className={`form-select ${errors.priorExperience ? "is-invalid" : ""}`}
                        name="priorExperience"
                        value={formData.priorExperience}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <div className="invalid-feedback">{errors.priorExperience}</div>
                </div>

                <div className="col-12">
                    <div className={`form-check ${errors.declaration ? "is-invalid" : ""}`}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="declaration"
                            id="declaration"
                            checked={formData.declaration}
                            onChange={handleCheckboxChange}
                            required
                        />
                        <label className="form-check-label" htmlFor="declaration">
                            I hereby declare that the information provided is true and I consent to be contacted for further admission procedures.*
                        </label>
                        <div className="invalid-feedback">{errors.declaration}</div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="button-wrapper justify-content-center">
                        <Button textLabel={"Submit Application"} type="submit" iconClass="fa-solid fa-paper-plane" />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AdmissionPageForm;

