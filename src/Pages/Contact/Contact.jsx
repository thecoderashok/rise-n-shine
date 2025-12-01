import React from "react";
import PageBannerSec from "../components/PageBannerSec";
import ContactForm from "../../components/Forms/ContactForm";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import SecTitle from "../../components/SecTitle";
import { usePageSEO } from "../../hook/usePageSEO";

const Contact = () => {
    usePageSEO({
        title: "Contact Us - Get in Touch | Rise N Shine Institute of Learning",
        canonical: `${window.location.origin}/contact-us`,
    });

    const contactDetails = [
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
    ];

    const addressInfo = {
        title: "Visit Us",
        address: "Rise N Shine Institute of Learning",
        location: "Your Address Here, City, State, Country",
        icon: "fa-solid fa-location-dot",
    };

    // Google Maps embed URL - Replace with actual address coordinates
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin";

    return (
        <>
            <PageBannerSec
                pageTitle={"Contact Us"}
                title={
                    <>
                        Get in Touch <br /> with Us
                    </>
                }
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Contact Us" },
                ]}
                imageSrc={`/images/hero-banner.jpg`}
            />

            <section className="contact-sec sec-gray-2">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <SecTitle
                                mainTitle={"Contact Us"}
                                desc={"Reach out to our team for admissions guidance, program details, or collaboration ideas. We respond within one business day."}
                            />
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <ScrollReveal direction="clip-scale-in-downward" offset={30} delay={0.2}>
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
                                                {contactDetails.map((item, index) => (
                                                    <ScrollReveal
                                                        key={item.label}
                                                        direction="fade-up"
                                                        delay={0.1 * (index + 1)}
                                                    >
                                                        <article className="contact-info-item">
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
                                                                <span className="description">{item.description}</span>
                                                            </div>
                                                        </article>
                                                    </ScrollReveal>
                                                ))}
                                            </div>

                                            <ScrollReveal direction="fade-up" delay={0.4}>
                                                <div className="address-info">
                                                    <div className="address-icon">
                                                        <i className={addressInfo.icon}></i>
                                                    </div>
                                                    <div className="address-details">
                                                        <h4>{addressInfo.title}</h4>
                                                        <p className="address-name">{addressInfo.address}</p>
                                                        <p className="address-location">{addressInfo.location}</p>
                                                    </div>
                                                </div>
                                            </ScrollReveal>
                                        </aside>
                                    </div>
                                </ScrollReveal>
                                <ScrollReveal direction="fade-right" offset={30} delay={0.3}>
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

            <section className="contact-map-sec">
                <div className="container-fluid p-0">
                    <iframe
                        src={mapEmbedUrl}
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Rise N Shine Institute of Learning Location"
                    ></iframe>
                </div>
            </section>
        </>
    );
};

export default Contact;

