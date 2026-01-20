import React from "react";
import PageBannerSec from "../components/PageBannerSec";
import { usePageSEO } from "../../hook/usePageSEO";
import ContactSec from "../components/ContactSec";
import LogoFeaturesSec from "../components/LogoFeaturesSec";

const industryVisitsData = [
    {
        logo: "/images/industry-visits/crossdock_logistics.png",
        title: "Dubai Future Foundation",
        description:
            "Insights into innovation, technology, and future-driven projects",
    },
    {
        logo: "/images/industry-visits/crossdock_logistics.png",
        title: "Expo City Dubai",
        description:
            "Exposure to large-scale event management, sustainability, and cultural exchange",
    },
    {
        logo: "/images/industry-visits/crossdock_logistics.png",
        title: "Emirates Aviation",
        description:
            "Understanding operations, management, and excellence in global aviation",
    },
    {
        logo: "/images/industry-visits/crossdock_logistics.png",
        title: "Dubai International Financial Centre (DIFC)",
        description:
            "Access to the heart of international finance and regulation",
    },
    {
        logo: "/images/industry-visits/crossdock_logistics.png",
        title: "Emaar",
        description:
            "Learning from one of the most influential real estate and lifestyle developers in the region",
    },
    {
        logo: "/images/industry-visits/crossdock_logistics.png",
        title: "Dubai Media City",
        description:
            "Exploring the creative economy and digital media landscape",
    },
    {
        logo: "/images/industry-visits/crossdock_logistics.png",
        title: "Dubai Properties World (Jebel Ali)",
        description:
            "Understanding large-scale property development and trade infrastructure",
    },
];

const recruitersData = [
    {
        title: "Leedswell Dubai and Keystone Real Estate",
        description: "Leading players in property and lifestyle development.",
        logo: "/images/industry-visits/crossdock_logistics.png",
    },
    {
        title: "Cross Doc Trading",
        description: "Global innovators in logistics and supply chain solutions.",
        logo: "/images/industry-visits/crossdock_logistics.png",
    },
    {
        title: "Expo City Dubai",
        description: "A hub for enterprise, culture, and sustainability-driven initiatives.",
        logo: "/images/industry-visits/crossdock_logistics.png",
    },
    {
        title: "DOCSTA",
        description: "Healthcare leaders shaping excellence in medical services and innovation.",
        logo: "/images/industry-visits/crossdock_logistics.png",
    },
    {
        title: "Esaal",
        description: "A forward-thinking platform driving technology and well-being solutions.",
        logo: "/images/industry-visits/crossdock_logistics.png",
    },
];


const internshipOpportunityData = [
    {
        logo: "/images/industry-visits/crossdock_logistics.png",
        title: "Leedwells Real Estate",
        description:
            "Opportunities in property management and development",
    },
    {
        logo: "/images/industry-visits/crossdock_logistics.png",
        title: "101 Premium Properties",
        description:
            "Exposure to high-value real estate projects and client engagement",
    },
    {
        logo: "/images/industry-visits/crossdock_logistics.png",
        title: "Glen Cove Property",
        description:
            "Hands-on learning in property consultancy and investment services",
    },
    {
        logo: "/images/industry-visits/crossdock_logistics.png",
        title: "Codex Software",
        description:
            "Practical experience in software solutions and technology innovation",
    },
    {
        logo: "/images/industry-visits/crossdock_logistics.png",
        title: "Glencove",
        description:
            "Professional exposure in real estate advisory and project management",
    },
    {
        logo: "/images/industry-visits/crossdock_logistics.png",
        title: "Seeding Brains",
        description:
            "Internships in education, training, and knowledge-driven initiatives",
    },
    {
        logo: "/images/industry-visits/crossdock_logistics.png",
        title: "Crossdocks Logistics",
        description:
            "Learning opportunities in supply chain, logistics, and global trade",
    },
];

const Placement = () => {
    usePageSEO({
        title: "Placement - Career Opportunities | Rise N Shine Institute of Learning",
        canonical: `${window.location.origin}/placement`,
    });

    return (
        <>
            <PageBannerSec
                pageTitle={"Placement"}
                title={
                    <>
                        Your Career, Our Commitment
                    </>
                }
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Placement" },
                ]}
                banner={{
                    src: "/images/placement-banner.jpg",
                    alt: "Your Career, Our Commitment",
                }}
            />

            <LogoFeaturesSec
                data={industryVisitsData}
                title={{
                    mainTitle: <>Industry Visits</>,
                }}
                content={
                    <p>
                        Industrial visits at Rise and Shine Institute of Learning provide students with first-hand exposure to leading organisations across Dubai. These experiences connect classroom knowledge with real-world practice and broaden perspectives on global business and innovation.
                    </p>
                }
                sectionClass="industry-visits-sec"
            />

            <LogoFeaturesSec
                data={recruitersData}
                title={{
                    mainTitle: <>Recruiters</>,
                }}
                content={
                    <p>
                        Recruiters at Rise and Shine Institute of Learning represent some of the most influential names across industries. These partnerships open pathways for students to enter careers with confidence, clarity, and global exposure.
                    </p>
                }
                sectionClass="recruiters-sec"
            />

            <LogoFeaturesSec
                data={internshipOpportunityData}
                title={{
                    mainTitle: <>Internship Opportunities</>,
                }}
                content={
                    <p>
                        Internship opportunities at Rise and Shine Institute of Learning are designed to give students direct exposure to leading companies across real estate, technology, education, and logistics. Each placement bridges classroom learning with real-world practice, ensuring that every student gains a competitive edge in their career journey.
                    </p>
                }
                sectionClass="industry-visits-sec"
            />

            <ContactSec />

        </>
    );
};

export default Placement;





