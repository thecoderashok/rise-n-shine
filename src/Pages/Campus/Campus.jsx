import React from "react";
import PageBannerSec from "../components/PageBannerSec";
import VideoTourSec from "../components/VideoTourSec";
import { usePageSEO } from "../../hook/usePageSEO";
import ContactSec from "../components/ContactSec";
import GallerySec from "../components/GallerySec";


const campusGalleryData = [
    {
        image: {
            src: "/images/hero-1.jpg",
            alt: null,
        },
        title: "Campus View",
    },
    {
        image: {
            src: "/images/hero-2.jpg",
            alt: null,
        },
        title: "Modern Facilities",
    },
    {
        image: {
            src: "/images/hero-3.jpg",
            alt: null,
        },
        title: "Learning Spaces",
    },
    {
        image: {
            src: "/images/why-us-1.jpg",
            alt: null,
        },
        title: "Student Life",
    },
    {
        image: {
            src: "/images/why-us-2.jpg",
            alt: null,
        },
        title: "Campus Events",
    },
    {
        image: {
            src: "/images/why-us-3.jpg",
            alt: null,
        },
        title: "Academic Excellence",
    },
    {
        image: {
            src: "/images/why-us-4.jpg",
            alt: null,
        },
        title: "Community",
    },
    {
        image: {
            src: "/images/marketing-bg.jpg",
            alt: null,
        },
        title: "Programmes",
    },
    {
        image: {
            src: "/images/finance-bg.jpg",
            alt: null,
        },
        title: "Resources",
    },
];

const facultyGalleryData = [
    {
        image: {
            src: "/images/image-placeholder.jpg",
            alt: null,
        },
        title: "Classroom Sessions",
    },
    {
        image: {
            src: "/images/image-placeholder.jpg",
            alt: null,
        },
        title: "Workshops",
    },
    {
        image: {
            src: "/images/image-placeholder.jpg",
            alt: null,
        },
        title: "Cultural Events",
    },
    {
        image: {
            src: "/images/image-placeholder.jpg",
            alt: null,
        },
        title: "Student Initiatives",
    },
    {
        image: {
            src: "/images/image-placeholder.jpg",
            alt: null,
        },
        title: "Academic Life",
    },
    {
        image: {
            src: "/images/image-placeholder.jpg",
            alt: null,
        },
        title: "Learning Environment",
    },
    {
        image: {
            src: "/images/image-placeholder.jpg",
            alt: null,
        },
        title: "Community",
    },
];


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
                imageSrc={`/images/hero-banner.jpg`}
            />

            <VideoTourSec
                imageSrc="/images/video-tour-bg.jpg"
                imageAlt="Campus Video Tour"
                onPlayClick={() => {
                    console.log("Play video clicked");
                }}
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
                galleryData={facultyGalleryData}
            />

            <ContactSec />
        </>
    );
};

export default Campus;
