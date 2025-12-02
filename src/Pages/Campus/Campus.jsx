import React from "react";
import PageBannerSec from "../components/PageBannerSec";
import VideoTourSec from "../components/VideoTourSec";
import CampusGallerySec from "./components/CampusGallerySec";
import FacultyGallerySec from "../Faculties/components/FacultyGallerySec";
import { usePageSEO } from "../../hook/usePageSEO";
import ContactSec from "../components/ContactSec";

const Campus = () => {
    usePageSEO({
        title: "Campus - Rise N Shine Institute of Learning",
        canonical: `${window.location.origin}/campus`,
    });

    return (
        <>
            <PageBannerSec
                pageTitle={"Campus"}
                title={
                    <>
                        An Environment <br /> That Inspires Excellence
                    </>
                }
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Campus" },
                ]}
                imageSrc={`/images/hero-banner.jpg`}
            />

            <VideoTourSec
                imageSrc="/images/video-tour-bg.jpg"
                imageAlt="Campus Video Tour"
                onPlayClick={() => {
                    console.log("Play video clicked");
                }}
            />

            <CampusGallerySec />

            <FacultyGallerySec />

            <ContactSec />
        </>
    );
};

export default Campus;

