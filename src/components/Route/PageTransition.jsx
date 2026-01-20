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
import useLenisScrollLock from "../../hook/useLenisScrollLock";

gsap.registerPlugin(CustomEase);

CustomEase.create("enter", "0.87, 0, 0.13, 1");
CustomEase.create("customEase1", "0.41, 0.1, 0.1, 1");

const animeLogoWrapper = {
    initial: {
        opacity: 0,
        scale: 1.6,
        z: 0,
        clipPath: "inset(0% 0% 100% 0%)",
    },
    enter: {
        opacity: 1,
        scale: 1,
        z: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.2,
        ease: "customEase1",
    },
    exit: {
        z: 0,
        opacity: 0,
        duration: 1,
    },
};

const animeLogo = {
    initial: {
        clipPath: "inset(0% 100% 0% 0%)",
    },
    enter: {
        clipPath: "inset(0% 0% 0% 0%)",
    },
};

const clamp = (min, val, max) => Math.max(max, Math.max(min, val));
const vw = (v) => (window.innerWidth * v) / 100;

const radius = clamp(60, vw(6), vw(6));

const animeMask = {
    enter: {
        scale: 0,
        z: 0,
        attr: {
            rx: radius,
            ry: radius,
        },
    },
    exit: {
        attr: {
            rx: 6,
            ry: 6,
        },
        scale: 1,
        z: 0,
        duration: 1.5,
        ease: "customEase1",
    },
};

const animeContent = {
    initial: {
        scale: 1.2,
        z: 0,
        willChange: "transform",
    },
    end: {
        scale: 1,
        z: 0,
        willChange: "transform",
        duration: 1,
        ease: "power2.out",
    },
};

