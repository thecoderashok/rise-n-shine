import React, { useEffect, useRef } from "react";
import SecTitle from "../../components/SecTitle";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import SwiperCarousel from "../../components/Swiper/SwiperCarousel";
import { SwiperSlide } from "swiper/react";
import Image from "../../components/Image";
import { useClassNames } from "../../hook/useClassNames";

const LogoFeaturesSec = ({ data = [], title = {}, content, carouselMode = true, sectionClass }) => {
    const classes = useClassNames();

    const swiperRef = useRef(null);
    const navPrevRef = useRef(null);
    const navNextRef = useRef(null);

    useEffect(() => {
        if (!carouselMode) return;
        const swiper = swiperRef.current;
        if (!swiper || !navPrevRef.current || !navNextRef.current) return;

        if (!swiper.params.navigation) {
            swiper.params.navigation = {};
        }

        swiper.params.navigation.prevEl = navPrevRef.current;
        swiper.params.navigation.nextEl = navNextRef.current;

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
    }, [carouselMode]);

    return (
        <section className={classes("logo-features-sec", sectionClass)}>
            <div className="gallery-header">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-lg-6">
                            {title && (
                                <SecTitle
                                    subTitle={title.subTitle}
                                    mainTitle={title.mainTitle}
                                />
                            )}
                        </div>
                        <div className="col-lg-6">
                            <ScrollReveal direction="fade-up" delay={0.2}>
                                <div className="content-text">{content}</div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </div>

            <div className="carousel-sec">
                <div className="container">
                    <div className="row">
                        {carouselMode ? (
                            <div className="col-12">
                                <ScrollReveal direction="fade-right" delay={0.4} offset={50}>
                                    <div className="features-carousel">
                                        <SwiperCarousel
                                            slidesPerView={3}
                                            spaceBetween={10}
                                            loop={false}
                                            speed={800}
                                            navigationBtns={false}
                                            pagination={false}
                                            breakpoints={{
                                                0: { slidesPerView: 1 },
                                                680: { slidesPerView: 1.25 },
                                                991: { slidesPerView: 4 },
                                            }}
                                            onSwiper={(swiper) => {
                                                swiperRef.current = swiper;
                                            }}
                                            showPagination={false}
                                        >
                                            {data?.map((item, index) => (
                                                <SwiperSlide key={index}>
                                                    <div className="logo-feature-card">
                                                        <div className="image-wrapper">
                                                            <Image
                                                                src={item.logo}
                                                                alt={item.alt || item.title}
                                                                width={1200}
                                                                height={1800}
                                                            />
                                                        </div>
                                                        <div className="title-wrapper">
                                                            <h3 className="title-text">{item.title}</h3>
                                                        </div>
                                                        <div className="content-wrapper">
                                                            <p className="description">{item.description}</p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </SwiperCarousel>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal direction="clip-fade-up" delay={0.3} offset={50}>
                                    <div className="slide-buttons-wrapper">
                                        <div className="slide-buttons">
                                            <button
                                                type="button"
                                                ref={navPrevRef}
                                                className="slide-btn prev"
                                                aria-label="Previous slide"
                                            />
                                            <button
                                                type="button"
                                                ref={navNextRef}
                                                className="slide-btn next"
                                                aria-label="Next slide"
                                            />
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        ) : (
                            <div className="col-12">
                                <div className="logo-features-grid">
                                    {data?.map((item, index) => (
                                        <div className="logo-feature-card-wrapper" key={index}>
                                            <div className="logo-feature-card">
                                                <div className="image-wrapper">
                                                    <Image
                                                        src={item.logo}
                                                        alt={item.alt || item.title}
                                                        width={1200}
                                                        height={1800}
                                                    />
                                                </div>
                                                <div className="title-wrapper">
                                                    <h3 className="title-text">{item.title}</h3>
                                                </div>
                                                <div className="content-wrapper">
                                                    <p className="description">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoFeaturesSec;
