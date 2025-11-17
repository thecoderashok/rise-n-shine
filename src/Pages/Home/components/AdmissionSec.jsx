import React, { useEffect, useRef } from "react";
import SecTitle from "../../../components/SecTitle";
import Button from "../../../components/Button/Button";
import intlTelInput from "intl-tel-input";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";

const actions = [
    { label: "Download Brochure", icon: "fa-regular fa-file-lines" },
    { label: "Schedule a Call", icon: "fa-solid fa-phone-volume" },
    { label: "Scholarship Enquiry", icon: "fa-solid fa-hands-holding" },
    { label: "Apply for Admission", icon: "fa-solid fa-arrow-right-to-bracket" }
];

const AdmissionSec = () => {
    const phoneInputRef = useRef(null);

    useEffect(() => {
        if (!phoneInputRef.current) return undefined;

        const iti = intlTelInput(phoneInputRef.current, {
            initialCountry: "ae",
            separateDialCode: true,
            nationalMode: false,
        });

        return () => {
            iti.destroy();
        };
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section className="admission-sec" id="admissions">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 left-side">
                        <div className="admission-copy">
                            <SecTitle
                                subTitle={"Admissions"}
                                mainTitle={<>Start Your Application</>}
                                desc={<>
                                    Tell us a little about you and we will guide you to the right programme. Our team responds within one business day.
                                </>}
                                revealLetters={true}
                            />

                            <ScrollReveal direction="fade-up" delay={0.4}>
                                <div className="admission-actions">
                                    {actions.map((action, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            className="admission-action-btn"
                                        >
                                            <span className="icon" aria-hidden="true">
                                                <i className={action.icon}></i>
                                            </span>
                                            <span>{action.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <ScrollReveal direction="fade-right" delay={0.4}>
                            <div className="admission-form-card">
                                <div className="admission-form-head">
                                    <span className="eyebrow">Enquire now</span>
                                    {/* <span className="indicator" aria-hidden="true">
                                        <span className="dot" />
                                    </span> */}
                                </div>

                                <form className="admission-form needs-validation" onSubmit={handleSubmit} noValidate>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label">First name*</label>
                                            <input type="text" className="form-control" placeholder="First name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Last name*</label>
                                            <input type="text" className="form-control" placeholder="Last name" required />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Email*</label>
                                            <input type="email" className="form-control" placeholder="Email" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Phone number*</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                ref={phoneInputRef}
                                                name="phone"
                                                placeholder="Mobile number"
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Date of birth*</label>
                                            <input type="date" className="form-control" placeholder="DD-MM-YYYY" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Country of Residence*</label>
                                            <select className="form-select" defaultValue="" required>
                                                <option value="" disabled>Select</option>
                                                <option value="uae">United Arab Emirates</option>
                                                <option value="in">India</option>
                                                <option value="uk">United Kingdom</option>
                                                <option value="us">United States</option>
                                                <option value="sa">Saudi Arabia</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Intake of interest*</label>
                                            <select className="form-select" defaultValue="" required>
                                                <option value="" disabled>Select</option>
                                                <option value="jan">January</option>
                                                <option value="apr">April</option>
                                                <option value="jul">July</option>
                                                <option value="oct">October</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Curriculum*</label>
                                            <select className="form-select" defaultValue="" required>
                                                <option value="" disabled>Select</option>
                                                <option value="marketing">Marketing &amp; Sales</option>
                                                <option value="finance">Finance &amp; Analytics</option>
                                                <option value="tech">Technology &amp; AI</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label">Additional details</label>
                                            <textarea className="form-control" rows="3" placeholder="Tell us anything else we should know." />
                                        </div>

                                        <div className="col-12 d-flex justify-content-end">
                                            <Button textLable={"Submit"} type="submit" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionSec;
