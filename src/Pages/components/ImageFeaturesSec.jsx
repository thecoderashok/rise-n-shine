import React, { useEffect, useLayoutEffect, useRef } from 'react'
import SecTitle from '../../components/SecTitle';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import SwiperCarousel from '../../components/Swiper/SwiperCarousel';
import { SwiperSlide } from 'swiper/react';
import Image from '../../components/Image';
import { useClassNames } from '../../hook/useClassNames';

const ImageFeaturesSec = ({ data = [], title = {}, content, sectionClass }) => {

    const classes = useClassNames();

    const swiperRef = useRef(null);
    const navPrevRef = useRef(null);
    const navNextRef = useRef(null);

    useEffect(() => {
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
    }, []);

    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const measure = () => {
            const cards = container.querySelectorAll(".feature-card");

            cards.forEach(card => {
                const title = card.querySelector(".title-text");
                if (!title) return;

                const titleHeight = title.offsetHeight;

                card.style.setProperty("--title-height", `${titleHeight}px`);
            });
        };

        measure();

        const ro = new ResizeObserver(measure);
        ro.observe(container);

        container.querySelectorAll(".title-text").forEach(el =>
            ro.observe(el)
        );

        if (document.fonts?.ready) {
            document.fonts.ready.then(measure);
        }

        window.addEventListener("resize", measure);

        return () => {
            ro.disconnect();
            window.removeEventListener("resize", measure);
        };
    }, []);

    return (
        <section className={classes("image-features-sec", sectionClass)}>
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
                                <div className="content-text">
                                    {content}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </div>

            <div className="carousel-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="features-carousel" ref={containerRef}>
                                <SwiperCarousel
                                    slidesPerView={3}
                                    spaceBetween={10}
                                    loop={false}
                                    speed={800}
                                    navigationBtns={false}
                                    pagination={false}
                                    breakpoints={{
                                        0: { slidesPerView: 3 },
                                        1200: { slidesPerView: 3 },
                                    }}
                                    onSwiper={(swiper) => {
                                        swiperRef.current = swiper;
                                    }}
                                    showPagination={false}
                                >
                                    {data?.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="feature-card">
                                                <div className="image-wrapper">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.alt || item.title}
                                                        width={1200}
                                                        height={1800}
                                                    />
                                                </div>
                                                <div className="content-wrapper">
                                                    <h3 className="title-text">{item.title}</h3>
                                                    <p className="description">{item.description}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </SwiperCarousel>
                            </div>
                            <div className="slide-buttons-wrapper">
                                <div className="slide-buttons">
                                    <button type="button" ref={navPrevRef} className="slide-btn prev" aria-label="Previous slide" />
                                    <button type="button" ref={navNextRef} className="slide-btn next" aria-label="Next slide" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImageFeaturesSec