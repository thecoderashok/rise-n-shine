import React, { useMemo } from "react";
import ContactForm from "../../components/Forms/ContactForm";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import SecTitle from "../../components/SecTitle";

const ContactSec = () => {
    const contactDetails = useMemo(
        () => [
            {
                label: "Hotline",
                description: "Speak with our admissions desk",
                value: "+91 8654 230 120",
                iconClass: "fa-solid fa-phone-volume",
                action: "tel:+918654230120",
            },
            {
                label: "SMS / WhatsApp",
                description: "Chat with our counsellors",
                value: "+91 8654 230 121",
                iconClass: "fa-solid fa-comments",
                action: "https://wa.me/918654230121",
            },
            {
                label: "Email",
                description: "Send us your detailed queries",
                value: "admissions@risenshine.com",
                iconClass: "fa-solid fa-envelope-open-text",
                action: "mailto:admissions@risenshine.com",
            },
        ],
        []
    );

    return (
        <section className="contact-sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 ">
                        <SecTitle
                            mainTitle={"Contact Us"}
                        />
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <ScrollReveal direction="clip-scale-in-downward" offset={30} delay={0.4}>
                                <div className="col-lg-5">
                                    <aside className="contact-info-panel">
                                        <div className="contact-info-header">
                                            <h3>Let&apos;s start a conversation</h3>
                                            <p>
                                                Reach out to our team for admissions guidance,
                                                program details, or collaboration ideas. We respond
                                                within one business day.
                                            </p>
                                        </div>
                                        <div className="contact-info-list">
                                            {contactDetails.map((item) => (
                                                <fiv className="contact-info-item" key={item.label}>
                                                    <div className="icon">
                                                        <i className={item.iconClass} aria-hidden="true"></i>
                                                    </div>
                                                    <div className="details">
                                                        <p className="label">{item.label}</p>
                                                        <a
                                                            href={item.action}
                                                            className="value"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            {item.value}
                                                        </a>
                                                    </div>
                                                </fiv>
                                            ))}
                                        </div>
                                    </aside>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal direction="fade-up" offset={40} delay={0.4}>
                                <div className="col-lg-7">
                                    <div className="contact-form-panel">
                                        <div className="contactForm-container">
                                            <ContactForm />
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSec;
