import React from "react";
import PageBannerSec from "../components/PageBannerSec";
import { usePageSEO } from "../../hook/usePageSEO";

const Research = () => {
    usePageSEO({
        title: "Research - Innovation & Discovery | Rise N Shine Institute of Learning",
        canonical: `${window.location.origin}/research`,
    });

    return (
        <>
            <PageBannerSec
                pageTitle={"Research"}
                title={
                    <>
                        Research & Innovation <br /> Advancing Knowledge
                    </>
                }
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Research" },
                ]}
                imageSrc={`/images/hero-banner.jpg`}
            />
        </>
    );
};

export default Research;