const PageTransition = () => {
    const { isLoading, setMounted, pageComponentReady, setIsPageTransitionEnd } =
        useLoader();
    const { linkClicked, routingPathname, resetLinkClick } = useLinkClick();
    const { setRoute } = useCustomRouter();
    const { pathname } = useLocation();
    const { lenis, refreshLenis } = useLenis();
    const { setLocked } = useLenisScrollLock();

    const isFirstLoading = useRef(true);

    const bodyRef = useRef(null);
    const mainWrapperRef = useRef(null);
    const containerRef = useRef(null);
    const logoRef = useRef(null);
    const logoWrapperRef = useRef(null);
    const maskRef = useRef(null);
    const loaderProgressRef = useRef(null);

    const onLoadTimelineRef = useRef(null);
    const routeTimelineRef = useRef(null);
    const [tlPaused, setTlPaused] = useState(false);
    const [routeTimelinePaused, setRouteTimelinePaused] = useState(false);
    const [loaderCount, setLoaderCount] = useState(0);

    const resetScroll = useCallback(() => {
        requestAnimationFrame(() => {
            lenis?.scrollTo?.(0, { immediate: true }) ?? window.scrollTo(0, 0);
        });
    }, [lenis]);

    useEffect(() => {
        const mainWrapperEl = document.querySelector(".page-content");
        const bodyEl = document.querySelector("body");
        mainWrapperRef.current = mainWrapperEl;
        bodyRef.current = bodyEl;
    }, [])

    const updateTrasitionStateToDOM = (state) => {
        if (!mainWrapperRef.current || !bodyRef.current) return;

        if (!state) {
            console.log("updateTrasitionStateToDOM: state missing!");
            return;
        }

        if (state === "start") {
            mainWrapperRef.current.setAttribute("data-transform", "auto");
            bodyRef.current.classList.remove("page-transition-end");
        } else if (state === "end") {
            mainWrapperRef.current.setAttribute("data-transform", "none");
            bodyRef.current.classList.add("page-transition-end");
        }
    }

    const setInitialStyles = useCallback(() => {
        if (!containerRef.current || !mainWrapperRef.current) return;

        gsap.set(containerRef.current, {
            autoAlpha: 0,
        });
        gsap.set(maskRef.current, {
            ...animeMask.enter,
        });
        gsap.set(logoRef.current, {
            ...animeLogo.initial,
        });
        gsap.set(logoWrapperRef.current, {
            ...animeLogoWrapper.initial,
        });

        updateTrasitionStateToDOM("start");
    }, []);

    useEffect(() => {
        const mainWrapper = mainWrapperRef?.current;
        const container = containerRef?.current;
        const logo = logoRef?.current;
        const logoWrapper = logoWrapperRef?.current;
        const mask = maskRef?.current;
        const loaderProgress = loaderProgressRef?.current;

        if (
            !container ||
            !mask ||
            !logoWrapper ||
            !logo ||
            !loaderProgress ||
            !mainWrapper
        )
            return;

        const timeLine = gsap.timeline({
            defaults: { duration: 1, ease: "power2.inOut" },
            onStart: () => {
                setLocked(true);
            }
        });

        const vh = window.innerHeight;

        gsap.set(mainWrapper, {
            transformOrigin: `50% ${vh / 2}px`,
        });

        onLoadTimelineRef.current = timeLine;

        const ctx = gsap.context(() => {
            const transitionOnLoad = () => {
                setInitialStyles();

                timeLine
                    .set(
                        mask,
                        {
                            ...animeMask.enter,
                        },
                        0,
                    )
                    .set(
                        container,
                        {
                            autoAlpha: 1,
                        },
                        0,
                    )
                    .to(logoWrapper, {
                        ...animeLogoWrapper.enter,
                    })
                    .addPause("waitTillLoading")
                    .call(() => {
                        setTlPaused(true);
                        resetScroll();
                    })
                    .to(logoWrapper, {
                        ...animeLogoWrapper.exit,
                    })
                    .to(
                        mask,
                        {
                            ...animeMask.exit,
                        },
                        "-=0.4",
                    )
                    .fromTo(
                        mainWrapper,
                        {
                            ...animeContent.initial,
                        },
                        {
                            ...animeContent.end,
                        },
                        "-=1.1",
                    )
                    .call(
                        () => {
                            setMounted(true);
                            isFirstLoading.current = false;
                            setLocked(false);
                        },
                        [],
                        "-=1",
                    )
                    .set(
                        loaderProgress,
                        {
                            autoAlpha: 0,
                        },
                        "-=0.55",
                    )
                    .set([container, logoWrapper, logo, loaderProgress], {
                        clearProps: "transform,clip-path,opacity,visibility",
                    })
                    .set(mainWrapper, {
                        clearProps: "transform,will-change,transform-origin",
                    })
                    .call(
                        () => {
                            setIsPageTransitionEnd(true);
                            refreshLenis();
                        },
                        [],
                        "-=0.8",
                    )
                    .call(
                        () => {
                            updateTrasitionStateToDOM("end");
                        },
                        [],
                    );
            };

            transitionOnLoad();
        });

        return () => {
            ctx.revert();
            timeLine.kill();
        };
    }, [
        resetScroll,
        setMounted,
        setLocked,
        setIsPageTransitionEnd,
        refreshLenis,
        setInitialStyles
    ]);

    useLayoutEffect(() => {
        if (isFirstLoading.current || !linkClicked) return;
        const mainWrapper = mainWrapperRef?.current;
        const container = containerRef?.current;
        const logo = logoRef?.current;
        const logoWrapper = logoWrapperRef?.current;
        const mask = maskRef?.current;
        const loaderProgress = loaderProgressRef?.current;

        if (
            !container ||
            !mask ||
            !logoWrapper ||
            !logo ||
            !loaderProgress ||
            !mainWrapper
        )
            return;

        const timeLine = gsap.timeline({
            defaults: { duration: 0.4, ease: "power2.out" },
            onStart: () => {
                setLocked(true);
            },
        });

        const vh = window.innerHeight;

        routeTimelineRef.current = timeLine;


        const ctx = gsap.context(() => {
            const transitionPathChange = () => {
                setInitialStyles();
                setLoaderCount(0);

                timeLine
                    .set(
                        mask,
                        {
                            ...animeMask.enter,
                        },
                        0,
                    )
                    .to(container, {
                        autoAlpha: 1,
                        ease: "none"
                    })
                    .to(logoWrapper, {
                        ...animeLogoWrapper.enter,
                    })
                    .set(mainWrapper, {
                        ...animeContent.initial,
                        transformOrigin: `50% ${vh / 2}px`,
                    })
                    .call(() => {
                        if (routingPathname) {
                            setRoute(routingPathname);
                        }
                    })
                    .addPause("waitTillLoading")
                    .call(() => {
                        setRouteTimelinePaused(true);
                        resetScroll();
                    })
                    .to(logoWrapper, {
                        ...animeLogoWrapper.exit,
                    })
                    .to(
                        mask,
                        {
                            ...animeMask.exit,
                        },
                        "-=0.4",
                    )
                    .to(
                        mainWrapper,
                        {
                            ...animeContent.end,
                        },
                        "-=1.1",
                    )
                    .call(
                        () => {
                            setMounted(true);
                            setLocked(false);
                        },
                        [],
                        "-=1",
                    )
                    .set(
                        loaderProgress,
                        {
                            autoAlpha: 0,
                        },
                        "-=0.55",
                    )
                    .set([container, logoWrapper, logo, loaderProgress], {
                        clearProps: "transform,clip-path,opacity,visibility",
                    })
                    .set(mainWrapper, {
                        clearProps: "transform,will-change,transform-origin",
                    })
                    .call(
                        () => {
                            setIsPageTransitionEnd(true);
                            refreshLenis();
                        },
                        [],
                        "-=0.8",
                    )
                    .call(
                        () => {
                            updateTrasitionStateToDOM("end");
                        },
                        [],
                    );
            };

            transitionPathChange();
        }, mainWrapper);

        return () => {
            ctx.revert();
            timeLine.kill();
        };
    }, [
        linkClicked,
        resetScroll,
        routingPathname,
        setMounted,
        setRoute,
        refreshLenis,
        setLocked,
        setIsPageTransitionEnd,
        setInitialStyles
    ]);

    useEffect(() => {
        const counterProgress = { value: 0 };

        if (isLoading) {
            gsap.to(counterProgress, {
                value: 35,
                duration: 2,
                ease: "power2.out",
                onUpdate: () => {
                    setLoaderCount(Math.floor(counterProgress.value));
                },
            });
        }
    }, [isLoading]);

    const animateLogoProgress = (onComplete) => {
        const progress = { value: 100 };
        const imgLoad = imagesLoaded(document.body);
        const total = imgLoad.images.length;
        let loaded = 0;

        imgLoad.on("progress", () => {
            loaded++;

            const nextValue = 100 - (loaded / total) * 100;

            gsap.to(progress, {
                value: nextValue,
                duration: 1,
                ease: "power2.out",
                overwrite: true,
                onUpdate: () => {
                    gsap.set(logoRef.current, {
                        clipPath: `inset(0% ${progress.value}% 0% 0%)`,
                    });

                    const counterValue = 35 + ((100 - progress.value) / 100) * 65;
                    setLoaderCount(Math.max(35, Math.floor(counterValue)));
                },
            });
        });

        imgLoad.on("always", () => {
            gsap.to(logoRef.current, {
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 2,
                ease: "power2.out",
                onComplete,
            });

            imgLoad.off("progress");
            imgLoad.off("always");
        });
    };

    useEffect(() => {
        if (!routeTimelineRef.current) return;
        if (routeTimelinePaused && pageComponentReady) {
            animateLogoProgress(() => {
                routeTimelineRef.current?.play("waitTillLoading");
            });
        }
        routeTimelineRef?.current?.eventCallback("onComplete", () => {
            resetLinkClick();
            setRouteTimelinePaused(false);
        });
    }, [pageComponentReady, routeTimelinePaused, resetLinkClick]);

    useEffect(() => {
        if (!isLoading && tlPaused) {
            animateLogoProgress(() => {
                onLoadTimelineRef.current?.play("waitTillLoading");
            });
        }
    }, [isLoading, tlPaused]);

    useEffect(() => {
        if (isFirstLoading.current) return;
        if (linkClicked) return;

        setRoute(pathname);

        const timeout = setTimeout(() => {
            resetScroll();
            setMounted(true);
            setIsPageTransitionEnd(true);
        }, 100);

        return () => clearTimeout(timeout);
    }, [pathname, setRoute, resetScroll, setMounted, linkClicked, setIsPageTransitionEnd]);

    const formatCounter = (value) => {
        return String(value).padStart(3, "0");
    };

    return (
        <>
            <div className="page_loader_container" ref={containerRef}>
                <ScreenMask holeRef={maskRef} />

                <div className="preloader_logo_wrapper" ref={logoWrapperRef}>
                    <div className="preloader_logo" ref={logoRef}>
                        <Image
                            src={"/images/logo/logo.png"}
                            alt=""
                            title=""
                            priority
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="preloader_logo inverted">
                        <Image
                            src={"/images/logo/logo.png"}
                            alt=""
                            title=""
                            priority
                            width={200}
                            height={200}
                        />
                    </div>
                </div>

                <div className="loading_progress" ref={loaderProgressRef}>
                    <span>{formatCounter(loaderCount)}</span>
                    <span>/</span>
                    <span>100</span>
                </div>
            </div>
        </>
    );
};

