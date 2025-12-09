import React from "react";
import PageBannerSec from "../components/PageBannerSec";
import { usePageSEO } from "../../hook/usePageSEO";

const Placement = () => {
    usePageSEO({
        title: "Placement - Career Opportunities | Rise N Shine Institute of Learning",
        canonical: `${window.location.origin}/placement`,
    });

    return (
        <>
            <PageBannerSec
                pageTitle={"Placement"}
                title={
                    <>
                        Career Placement <br /> Your Future Starts Here
                    </>
                }
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Placement" },
                ]}
                imageSrc={`/images/hero-banner.jpg`}
            />
        </>
    );
};

export default Placement;





