import React, {
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import imagesLoaded from "imagesloaded";
import { useLenis } from "../../context/Lenis/LenisContext";
import { useLoader } from "../../context/Loader/LoaderContext";
import useLinkClick from "../../hook/useLinkClick";
import { gsap } from "../../gsapInit";
import { useCustomRouter } from "../../context/CustomRouter/CustomRouterContext";
import Image from "../Image";
import { useLocation } from "react-router";
import CustomEase from "gsap/CustomEase";

const animateLogo = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        duration: 2,
    },
    exit: {
        opacity: 0,
    },
};

// const animateLoaderTitle = {
//     initial: {
//         y: 50,
//         z: 0,
//         opacity: 0,
//     },
//     enter: {
//         y: 0,
//         z: 0,
//         opacity: 1,
//         ease: "power4.out",
//     },
//     exit: {
//         y: -150,
//         z: 0,
//         opacity: 0,
//         ease: "power4.in",
//     },
// };

const animatePanel = {
    initial: {
        // z: 0,
        // scaleY: 0,
        // transformOrigin: "bottom",
        opacity: 0,
    },
    enter: {
        // z: 0,
        // scaleY: 1,
        // transformOrigin: "bottom",
        opacity: 1,
        ease: CustomEase.create("", ".33,.24,.11,.99"),
    },
    exit: {
        // z: 0,
        // scaleY: 0,
        // transformOrigin: "top",
        opacity: 0,
        ease: "power4.inOut",
    },
};

const animateOverlay = {
    initial: {
        opacity: 0,
        display: "block",
    },
    enter: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
        ease: "power4.inOut",
    },
};