export default PageTransition;

export function ScreenMask({ holeRef }) {
    const svgRef = useRef(null);
    const bgRef = useRef(null);
    const overlayRef = useRef(null);

    useLayoutEffect(() => {
        const svg = svgRef.current;
        const hole = holeRef.current;
        const bg = bgRef.current;
        const overlay = overlayRef.current;

        const setup = () => {
            const vw = window.innerWidth;
            const vh = window.innerHeight;
            const ratio = vw / vh;

            svg.setAttribute("viewBox", `0 0 ${vw} ${vh}`);

            bg.setAttribute("width", vw);
            bg.setAttribute("height", vh);

            overlay.setAttribute("width", vw);
            overlay.setAttribute("height", vh);

            let holeWidth, holeHeight;

            if (ratio > 1) {
                holeWidth = vw;
                holeHeight = holeWidth / ratio;
            } else {
                holeHeight = vh;
                holeWidth = holeHeight * ratio;
            }

            const x = (vw - holeWidth) / 2;
            const y = (vh - holeHeight) / 2;

            hole.setAttribute("x", x);
            hole.setAttribute("y", y);
            hole.setAttribute("width", holeWidth);
            hole.setAttribute("height", holeHeight);

            gsap.set(hole, {
                transformOrigin: `${holeWidth / 2}px ${holeHeight / 2}px`,
                scale: 0,
            });
        };

        setup();
        // window.addEventListener("resize", setup);

        // return () => window.removeEventListener("resize", setup);
    }, [holeRef]);

    return (
        <svg
            ref={svgRef}
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="preloader_mask"
            style={{
                position: "fixed",
                inset: 0,
                pointerEvents: "none",
            }}
        >
            <defs>
                <mask id="center-hole" maskUnits="userSpaceOnUse">
                    <rect ref={bgRef} fill="white" />
                    <rect
                        ref={holeRef}
                        style={{ willChange: "transform" }}
                        fill="black"
                        rx="24"
                        ry="24"
                    />
                </mask>
            </defs>

            <rect
                ref={overlayRef}
                fill="var(--preloader-bg)"
                mask="url(#center-hole)"
            />
        </svg>
    );
}
