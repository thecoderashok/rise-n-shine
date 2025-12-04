import React from "react";
import PageBannerSec from "../components/PageBannerSec";
import { usePageSEO } from "../../hook/usePageSEO";

const NewsEvents = () => {
    usePageSEO({
        title: "News & Events - Latest Updates | Rise N Shine Institute of Learning",
        canonical: `${window.location.origin}/news-events`,
    });

    return (
        <>
            <PageBannerSec
                pageTitle={"News & Events"}
                title={
                    <>
                        News & Events <br /> Stay Connected
                    </>
                }
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "News & Events" },
                ]}
                imageSrc={`/images/hero-banner.jpg`}
            />
        </>
    );
};

export default NewsEvents;



