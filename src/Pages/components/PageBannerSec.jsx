import React from "react";
import { useClassNames } from "../../hook/useClassNames";
import TextSplit from "../../components/TextSplit";
import ParallaxWrapper from "../../components/Parallax/ParallaxWrapper";
import Image from "../../components/Image";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

const PageBannerSec = ({
    customClasses,
    title,
    pageTitle,
    banner = {},
    breadcrumbs = [],
}) => {
    const classes = useClassNames();

    const handleScrollDown = () => {
        const windowHeight = window.innerHeight;
        window.scrollTo({
            top: windowHeight,
            behavior: "smooth",
        });
    };
    const breadcrumbItems =
        breadcrumbs.length > 0
            ? breadcrumbs
            : [
                { label: "Home", href: "/" },
                ...(pageTitle
                    ? [
                        {
                            label:
                                typeof pageTitle === "string" ? pageTitle : "Current Page",
                        },
                    ]
                    : []),
            ];

    return (
        <section className={classes("page-banner-sec", customClasses)}>
            <ParallaxWrapper offset={20}>
                <div className="image-wrapper">
                    <Image
                        src={banner.src}
                        alt={banner.alt}
                        title={pageTitle}
                        width={1920}
                        height={1080}
                        priority={true}
                    />
                </div>
            </ParallaxWrapper>

            <div className="inner-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-wrapper">
                            {pageTitle && (
                                <h1 className="main-title-text d-none">{pageTitle}</h1>
                            )}

                            <ScrollReveal direction="fade-in" delay={0.6}>
                                <nav className="banner-breadcrumbs" aria-label="Breadcrumb">
                                    <ol>
                                        {breadcrumbItems.map((item, index) => (
                                            <li key={`${item.label}-${index}`}>
                                                {item.href ? (
                                                    <a href={item.href}>{item.label}</a>
                                                ) : (
                                                    <span>{item.label}</span>
                                                )}
                                            </li>
                                        ))}
                                    </ol>
                                </nav>
                            </ScrollReveal>

                            <TextSplit reveal={true} revealDelay={200}>
                                <h2 className="title-text">{title}</h2>
                            </TextSplit>


                            <div
                                className="banner-scroll-indicator"
                                onClick={handleScrollDown}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        handleScrollDown();
                                    }
                                }}
                            >
                                <span className="scroll-text">Scroll</span>
                                <div className="scroll-arrows-box">
                                    <span>
                                        <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageBannerSec;
