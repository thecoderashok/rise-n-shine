import React from "react";
import PageBannerSec from "../components/PageBannerSec";
import { usePageSEO } from "../../hook/usePageSEO";
import CampusFacilitiesSec from "./components/CampusFacilitiesSec";
import ClubsActivitiesSec from "./components/ClubsActivitiesSec";

const StudentsLife = () => {
    usePageSEO({
        title: "Students Life - Rise N Shine Institute of Learning",
        canonical: `${window.location.origin}/students-life`,
    });

    return (
        <>
            <PageBannerSec
                pageTitle={"Students Life"}
                title={
                    <>
                        Student Life that Inspires <br /> Balance and Belonging
                    </>
                }
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Students Life" },
                ]}
                imageSrc={`/images/students-life.jpg`}
            />
            <CampusFacilitiesSec />
            <ClubsActivitiesSec />
        </>
    );
};

export default StudentsLife;

