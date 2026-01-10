import React from "react";
import PageBannerSec from "../components/PageBannerSec";
import { usePageSEO } from "../../hook/usePageSEO";
import CampusFacilitiesSec from "./components/CampusFacilitiesSec";
import ImageFeaturesSec from "../components/ImageFeaturesSec";
import ContactSec from "../components/ContactSec";

const clubsAndActivitiesData = [
    {
        image: "/images/students-life/clubs-and-activities/art-and-craft-club.jpg",
        title: "Art and Craft Club (Doodle and Do)",
        description:
            "Encourages creative expression through hands-on projects and design.",
    },
    {
        image: "/images/students-life/clubs-and-activities/business-club.jpg",
        title: "Business Club",
        description:
            "Fosters entrepreneurial thinking and business leadership skills through interactive activities.",
    },
    {
        image: "/images/students-life/clubs-and-activities/esg-club.jpg",
        title: "ESG Club",
        description:
            "Promotes awareness of environmental, social, and governance principles with practical initiatives.",
    },
    {
        image: "/images/students-life/clubs-and-activities/event-management-club.jpg",
        title: "Event Management Club",
        description:
            "Develops organisational and leadership abilities through planning and executing events.",
    },
    {
        image: "/images/students-life/clubs-and-activities/social-media-club.jpg",
        title: "Social Media Club",
        description:
            "Builds digital storytelling and communication skills while engaging with real-world media trends.",
    },
];

const studentSupportData = [
    {
        image: "/images/students-life/student-support/student-section.jpg",
        title: "Student Section",
        description:
            "Provides a dedicated desk for student queries, documentation, and essential administrative support.",
    },
    {
        image: "/images/students-life/student-support/student-grievance-section.jpg",
        title: "Student Grievance Section",
        description:
            "Ensures a confidential and responsive system for addressing complaints, suggestions, and conflict resolution.",
    },
    {
        image: "/images/students-life/student-support/mental-health-wellbeing.jpg",
        title: "Mental Health and Well-being",
        description:
            "Offers on-campus counselling, wellness workshops, and personalised support for emotional balance and resilience.",
    },
    {
        image: "/images/students-life/student-support/one-on-one-mentoring.jpg",
        title: "One-on-One Mentoring",
        description:
            "Delivers personalised academic, career, and personal development guidance through individual mentoring.",
    },
    {
        image: "/images/students-life/student-support/career-guidance-placement.jpg",
        title: "Career Guidance and Placement Support",
        description:
            "Supports students with internships, résumé building, interview preparation, and recruiter connections.",
    },
    {
        image: "/images/students-life/student-support/skill-development.jpg",
        title: "Skill Development Workshops",
        description:
            "Provides training in soft skills, communication, leadership, and technical expertise for career readiness.",
    },
    {
        image: "/images/students-life/student-support/recreational-activities.jpg",
        title: "Recreational and Co-curricular Activities",
        description:
            "Encourages creativity and community building through clubs, cultural events, and hobby groups.",
    },
    {
        image: "/images/students-life/student-support/health-and-wellness-centre.jpg",
        title: "Health and Wellness Centre",
        description:
            "Offers first-aid support and medical tie-ups to ensure timely assistance during emergencies.",
    },
    {
        image: "/images/students-life/student-support/connect-and-networking.jpg",
        title: "Connect and Networking",
        description:
            "Creates opportunities to engage with professionals for mentorship, networking, and career insights.",
    },
];


const StudentsLife = () => {
    usePageSEO({
        title: "Students Life - Rise N Shine Institute of Learning",
        canonical: `${window.location.origin}/students-life`,
    });

    return (
        <>
            <PageBannerSec
                pageTitle={"Students Life"}
                title={
                    <>
                        Student Life that Inspires <br /> Balance and Belonging
                    </>
                }
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Students Life" }]}
                imageSrc={`/images/students-life.jpg`}
            />
            <CampusFacilitiesSec />

            <ImageFeaturesSec
                data={clubsAndActivitiesData}
                title={{
                    mainTitle: <>Clubs and Activities</>,
                }}
                content={
                    <p>
                        Clubs at Rise and Shine Institute of Learning provide a vibrant
                        platform for students to explore interests, develop leadership, and
                        build strong networks beyond the classroom. Each club is designed to
                        nurture creativity, collaboration, and practical skills while
                        enriching the overall campus experience.
                    </p>
                }
                sectionClass={"clubs-activities-sec"}
            />
            <ImageFeaturesSec
                data={studentSupportData}
                title={{
                    mainTitle: <>Student Support Services</>,
                }}
                content={
                    <p>
                        Student Support Services at Rise and Shine Institute of Learning are designed to guide learners at every step of their academic and personal journey. From mentoring and career support to wellness and recreational activities, the institute ensures a balanced and holistic student experience.
                    </p>
                }
                sectionClass={"student-support-sec pt-0"}
            />

            <ContactSec />
        </>
    );
};

export default StudentsLife;
