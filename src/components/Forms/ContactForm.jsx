import React from 'react'
import { useClassNames } from '../../hook/useClassNames';
import { useFormSubmit } from '../../hook/useFormSubmit';
import Button from '../Button/Button';
import { getMailerSettings } from '../../mailerSettings';
import IntlTelInputField from './IntlTelInputField';

const ContactForm = () => {
    const classes = useClassNames();

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
            subject: "",
            message: "",
        },
        handleValidation: (values, phoneItiRef) => {
            const errs = {};
            if (!values.firstName.trim()) errs.firstName = "First name is required.";
            if (!values.lastName.trim()) errs.lastName = "Last name is required.";
            if (!/\S+@\S+\.\S+/.test(values.email)) errs.email = "Valid email address is required.";
            const itiInstance = phoneItiRef?.current;
            const isPhoneValid = itiInstance ? itiInstance.isValidNumber() : /^\+?[0-9]{10,15}$/.test(values.phone);
            if (!values.phone.trim() || !isPhoneValid) errs.phone = "Valid phone number is required!";
            if (!values.subject.trim()) errs.subject = "Please add a subject.";
            return errs;
        },
        emailMethod: "api",
        mailerSetting: getMailerSettings(),
    });

    const handlePhoneNumberChange = (formattedNumber) => {
        setFormData((prev) => ({ ...prev, phone: formattedNumber || "" }));
        setErrors((prev) => ({ ...prev, phone: "" }));
    };

    return (
        <form
            id="enquiry_form"
            className="contact-form needs-validation"
            onSubmit={handleSubmit}
            noValidate
        >
            <div className="row">
                <div className="col-md-6 input-wrapper">
                    <label className="form-label">First name*</label>
                    <input
                        className={classes("form-control", errors.firstName && "is-invalid")}
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name*"
                        required
                        onChange={handleChange}
                        value={formData.firstName}
                    />
                    <div className="invalid-feedback">{errors.firstName}</div>
                </div>
                <div className="col-md-6 input-wrapper">
                    <label className="form-label">Last name*</label>
                    <input
                        className={classes("form-control", errors.lastName && "is-invalid")}
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name*"
                        required
                        onChange={handleChange}
                        value={formData.lastName}
                    />
                    <div className="invalid-feedback">{errors.lastName}</div>
                </div>

                <div className="col-md-6 input-wrapper">
                    <label className="form-label">Phone number*</label>
                    <IntlTelInputField
                        className={classes("form-control phone-input", errors.phone && "is-invalid")}
                        id="phone"
                        name="phone"
                        placeholder="Enter phone number*"
                        minLength={10}
                        maxLength={12}
                        required
                        value={formData.phone}
                        itiRef={itiRef}
                        onChange={handleChange}
                        onNumberChange={handlePhoneNumberChange}
                        error={errors.phone}
                        
                    />
                </div>

                <div className="col-md-6 input-wrapper">
                    <label className="form-label">Email address*</label>
                    <input
                        className={classes("form-control", errors.email && "is-invalid")}
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter email address*"
                        required
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <div className="invalid-feedback">{errors.email}</div>
                </div>

                <div className="col-md-12 input-wrapper">
                    <label className="form-label">Subject</label>
                    <input
                        className={classes("form-control", errors.subject && "is-invalid")}
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Enter subject"
                        onChange={handleChange}
                        value={formData.subject}
                    />
                    <div className="invalid-feedback">{errors.subject}</div>
                </div>

                <div className="col-12 input-wrapper">
                    <label className="form-label">Message</label>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Explain your requirement in detail"
                        rows="5"
                        onChange={handleChange}
                        value={formData.message}
                    ></textarea>
                </div>

                <div className="button-wrapper">
                    <Button textLabel={"Send a Message"} type="submit" iconClass="fa-solid fa-paper-plane" />
                </div>
            </div>
        </form>
    )
}

export default ContactForm;
