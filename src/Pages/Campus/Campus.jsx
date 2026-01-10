import React from "react";
import PageBannerSec from "../components/PageBannerSec";
import VideoTourSec from "../components/VideoTourSec";
import { usePageSEO } from "../../hook/usePageSEO";
import ContactSec from "../components/ContactSec";
import GallerySec from "../components/GallerySec";


const campusGalleryData = Array.from({ length: 18 }, (_, index) => {
    const imageNumber = index + 1;
    return {
        image: {
            src: `/images/campus-gallery/photo-${imageNumber}.jpg`,
            alt: `Campus photo ${imageNumber}`,
        },
        title: `Campus Photo ${imageNumber}`,
    };
});

const internalGalleryData = Array.from({ length: 26 }, (_, index) => {
    const imageNumber = index + 1;
    return {
        image: {
            src: `/images/internal-gallery/photo-${imageNumber}.jpg`,
            alt: `Internal gallery photo ${imageNumber}`,
        },
        title: `Internal Gallery Photo ${imageNumber}`,
    };
});


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
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Campus" }]}
                imageSrc={`/images/campus-banner.jpg`}
            />

            <VideoTourSec
                imageSrc="/images/video-tour-bg.jpg"
                imageAlt="Campus Video Tour"
            />

            <GallerySec
                title={{
                    mainTitle: "Campus Gallery",
                }}
                content={(
                    <p>
                        The Rise and Shine campus in Dubai is designed to inspire excellence, collaboration, and creativity. It brings together modern digital classrooms, innovative studios, and dynamic student spaces that encourage both focused learning and interactive exchange. The gallery reflects the vibrant spirit of a community where ideas are shared, cultures connect, and aspirations take shape. Every image captures the energy of an environment built to nurture bold thinkers, agile leaders, and future-ready professionals.
                    </p>
                )}
                galleryData={campusGalleryData}
                sectionClass={"sec-gray"}
            />

            <GallerySec
                title={{
                    mainTitle: "Internal Gallery",
                }}
                content={(
                    <p>
                        The Internal Gallery offers a glimpse into the everyday rhythm of the Rise and Shine campus. It showcases the essence of academic life, from dynamic classroom sessions and collaborative workshops to cultural events and student-led initiatives. Each image reflects the institute's commitment to providing a nurturing environment where learning, creativity, and community flourish together.
                    </p>
                )}
                galleryData={internalGalleryData}
            />

            <ContactSec />
        </>
    );
};

export default Campus;
