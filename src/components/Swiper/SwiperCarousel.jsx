import React, { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Autoplay,
    Pagination,
    EffectFade,
    Controller,
    Parallax,
} from "swiper/modules";

const SwiperCarousel = ({
    slidesPerView = 1,
    spaceBetween = 20,
    speed = 400,
    autoplay = false,
    autoplayDelay = 3000,
    breakpoints = null,
    dynamicBreakpoints = true,
    children,
    navigationBtns,
    showPagination,
    paginationType = "bullets",
    reverseDir = false,
    fadeEffect,
    loop = true,
    parallax = false,
    ...props
}) => {
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const navBtnWrapperRef = useRef(null);
    const [showNav, setShowNav] = useState(false);

    const slideCount = useMemo(() => {
        return React.Children.toArray(children).filter(
            (child) => React.isValidElement(child) && child.type === SwiperSlide
        ).length;
    }, [children]);

    const adjustedBreakpoints = useMemo(() => {
        if (!breakpoints) return null;
        const transformed = {};
        Object.entries(breakpoints).forEach(([width, config]) => {
            const bpSlides = config.slidesPerView || 1;
            const newSlides = Math.min(slideCount, bpSlides);
            const enableLoop = loop && slideCount > bpSlides;
            transformed[width] = {
                ...config,
                slidesPerView: newSlides,
                loop: enableLoop,
            };
        });
        return transformed;
    }, [breakpoints, slideCount, loop]);

    const effectiveSlidesPerView =
        slideCount < slidesPerView ? slideCount : slidesPerView;

    const shouldLoop = slideCount > effectiveSlidesPerView;

    useEffect(() => {
        const swiper = swiperRef.current;
        if (!swiper || !prevRef.current || !nextRef.current || !navigationBtns) return;

        if (!swiper.params.navigation) {
            swiper.params.navigation = {};
        }

        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;

        if (swiper.navigation) {
            if (swiper.navigation.destroy) {
                swiper.navigation.destroy();
            }
            if (swiper.navigation.init) {
                swiper.navigation.init();
            }
            if (swiper.navigation.update) {
                swiper.navigation.update();
            }
        }
    }, [navigationBtns]);

    useEffect(() => {
        if (!swiperRef.current || !navigationBtns) return;

        const swiper = swiperRef.current;

        const updateNavVisibility = () => {
            setShowNav(!swiper.isLocked);
        };

        updateNavVisibility();

        swiper.on("lock", updateNavVisibility);
        swiper.on("unlock", updateNavVisibility);
        swiper.on("resize", updateNavVisibility);

        return () => {
            swiper.off("lock", updateNavVisibility);
            swiper.off("unlock", updateNavVisibility);
            swiper.off("resize", updateNavVisibility);
        };
    }, [navigationBtns]);


    const handleSlideChange = (swiper) => {
        const wrapper = document.querySelector(".swiper-pagination-horizontal");
        if (!wrapper) return;
        wrapper.classList.remove("scroll-next", "scroll-prev");
        if (swiper.activeIndex > swiper.previousIndex) {
            wrapper.classList.add("scroll-next");
        } else {
            wrapper.classList.add("scroll-prev");
        }
    };

    useEffect(() => {
        if (!swiperRef.current) return;
        const swiper = swiperRef.current;

        const onMove = () => {
            swiper.el?.setAttribute("data-lenis-prevent", "true");
        };

        const onEnd = () => {
            swiper.el?.removeAttribute("data-lenis-prevent");
        };

        swiper.on("sliderMove", onMove);
        swiper.on("touchEnd", onEnd);

        return () => {
            swiper.off("sliderMove", onMove);
            swiper.off("touchEnd", onEnd);
        };
    }, []);

    useEffect(() => {
        if (!swiperRef.current) return;

        const updateNavPosition = () => {
            const swiper = swiperRef.current;
            const navWrapper = navBtnWrapperRef.current;
            if (!swiper || !navWrapper) return;

            const activeSlide = swiper.slides[swiper.activeIndex];
            if (!activeSlide) return;

            const dependedElement = activeSlide.querySelector("[data-nav-height]");
            if (!dependedElement) {
                navWrapper.style.top = "";
                return;
            }

            const elementHeight = dependedElement.offsetHeight;
            const offset = elementHeight / 2;
            const originalTop = parseFloat(navWrapper.dataset.originalTop || 0);

            navWrapper.style.top = `${originalTop + offset}px`;
        };

        updateNavPosition();

        window.addEventListener("resize", updateNavPosition);
        return () => window.removeEventListener("resize", updateNavPosition);
    }, []);

    return (
        <div className="carousel-wrapper">
            <Swiper
                modules={[
                    Navigation,
                    Autoplay,
                    Pagination,
                    EffectFade,
                    Controller,
                    Parallax,
                ]}
                parallax={parallax}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                speed={speed}
                loop={loop ? shouldLoop : false}
                navigation={false}
                pagination={
                    showPagination
                        ? {
                            clickable: paginationType === "bullets",
                            dynamicBullets: false,
                            type: paginationType,
                        }
                        : false
                }
                autoplay={
                    autoplay
                        ? {
                            delay: autoplayDelay,
                            disableOnInteraction: false,
                            reverseDirection: reverseDir,
                        }
                        : false
                }
                effect={fadeEffect ? "fade" : "slide"}
                fadeEffect={fadeEffect ? { crossFade: true } : undefined}
                breakpoints={dynamicBreakpoints ? adjustedBreakpoints : breakpoints}
                onInit={(swiper) => {
                    swiperRef.current = swiper;
                    handleSlideChange(swiper);
                }}
                onSlideChange={handleSlideChange}
                {...props}
            >
                {children}
            </Swiper>

            {navigationBtns && (
                <div className="slider-nav-wrapper" data-visibility={showNav} ref={navBtnWrapperRef}>
                    <div
                        ref={prevRef}
                        className="slide-btn swiper-button-prev"
                        role="button"
                        aria-label="Previous Slide"
                    />
                    <div
                        ref={nextRef}
                        className="slide-btn swiper-button-next"
                        role="button"
                        aria-label="Next Slide"
                    />
                </div>

            )}
        </div>
    );
};

export default SwiperCarousel;
