import React from "react";
import PageBannerSec from "../components/PageBannerSec";
import { usePageSEO } from "../../hook/usePageSEO";
import ImageFeaturesSec from "../components/ImageFeaturesSec";
import LeftRightImageTextGridSec from "../components/LeftRightImageTextGridSec";
import ContactSec from "../components/ContactSec";

const industryVisitsData = [
    {
        image: "/images/image-placeholder.jpg",
        title: "Dubai Future Foundation",
        description:
            "Insights into innovation, technology, and future-driven projects",
    },
    {
        image: "/images/image-placeholder.jpg",
        title: "Expo City Dubai",
        description:
            "Exposure to large-scale event management, sustainability, and cultural exchange",
    },
    {
        image: "/images/image-placeholder.jpg",
        title: "Emirates Aviation",
        description:
            "Understanding operations, management, and excellence in global aviation",
    },
    {
        image: "/images/image-placeholder.jpg",
        title: "Dubai International Financial Centre (DIFC)",
        description:
            "Access to the heart of international finance and regulation",
    },
    {
        image: "/images/image-placeholder.jpg",
        title: "Emaar",
        description:
            "Learning from one of the most influential real estate and lifestyle developers in the region",
    },
    {
        image: "/images/image-placeholder.jpg",
        title: "Dubai Media City",
        description:
            "Exploring the creative economy and digital media landscape",
    },
    {
        image: "/images/image-placeholder.jpg",
        title: "Dubai Properties World (Jebel Ali)",
        description:
            "Understanding large-scale property development and trade infrastructure",
    },
];

const recruitersData = [
    {
        title: "Leedswell Dubai and Keystone Real Estate",
        content: `
            <p>
                Leading players in property and lifestyle development.
            </p>
        `,
        image: "/images/hero-1.jpg",
    },
    {
        title: "Cross Doc Trading",
        content: `
            <p>
                Global innovators in logistics and supply chain solutions.
            </p>
        `,
        image: "/images/image-placeholder.jpg",
    },
    {
        title: "Expo City Dubai",
        content: `
            <p>
                A hub for enterprise, culture, and sustainability-driven initiatives.
            </p>
        `,
        image: "/images/image-placeholder.jpg",
    },
    {
        title: "DOCSTA",
        content: `
            <p>
                Healthcare leaders shaping excellence in medical services and innovation.
            </p>
        `,
        image: "/images/image-placeholder.jpg",
    },
    {
        title: "Esaal",
        content: `
            <p>
                A forward-thinking platform driving technology and well-being solutions.
            </p>
        `,
        image: "/images/image-placeholder.jpg",
    },
];

const internshipOpportunityData = [
    {
        image: "/images/image-placeholder.jpg",
        title: "Leedwells Real Estate",
        description:
            "Opportunities in property management and development",
    },
    {
        image: "/images/image-placeholder.jpg",
        title: "101 Premium Properties",
        description:
            "Exposure to high-value real estate projects and client engagement",
    },
    {
        image: "/images/image-placeholder.jpg",
        title: "Glen Cove Property",
        description:
            "Hands-on learning in property consultancy and investment services",
    },
    {
        image: "/images/image-placeholder.jpg",
        title: "Codex Software",
        description:
            "Practical experience in software solutions and technology innovation",
    },
    {
        image: "/images/image-placeholder.jpg",
        title: "Glencove",
        description:
            "Professional exposure in real estate advisory and project management",
    },
    {
        image: "/images/image-placeholder.jpg",
        title: "Seeding Brains",
        description:
            "Internships in education, training, and knowledge-driven initiatives",
    },
    {
        image: "/images/image-placeholder.jpg",
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
                imageSrc={`/images/placement-banner.jpg`}
            />

            <ImageFeaturesSec
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

            <LeftRightImageTextGridSec
                data={recruitersData}
                title={{
                    mainTitle: <>Recruiters</>,
                }}
                content={
                    <p>
                        Recruiters at Rise and Shine Institute of Learning represent some of the most influential names across industries. These partnerships open pathways for students to enter careers with confidence, clarity, and global exposure.
                    </p>
                }
                sectionClass="recruiters-sec sec-dark"
            />

            <ImageFeaturesSec
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





