import React from "react";
import PageBannerSec from "../components/PageBannerSec";
import AboutIntroSec from "./components/AboutIntroSec";
import MissionVisionSec from "./components/MissionVisionSec";
import ContactSec from "../Home/components/ContactSec";
import FounderMessageSec from "./components/FounderMessageSec";

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
                imageSrc={`/images/hero-banner.jpg`}
            />
            <AboutIntroSec />

            <MissionVisionSec />
            <FounderMessageSec />
            <ContactSec />
        </>
    );
};

export default AboutUs;
