import React from "react";
import PageBannerSec from "../components/PageBannerSec";
import { usePageSEO } from "../../hook/usePageSEO";

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
                        Student Life <br /> Beyond the Classroom
                    </>
                }
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Students Life" },
                ]}
                imageSrc={`/images/hero-banner.jpg`}
            />
        </>
    );
};

export default StudentsLife;

