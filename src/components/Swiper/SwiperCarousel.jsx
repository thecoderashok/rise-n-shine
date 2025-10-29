import React, { useEffect, useMemo, useRef } from "react";
import { Swiper } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { useLoader } from "../../context/Loader/LoaderContext";

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
    loop = true,
    fadeEffect = false,
    ...props
}) => {
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const { isMounted } = useLoader();

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
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.destroy();
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    useEffect(() => {
        if (swiperRef.current?.autoplay) {
            if (isMounted && autoplay) {
                swiperRef.current.autoplay.start();
            } else {
                swiperRef.current.autoplay.stop();
            }
        }
    }, [isMounted, autoplay]);

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

    return (
        <div className="carousel-wrapper">
            <Swiper
                modules={[Navigation, Autoplay, Pagination, EffectFade]}
                spaceBetween={spaceBetween}
                slidesPerView={effectiveSlidesPerView}
                speed={speed}
                navigation={
                    navigationBtns
                        ? {
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }
                        : false
                }
                loop={loop ? shouldLoop : false}
                pagination={
                    showPagination
                        ? {
                            clickable: true,
                            dynamicBullets: false,
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
                onInit={(swiper) => {
                    swiperRef.current = swiper;
                    if (swiper.autoplay) swiper.autoplay.stop();
                }}
                effect={fadeEffect ? "fade" : "slide"}
                fadeEffect={fadeEffect ? { crossFade: true } : undefined}
                breakpoints={dynamicBreakpoints ? adjustedBreakpoints : breakpoints}
                {...props}
            >
                {children}
            </Swiper>
            {navigationBtns ? (
                <div className="slider-nav-wrapper">
                    <span
                        ref={prevRef}
                        className="slide-btn swiper-button-prev"
                        role="button"
                        aria-label="Previous Slide"
                        tabIndex={0}
                    ></span>
                    <span
                        ref={nextRef}
                        className="slide-btn swiper-button-next"
                        role="button"
                        aria-label="Next Slide"
                        tabIndex={0}
                    ></span>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default React.memo(SwiperCarousel);
