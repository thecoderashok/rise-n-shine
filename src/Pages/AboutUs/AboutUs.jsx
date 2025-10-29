import React from "react";
import PageBannerSec from "../components/PageBannerSec";
import AboutIntroSec from "./components/AboutIntroSec";
import LeftImageRightContent from "../components/LeftImageRightContent";
import MissionVisionSec from "./components/MissionVisionSec";

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

            <MissionVisionSec/>

            {/* <LeftImageRightContent customClasses={"home-about-sec"} content={{
                title: "Vision",
                img: "hero-banner.jpg",
            }}>
                <p>
                    To be a globally recognised institute that redefines professional education by shaping bold thinkers, agile leaders, and future-ready professionals who rise to shine in every corner of the world.
                </p>
            </LeftImageRightContent> */}
        </>
    );
};

export default AboutUs;
