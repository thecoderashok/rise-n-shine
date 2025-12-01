import React from "react";
import PageBannerSec from "../components/PageBannerSec";
import SecTitle from "../../components/SecTitle";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import ContactSec from "../components/ContactSec";
import Image from "../../components/Image";
import ApplicationFormSec from "./components/ApplicationFormSec";
import { usePageSEO } from "../../hook/usePageSEO";

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

const eligibilityItems = [
    {
        iconClass: "fa-solid fa-graduation-cap",
        description: "A recognised bachelor's degree of at least three years' duration"
    },
    {
        iconClass: "fa-solid fa-briefcase",
        description: "A work experience certificate from a registered company, if applicable"
    },
    {
        iconClass: "fa-solid fa-id-card",
        description: "Proof of nationality for both national and international applicants"
    },
    {
        iconClass: "fa-solid fa-diploma",
        description: "Graduation or post-graduation certificate, or final mark-sheet if available"
    },
    {
        iconClass: "fa-solid fa-trophy",
        description: "Evidence of work experience, extracurricular achievements, or participation in sports and related activities"
    }
];

const Admissions = () => {
    usePageSEO({
        title: "Admissions - Apply Now | Rise N Shine Institute of Learning",
        canonical: `${window.location.origin}/admissions`,
    });

    return (
        <>
            <PageBannerSec
                pageTitle={"Admissions"}
                title={
                    <>
                        Step Into a Future of Possibilities
                    </>
                }
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Admissions" }]}
                imageSrc={`/images/hero-banner.jpg`}
            />

            <section className="about-intro-sec admissions-intro sec-gray">
                <div className="container">
                    <div className="row page-text-content align-items-center">
                        <div className="col-lg-6 left-side">
                            <ScrollReveal direction="clip-scale-out-downward" delay={0.1}>
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

                        <ScrollReveal direction="clip-fade-up" delay={0.25}>
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
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="admissions-timeline-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <SecTitle
                                mainTitle={<>Admission Process at <br /> <span className="colored">Rise and Shine</span></>}
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

            <section className="eligibility-sec sec-gray">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <SecTitle
                                mainTitle={<><b className="colored">Eligibility</b> at a Glance</>}
                                desc={"The eligibility criteria at Rise and Shine Institute of Learning are designed to ensure that every applicant brings a strong academic foundation and the potential for professional growth."}
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className="eligibility-cards-grid">
                                {eligibilityItems.map((item, index) => (
                                    <ScrollReveal
                                        key={index}
                                        direction="clip-scale-in-downward"
                                        delay={0.05 * (index + 1)}
                                    >
                                        <div className="eligibility-card">
                                            <div className="card-icon-wrapper">
                                                <i className={item.iconClass}></i>
                                            </div>
                                            <div className="description">
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ApplicationFormSec />

            <ContactSec />
        </>
    );
};

export default Admissions;
