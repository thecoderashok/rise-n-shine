import React, { useEffect, useMemo, useRef } from "react";
import { Swiper } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade, Controller, Parallax } from "swiper/modules";
import { SwiperSlide } from 'swiper/react';

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
    reverseDir = false,
    fadeEffect,
    loop = true,
    parallax = false,
    ...props
}) => {
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const slideCount = useMemo(() => {
        return React.Children.toArray(children).filter(child =>
            React.isValidElement(child) && child.type === SwiperSlide
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

    const effectiveSlidesPerView = slideCount < slidesPerView ? slideCount : slidesPerView;

    const shouldLoop = slideCount > effectiveSlidesPerView;

    useEffect(() => {
        const swiper = swiperRef.current;
        if (!swiper || !prevRef.current || !nextRef.current) return;

        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;

        // Re-initialize navigation
        swiper.navigation.destroy();
        swiper.navigation.init();
        swiper.navigation.update();
    }, []);

    const handleSlideChange = (swiper) => {
        const wrapper = document.querySelector(".swiper-pagination-horizontal");
        if (!wrapper) return;

        wrapper.classList.remove("scroll-next", "scroll-prev");

        if (!swiper.previousIndex || swiper.previousIndex < swiper.activeIndex) {
            wrapper.classList.add("scroll-next");
        } else {
            wrapper.classList.add("scroll-prev");
        }
    };

    useEffect(() => {
        if (!swiperRef.current) return;

        const swiper = swiperRef.current;

        swiper.on('sliderMove', () => {
            if (swiper.el) {
                swiper.el.setAttribute("data-lenis-prevent", "true");
            }
        });
        swiper.on('touchEnd', () => {
            if (swiper.el) {
                swiper.el.removeAttribute("data-lenis-prevent");
            }
        });

        return () => {
            swiper.off("sliderMove");
            swiper.off("touchEnd");
        };
    }, []);

    // new feature 
    const navBtnWrapperRef = useRef(null);

    useEffect(() => {
        if (!swiperRef.current) return;

        const updateNavPosition = (swiper) => {
            const navWrapper = navBtnWrapperRef.current;
            if (!navWrapper) return;

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

        updateNavPosition(swiperRef?.current);

        const handleResize = () => updateNavPosition(swiperRef?.current);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });

    return (
        <div className="carousel-wrapper">
            <Swiper
                modules={[Navigation, Autoplay, Pagination, EffectFade, Controller, Parallax]}
                parallax={parallax}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                speed={speed}
                navigation={navigationBtns ? {
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                } : false}
                loop={loop ? shouldLoop : false}
                pagination={
                    showPagination
                        ? {
                            clickable: true,
                            dynamicBullets: false,
                        }
                        : false
                }
                autoplay={autoplay ? { delay: autoplayDelay, disableOnInteraction: false, reverseDirection: reverseDir } : false}
                onInit={(swiper) => {
                    swiperRef.current = swiper;
                    handleSlideChange(swiper);
                }}
                effect={fadeEffect ? "fade" : "slide"}
                fadeEffect={fadeEffect ? { crossFade: true } : undefined}
                breakpoints={dynamicBreakpoints ? adjustedBreakpoints : breakpoints}
                onSlideChange={handleSlideChange}
                {...props}
            >
                {children}
            </Swiper>
            {navigationBtns ?
                <div className="slider-nav-wrapper" ref={navBtnWrapperRef}>
                    <span ref={prevRef} className="slide-btn swiper-button-prev" role="button" aria-label="Previous Slide"></span>
                    <span ref={nextRef} className="slide-btn swiper-button-next" role="button" aria-label="Next Slide" ></span>
                </div> : <></>
            }
        </div>
    );
};

export default SwiperCarousel;

