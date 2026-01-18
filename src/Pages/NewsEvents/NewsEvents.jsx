import React from "react";
import PageBannerSec from "../components/PageBannerSec";
import { usePageSEO } from "../../hook/usePageSEO";
import SecTitle from "../../components/SecTitle";

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
                banner={{
                    src: "/images/news-and-events-banner.jpg",
                    alt: "News & Events Stay Connected"
                }}
            />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <SecTitle mainTitle={"Coming Soon"}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsEvents;



