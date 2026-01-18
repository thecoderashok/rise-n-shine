import React from "react";
import PageBannerSec from "../components/PageBannerSec";
import ContactForm from "../../components/Forms/ContactForm";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import SecTitle from "../../components/SecTitle";
import { usePageSEO } from "../../hook/usePageSEO";

const ContactUs = () => {
    usePageSEO({
        title: "Contact Us - Get in Touch | Rise N Shine Institute of Learning",
        canonical: `${window.location.origin}/contact-us`,
    });

    const contacts = [
        {
            title: "Corporate Office - Dubai",
            items: [
                {
                    label: "Address",
                    icon: "fa-regular fa-location-dot",
                    detail: "Block 4, 101, 1st floor, Dubai International Academic City, Dubai, United Arab Emirates.",
                    type: "address",
                },
                {
                    icon: "fa-regular fa-phone",
                    label: "Contact Number",
                    detail: [
                        "+971 50 991 4947",
                        "+91 79878 21654",
                    ],
                    link: [
                        "tel:+971509914947",
                        "tel:+917987821654",
                    ],
                    type: "phone",
                },
                {
                    label: "Email",
                    icon: "fa-regular fa-envelope",
                    detail: "info@risenshine.ae",
                    link: "mailto:info@risenshine.ae",
                    type: "email",
                },
            ],
        },
    ];


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
                banner={{
                    src: "/images/contact-banner.jpg",
                    alt: "Get in Touch with Us",
                }}
            />

            <section className="contact-page-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 left-side">
                            {contacts.map((contact, contactIndex) => (
                                <div className="contact-details-box" key={contactIndex}>
                                    {contact.items.map((item, index) => (
                                        <ScrollReveal direction="fade-left" delay={index * 0.08} key={index}>
                                            <div className="contact-widget">
                                                {/* {index === 0 && (
                                                    <h3 className='widget-title'>{contact.title}</h3>
                                                )} */}
                                                <div className="contact-item">
                                                    <span className="icon">
                                                        <i className={item.icon}></i>
                                                    </span>

                                                    <div className="details-wrapper">
                                                        <h3 className="contact-item-heading">
                                                            {item.label}
                                                        </h3>
                                                        <div className="detail">
                                                            {item.type === "address" ? (
                                                                <address>{item.detail}</address>
                                                            ) : Array.isArray(item.detail) && Array.isArray(item.link) ? (
                                                                <p>
                                                                    {item.detail.map((text, i) => (
                                                                        <span key={i}>
                                                                            <a href={item.link[i]}>{text}</a>
                                                                            {i < item.detail.length - 1 && <span className="separator">/</span>}
                                                                        </span>
                                                                    ))}
                                                                </p>
                                                            ) : item.link ? (
                                                                <p>
                                                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                                        {item.detail}
                                                                    </a>
                                                                </p>
                                                            ) : (
                                                                <p>{item.detail}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ScrollReveal>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-7 right-side">
                            <ScrollReveal direction="fade-right" delay={0.4}>
                                <div className="form-container">
                                    <h2 className="form-title">
                                        Enquiry Now
                                    </h2>

                                    <ContactForm />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-map-sec pt-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 map-sec">
                            <iframe
                                title="103, First floor, Casa Grande, Lane No. 8, Meera Nagar, Koregaon Park, Pune, Maharashtra 411001."
                                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d462277.2872197957!2d55.349161!3d25.151194!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA3JzIyLjYiTiA1NcKwMjQnNDUuMiJF!5e0!3m2!1sen!2sin!4v1768757883194!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
