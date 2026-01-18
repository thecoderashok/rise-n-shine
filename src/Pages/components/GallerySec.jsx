import React, { useEffect, useRef } from 'react'
import { SwiperSlide } from 'swiper/react';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import { useClassNames } from '../../hook/useClassNames';
import SecTitle from '../../components/SecTitle';
import SwiperCarousel from '../../components/Swiper/SwiperCarousel';
import GalleryCard from './GalleryCard';

const GallerySec = ({ galleryData, title = {}, content, sectionClass }) => {
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

    return (
        <section className={classes("gallery-sec", sectionClass)}>
            <div className="gallery-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12 heading-wrapper">
                            {title && (
                                <div className="col-lg-6">
                                    <SecTitle
                                        subTitle={title.subTitle}
                                        mainTitle={title.mainTitle}
                                    />
                                </div>
                            )}

                            {content ? (
                                <div className="col-lg-6">
                                    <ScrollReveal direction="fade-up" delay={0.4}>
                                        <div className="content-text">
                                            {content}
                                        </div>
                                    </ScrollReveal>
                                </div>
                            ) : (
                                <ScrollReveal direction="clip-fade-up" delay={0.2}>
                                    <div className="col-lg-6  slide-buttons-wrapper">
                                        <div className="slide-buttons">
                                            <button type="button" ref={navPrevRef} className="slide-btn prev" aria-label="Previous slide" />
                                            <button type="button" ref={navNextRef} className="slide-btn next" aria-label="Next slide" />
                                        </div>
                                    </div>
                                </ScrollReveal>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="carousel-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ScrollReveal direction='fade-right' delay={0.6} offset={50}>
                                <div className="gallery-carousel">
                                    <SwiperCarousel
                                        slidesPerView={1.2}
                                        spaceBetween={14}
                                        loop={true}
                                        speed={800}
                                        navigationBtns={false}
                                        pagination={false}
                                        breakpoints={{
                                            0: { slidesPerView: 1.15 },
                                            576: { slidesPerView: 2 },
                                            991: { slidesPerView: 3 },
                                            1200: { slidesPerView: 3.5 },
                                        }}
                                        onSwiper={(swiper) => {
                                            swiperRef.current = swiper;
                                        }}
                                        showPagination={false}
                                    >
                                        {galleryData?.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <GalleryCard
                                                    item={item}
                                                    gallery={galleryData}
                                                    itemIndex={index}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </SwiperCarousel>
                                </div>
                            </ScrollReveal>
                            {content !== null && (
                                <ScrollReveal direction="clip-fade-up" delay={0.3} offset={50}>
                                    <div className="slide-buttons-wrapper">
                                        <div className="slide-buttons">
                                            <button type="button" ref={navPrevRef} className="slide-btn prev" aria-label="Previous slide" />
                                            <button type="button" ref={navNextRef} className="slide-btn next" aria-label="Next slide" />
                                        </div>
                                    </div>
                                </ScrollReveal>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GallerySec;