import HeroSec from "./components/HeroSec";
import AboutSec from "./components/AboutSec";
import MissionVisionSec from "./components/MissionVisionSec";
import OurProgramsSec from "./components/OurProgramsSec";
import AdmissionSec from "./components/AdmissionSec";
import WhyUsSec from "./components/WhyUsSec";
import { usePageSEO } from "../../hook/usePageSEO";
import GallerySec from "../components/GallerySec";

const galleryData = [
    {
        image: {
            src: "/images/gallery/1.jpg",
            alt: null,
        },
        title: "Class Room",
    },
    {
        image: {
            src: "/images/gallery/2.jpg",
            alt: null,
        },
        title: "Campus",
    },
    {
        image: {
            src: "/images/gallery/3.jpg",
            alt: null,
        },
        title: "Events",
    },
    {
        image: {
            src: "/images/gallery/4.jpg",
            alt: null,
        },
        title: "Labs",
    },
    {
        image: {
            src: "/images/gallery/5.jpg",
            alt: null,
        },
        title: "Parkings",
    },
    {
        image: {
            src: "/images/gallery/6.jpg",
            alt: null,
        },
        title: "Student Life",
    },
];

const Home = () => {
    usePageSEO({
        title: "Rise N Shine - Institute of Learning | Professional Development Programmes",
        canonical: `${window.location.origin}/`,
    });

    return (
        <>
            <HeroSec />
            <AboutSec />
            <MissionVisionSec />
            <OurProgramsSec />
            <WhyUsSec />
            <GallerySec
                title={{
                    mainTitle: "Inside Rise N Shine",
                }}
                content={null}
                galleryData={galleryData}
                sectionClass={"sec-gray"}
            />
            <AdmissionSec />
        </>
    );
};

export default Home;
