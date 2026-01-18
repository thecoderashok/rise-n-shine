import React from "react";
import PageBannerSec from "../components/PageBannerSec";
import AboutIntroSec from "./components/AboutIntroSec";
import MissionVisionSec from "./components/MissionVisionSec";
import FounderMessageSec from "./components/FounderMessageSec";
import AboutMarqueeSec from "./components/AboutMarqueeSec";
import ContactSec from "../components/ContactSec";
import { usePageSEO } from "../../hook/usePageSEO";
import FacultyLeadershipSec from "../Faculties/components/FacultyLeadershipSec";

const AboutUs = () => {
    usePageSEO({
        title: "About Us - Rise N Shine Institute of Learning",
        canonical: `${window.location.origin}/about-us`,
    });

    return (
        <>
            <PageBannerSec
                pageTitle={"About Us"}
                title={
                    <>
                        A Vision of Excellence, <br /> A Journey Towards Success
                    </>
                }
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About Us" },
                ]}
                banner={{
                    src: "/images/about-banner.jpg",
                    alt: "A Vision of Excellence, A Journey Towards Success",
                }}
            />
            <AboutIntroSec />
            <AboutMarqueeSec />
            <MissionVisionSec />
            <FounderMessageSec />
            <FacultyLeadershipSec />
            <ContactSec />
        </>
    );
};

export default AboutUs;
