import React from "react";
import PageBannerSec from "../components/PageBannerSec";
import SecTitle from "../../components/SecTitle";
import Button from "../../components/Button/Button";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import ContactSec from "../components/ContactSec";
import Image from "../../components/Image";

const Admissions = () => {
    const admissionSteps = [
        {
            title: "Admission Notification",
            description: "Announcement of the admission cycle",
            icon: "/icons/notification.png",
        },
        {
            title: "Application Form",
            description: "Submission of application by aspirants",
            icon: "/icons/form-fill.png",
        },
        {
            title: "Selection Communication",
            description: "Information shared with shortlisted applicants",
            icon: "/icons/communication.png",
        },
        {
            title: "Candidate Assessment",
            description: "Evaluation through defined criteria and processes",
            icon: "/icons/assessment.png",
        },
        {
            title: "Shortlisting",
            description: "Preparation of the first merit and wait list",
            icon: "/icons/shortlist.png",
        },
        {
            title: "Merit List Announcement",
            description: "Publication of selected candidates",
            icon: "/icons/candidates-list.png",
        },
        {
            title: "Selection Letter",
            description: "Formal offer of admission",
            icon: "/icons/offer-letter.png",
        },
        {
            title: "Second Merit List",
            description: "Allocation based on the wait list",
            icon: "/icons/merit-list-2nd.png",
        },
        {
            title: "Admission Confirmation",
            description: "Completion of admission formalities by selected students",
            icon: "/icons/confirmation.png",
        },
        {
            title: "Refund Policy",
            description: "Admission cancellation and refund as per guidelines",
            icon: "/icons/refund-policy.png",
        },
        {
            title: "Reporting and Induction",
            description: "Orientation and commencement of the academic journey",
            icon: "/icons/academy-journey.png",
        },
    ];


    return (
        <>
            {/* Hero Section */}
            <PageBannerSec
                pageTitle={"Admissions"}
                title={
                    <>
                        Begin Your Journey <br /> at Rise N Shine
                    </>
                }
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Admissions" }]}
                imageSrc={`/images/hero-banner.jpg`}
            />

            <section className="about-intro-sec admissions-intro sec-gray">
                <div className="container">
                    <div className="row page-text-content align-items-center">
                        <div className="col-lg-6 left-side">
                            <ScrollReveal direction="fade-left" delay={0.1}>
                                <div className="image-wrapper">
                                    <Image
                                        src="/images/hero-2.jpg"
                                        width={1920}
                                        height={1080}
                                        alt=""
                                    />
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading-wrapper">
                                <h2 className="title-text">Admission Process</h2>
                            </div>
                            <div className="text-content py-0">
                                <p>
                                    The admission process at Rise and Shine Institute of Learning
                                    is designed to be transparent, structured, and
                                    student-centric. From the initial notification and application
                                    stage through to candidate assessment, shortlisting, and the
                                    preparation of merit lists, every step is carried out with
                                    fairness and clarity. Selected candidates receive formal
                                    communication and selection letters, with additional
                                    opportunities provided through wait-listed admissions. The
                                    process concludes with admission confirmation, orientation,
                                    and induction, ensuring that every aspirant begins the
                                    academic journey with confidence and a clear understanding of
                                    expectations. A dedicated policy on admission cancellation and
                                    refunds further reflects the institute's commitment to
                                    integrity and trust.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="admissions-timeline-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <SecTitle
                                mainTitle={<>Admission Process at <br /> <span className="colored">Rise and Shine</span></>}
                                additionalClass="text-center"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="admission-process-grid">
                                {admissionSteps.map((step, index) => (
                                    <ScrollReveal
                                        key={index}
                                        direction="fade-up"
                                        offset={30}
                                        delay={0.1 * (index + 1)}
                                    >
                                        <div className="process-item-wrapper">
                                            <div className="process-item">
                                                <div className="icon-wrapper">
                                                    <span
                                                        className="icon"
                                                        style={{
                                                            maskImage: `url(${step.icon})`,
                                                            WebkitMaskImage: `url(${step.icon})`,
                                                        }}
                                                    ></span>
                                                </div>
                                                <div className="content-wrapper">
                                                    <h3 className="title">{step.title}</h3>
                                                    <p className="description">{step.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactSec />
        </>
    );
};

export default Admissions;
