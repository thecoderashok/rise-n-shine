import React from "react";
import Button from "../Button/Button";
import IntlTelInputField from "./IntlTelInputField";
import { useFormSubmit } from "../../hook/useFormSubmit";
import { getMailerSettings } from "../../mailerSettings";

const AdmissionForm = () => {
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
        handleValidation: (values, phoneItiRef) => {
            const errs = {};
            if (!values.firstName.trim()) errs.firstName = "First name is required.";
            if (!values.lastName.trim()) errs.lastName = "Last name is required.";
            if (!/\S+@\S+\.\S+/.test(values.email)) errs.email = "Valid email address is required.";

            const itiInstance = phoneItiRef?.current;
            const isPhoneValid = itiInstance ? itiInstance.isValidNumber() : /^\+?[0-9]{10,15}$/.test(values.phone);
            if (!values.phone.trim() || !isPhoneValid) errs.phone = "Valid phone number is required.";

            if (!values.dob) errs.dob = "Date of birth is required.";
            if (!values.country) errs.country = "Country of residence is required.";
            if (!values.intake) errs.intake = "Select an intake of interest.";
            if (!values.curriculum) errs.curriculum = "Select a curriculum.";
            return errs;
        },
        emailMethod: "api",
        mailerSetting: getMailerSettings({
            subject: "Admission Enquiry from Website",
            fromName: "Admission Form",
        }),
    });

    const handlePhoneNumberChange = (formattedNumber) => {
        setFormData((prev) => ({ ...prev, phone: formattedNumber || "" }));
        setErrors((prev) => ({ ...prev, phone: "" }));
    };

    return (
        <form className="admission-form needs-validation" onSubmit={handleSubmit} noValidate>
            <div className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">First name*</label>
                    <input
                        type="text"
                        className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                        placeholder="First name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <div className="invalid-feedback">{errors.firstName}</div>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Last name*</label>
                    <input
                        type="text"
                        className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                        placeholder="Last name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    <div className="invalid-feedback">{errors.lastName}</div>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Email*</label>
                    <input
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <div className="invalid-feedback">{errors.email}</div>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Phone number*</label>
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
                    <label className="form-label">Date of birth*</label>
                    <input
                        type="date"
                        className={`form-control ${errors.dob ? "is-invalid" : ""}`}
                        placeholder="DD-MM-YYYY"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                    />
                    <div className="invalid-feedback">{errors.dob}</div>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Country of Residence*</label>
                    <select
                        className={`form-select ${errors.country ? "is-invalid" : ""}`}
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select</option>
                        <option value="uae">United Arab Emirates</option>
                        <option value="in">India</option>
                        <option value="uk">United Kingdom</option>
                        <option value="us">United States</option>
                        <option value="sa">Saudi Arabia</option>
                    </select>
                    <div className="invalid-feedback">{errors.country}</div>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Intake of interest*</label>
                    <select
                        className={`form-select ${errors.intake ? "is-invalid" : ""}`}
                        name="intake"
                        value={formData.intake}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select</option>
                        <option value="jan">January</option>
                        <option value="apr">April</option>
                        <option value="jul">July</option>
                        <option value="oct">October</option>
                    </select>
                    <div className="invalid-feedback">{errors.intake}</div>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Curriculum*</label>
                    <select
                        className={`form-select ${errors.curriculum ? "is-invalid" : ""}`}
                        name="curriculum"
                        value={formData.curriculum}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select</option>
                        <option value="marketing">Marketing &amp; Sales</option>
                        <option value="finance">Finance &amp; Analytics</option>
                        <option value="tech">Technology &amp; AI</option>
                        <option value="other">Other</option>
                    </select>
                    <div className="invalid-feedback">{errors.curriculum}</div>
                </div>

                <div className="col-12">
                    <label className="form-label">Additional details</label>
                    <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Tell us anything else we should know."
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-12">
                    <div className="button-wrapper justify-content-end">
                        <Button textLabel={"Submit"} type="submit" iconClass="fa-solid fa-paper-plane" />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AdmissionForm;
