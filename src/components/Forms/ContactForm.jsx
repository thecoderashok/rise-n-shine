import React from 'react'
import { useClassNames } from '../../hook/useClassNames';
import { useFormSubmit } from '../../hook/useFormSubmit';
import Button from '../Button/Button';

const ContactForm = () => {
    const classes = useClassNames();

    const {
        formData,
        errors,
        handleChange,
        handleSubmit,
    } = useFormSubmit({
        initialData: {
            name: "",
            email: "",
            phone: "",
            city: "",
            company: "",
            message: "",
        },
        handleValidation: (values) => {
            const errs = {};
            if (!values.name.trim()) errs.name = "Full name is required.";
            if (!/\S+@\S+\.\S+/.test(values.email)) errs.email = "Valid email address is required.";
            if (!/^\+?[0-9]{10,15}$/.test(values.phone)) {
                errs.phone = "Valid phone number is required!";
            }
            // if (!itiRef.current?.isValidNumber()) errs.phone = "Valid phone number is required.";
            return errs;
        },
        emailMethod: "php",
        mailerSetting: {
            fromName: "Gilcon Projects Testing",
            sendTo: ["thecoderashok@gmail.com"],
            subject: "New Enquiry from Website"
        },
    });


    return (
        <form
            id="enquiry_form"
            className="contact-form needs-validation"
            onSubmit={handleSubmit}
            noValidate
        >
            <div className="row">
                <div className="col-md-12 input-wrapper">
                    <input
                        className={classes("form-control", errors.name && "is-invalid")}
                        id="firstName"
                        type="text"
                        name="name"
                        placeholder="Full name*"
                        required
                        onChange={handleChange}
                        value={formData.name}
                    />
                    <div className="invalid-feedback">{errors.name}</div>
                </div>

                <div className="col-md-6 input-wrapper">
                    <input
                        className={classes("form-control phone-input", errors.phone && "is-invalid")}
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="Mobile Number*"
                        minLength={10}
                        maxLength={12}
                        onChange={handleChange}
                        value={formData.phone}
                        required
                    // ref={inputRef}
                    />
                    <div className="invalid-feedback" style={errors.phone ? { display: "block" } : { display: "none" }}>{errors.phone}</div>
                </div>

                <div className="col-md-6 input-wrapper">
                    <input
                        className={classes("form-control", errors.email && "is-invalid")}
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email address*"
                        required
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <div className="invalid-feedback">{errors.email}</div>
                </div>

                <div className="col-12 input-wrapper">
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
                    <Button textLable={"Submit Enquiry"} type="submit" />
                </div>
            </div>
        </form>
    )
}

export default ContactForm;