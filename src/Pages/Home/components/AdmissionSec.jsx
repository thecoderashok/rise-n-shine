import React from "react";
import SecTitle from "../../../components/SecTitle";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import AdmissionForm from "../../../components/Forms/AdmissionForm";

const actions = [
    { label: "Download Brochure", icon: "fa-regular fa-file-lines" },
    { label: "Schedule a Call", icon: "fa-solid fa-phone-volume" },
    { label: "Scholarship Enquiry", icon: "fa-solid fa-hands-holding" },
    { label: "Apply for Admission", icon: "fa-solid fa-arrow-right-to-bracket" }
];

const AdmissionSec = () => {
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
                            <div className="form-card">
                                <div className="form-head">
                                    <h3 className="heading-text">Enquire now</h3>
                                </div>

                                <AdmissionForm />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionSec;
