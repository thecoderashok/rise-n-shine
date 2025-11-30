import React from "react";
import PageBannerSec from "../components/PageBannerSec";
import AboutIntroSec from "./components/AboutIntroSec";
import MissionVisionSec from "./components/MissionVisionSec";
import FounderMessageSec from "./components/FounderMessageSec";
import AboutMarqueeSec from "./components/AboutMarqueeSec";
import ContactSec from "../components/ContactSec";

const AboutUs = () => {
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
                imageSrc={`/images/hero-banner.jpg`}
            />
            <AboutIntroSec />
            <AboutMarqueeSec />
            <MissionVisionSec />
            <FounderMessageSec />
            <ContactSec />
        </>
    );
};

export default AboutUs;
