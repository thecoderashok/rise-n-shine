import HeroSec from "./components/HeroSec";
import AboutSec from "./components/AboutSec";
import MissionVisionSec from "./components/MissionVisionSec";
import OurProgramsSec from "./components/OurProgramsSec";
import AdmissionSec from "./components/AdmissionSec";
import GallerySec from "./components/GallerySec";
import WhyUsSec from "./components/WhyUsSec";
import { usePageSEO } from "../../hook/usePageSEO";

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
            <GallerySec />
            <AdmissionSec />
        </>
    );
};

export default Home;
