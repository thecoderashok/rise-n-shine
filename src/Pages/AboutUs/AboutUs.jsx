import React from "react";
import PageBannerSec from "../components/PageBannerSec";

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
        </>
    );
};

export default AboutUs;
