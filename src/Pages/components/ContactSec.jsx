import React from "react";
import ContactForm from "../../components/Forms/ContactForm";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import SecTitle from "../../components/SecTitle";

const ContactSec = () => {

    const contactDetails = [
        {
            label: "Call Us",
            description: "Speak with our support team",
            value: "+971 50 991 4947",
            iconClass: "fa-solid fa-phone-volume",
            action: "tel:+971509914947",
        },
        {
            label: "SMS / WhatsApp",
            description: "Chat with us on WhatsApp",
            value: "+91 79878 21654",
            iconClass: "fa-solid fa-comments",
            action: "https://wa.me/917987821654",
        },
        {
            label: "Email",
            description: "Send us your detailed queries",
            value: "info@risenshine.ae",
            iconClass: "fa-solid fa-envelope-open-text",
            action: "mailto:info@risenshine.ae",
        },
    ]


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
                                                <div className="contact-info-item" key={item.label}>
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
                                                </div>
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