const PageTransition = () => {
    const { isLoading, setMounted, pageComponentReady } = useLoader();
    const { linkClicked, routingPathname, resetLinkClick } = useLinkClick();
    const { setRoute } = useCustomRouter();
    const { pathname } = useLocation();
    const lenis = useLenis();

    const isFirstLoading = useRef(true);

    const containerRef = useRef(null);
    const loaderLogoRef = useRef(null);
    const loaderPanelRef = useRef(null);
    // const titleRef = useRef(null);
    const overlayRef = useRef(null);
    const onLoadTimelineRef = useRef(null);
    const routeTimelineRef = useRef(null);
    const [tlPaused, setTlPaused] = useState(false);
    const [routeTimelinePaused, setRouteTimelinePaused] = useState(false);

    const resetScroll = useCallback(() => {
        if (lenis?.scrollTo) lenis.scrollTo(0, { immediate: true });
        else window.scrollTo(0, 0);
    }, [lenis]);

    const setInitialStyles = () => {
        if (!containerRef.current) return;

        gsap.set(containerRef.current, {
            display: "flex",
        });
        gsap.set(loaderPanelRef.current, {
            ...animatePanel.initial,
        });
        gsap.set(loaderLogoRef.current, {
            ...animateLogo.initial,
        });
        // gsap.set(titleRef.current, {
        //     ...animateLoaderTitle.initial,
        // });
        gsap.set(overlayRef.current, {
            ...animateOverlay.initial,
        });
    };

    useEffect(() => {
        const container = containerRef?.current;
        const overlay = overlayRef?.current;
        const logo = loaderLogoRef?.current;
        // const loaderTitle = titleRef?.current;
        const panel = loaderPanelRef?.current;

        if (!container || !overlay || !logo || !panel) return;

        const timeLine = gsap.timeline({
            defaults: { duration: 0.9, ease: "power3.inOut" },
        });
        onLoadTimelineRef.current = timeLine;

        const ctx = gsap.context(() => {
            const transitionOnLoad = () => {
                setInitialStyles();

                timeLine
                    .set(
                        overlay,
                        {
                            ...animateOverlay.enter,
                        },
                        0
                    )
                    .set(
                        panel,
                        {
                            ...animatePanel.enter,
                        },
                        0
                    )
                    .to(logo, {
                        ...animateLogo.enter,
                    })
                    .addPause("waitTillLoading")
                    .call(() => setTlPaused(true))
                    .to(logo, {
                        ...animateLogo.exit,
                    })
                    // .to(loaderTitle, {
                    //     ...animateLoaderTitle.enter,
                    // })
                    // .to(loaderTitle, {
                    //     ...animateLoaderTitle.exit,
                    // })
                    .to(
                        panel,
                        {
                            ...animatePanel.exit,
                        },
                        "-=0.5"
                    )
                    .to(
                        overlay,
                        {
                            ...animateOverlay.exit,
                        },
                        "<"
                    )
                    .call(
                        () => {
                            setMounted(true);
                            isFirstLoading.current = false;
                        },
                        [],
                        "-=0.2"
                    );
            };

            transitionOnLoad();
        }, panel);

        return () => ctx.revert();
    }, [setMounted]);

    useLayoutEffect(() => {
        if (isFirstLoading.current || !linkClicked) return;
        const container = containerRef?.current;
        const overlay = overlayRef?.current;
        const logo = loaderLogoRef?.current;
        // const loaderTitle = titleRef?.current;
        const panel = loaderPanelRef?.current;

        if (!container || !overlay || !logo || !panel) return;
        setInitialStyles();

        const timeLine = gsap.timeline({
            defaults: { duration: 0.9, ease: "power3.inOut" },
            // onStart: () => {
            //     lenis?.stop();
            // },
        });

        routeTimelineRef.current = timeLine;

        const ctx = gsap.context(() => {
            const transitionPathChange = () => {
                timeLine
                    .to(
                        overlay,
                        {
                            ...animateOverlay.enter,
                        },
                        0
                    )
                    .to(
                        panel,
                        {
                            ...animatePanel.enter,
                        },
                        0
                    )
                    .to(logo, {
                        ...animateLogo.enter,
                    }, "-=0.5")
                    // .to(
                    //     loaderTitle,
                    //     {
                    //         ...animateLoaderTitle.enter,
                    //     },
                    //     "-=0.2"
                    // )
                    .call(() => {
                        if (routingPathname) {
                            setRoute(routingPathname);
                        }
                    })
                    .addPause("wait")
                    .call(() => setRouteTimelinePaused(true))
                    .call(() => resetScroll())
                    // .to(loaderTitle, {
                    //     ...animateLoaderTitle.exit,
                    // })
                    .to(logo, {
                        ...animateLogo.exit,
                    })
                    .to(
                        panel,
                        {
                            ...animatePanel.exit,
                        },
                        "-=0.25"
                    )
                    .to(
                        overlay,
                        {
                            ...animateOverlay.exit,
                        },
                        "<"
                    )
                    .call(
                        () => {
                            lenis?.start();
                            setMounted(true);
                        },
                        [],
                        "-=0.5"
                    );
            };

            transitionPathChange();
        }, panel);

        return () => ctx.revert();
    }, [linkClicked, setMounted, routingPathname, lenis, setRoute, resetScroll]);

    useEffect(() => {
        if (!routeTimelineRef.current) return;
        if (routeTimelinePaused && pageComponentReady) {
            imagesLoaded(document.body, () => {
                routeTimelineRef.current.play("wait");
            });
        }
        routeTimelineRef?.current?.eventCallback("onComplete", () => {
            resetLinkClick();
        });
    }, [pageComponentReady, routeTimelinePaused, resetLinkClick]);

    useEffect(() => {
        if (!isLoading && tlPaused) {
            imagesLoaded(document.body, () => {
                onLoadTimelineRef.current.play("waitTillLoading");
            });
        }
    }, [isLoading, tlPaused]);

    useEffect(() => {
        if (isFirstLoading.current || linkClicked) return;

        setRoute(pathname);
        const raf = requestAnimationFrame(() => {
            resetScroll();
            setMounted(true);
        });

        return () => cancelAnimationFrame(raf);
    }, [pathname, setRoute, resetScroll, setMounted, linkClicked]);

    return (
        <>
            <div className="page-loader-overlay" ref={overlayRef}></div>
            <div className="page-loader-container" ref={containerRef}>
                <div className="page-loader-panel" ref={loaderPanelRef}></div>
                <div className="loader" ref={loaderLogoRef}>
                    <Image
                        src={"/images/logo/logo.png"}
                        alt=""
                        title=""
                        priority
                        width={200}
                        height={200}
                    />
                </div>
                {/* <div className="loader-title">
                    <span ref={titleRef}>
                        {title || (
                            <div className="loader">
                                <Image
                                    src={"/images/logo/logo.png"}
                                    alt=""
                                    title=""
                                    priority
                                    width={200}
                                    height={200}
                                />
                            </div>
                        )}
                    </span>
                </div> */}
            </div>
        </>
    );
};

export default PageTransition;
