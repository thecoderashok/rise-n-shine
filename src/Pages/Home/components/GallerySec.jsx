import React, { useRef } from "react";
import SecTitle from "../../../components/SecTitle";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import SwiperCarousel from "../../../components/Swiper/SwiperCarousel";
import { SwiperSlide } from "swiper/react";
import Image from "../../../components/Image";

const galleryItems = [
    { src: "/images/gallery/1.jpg", title: "Campus Life" },
    { src: "/images/gallery/1.jpg", title: "Workshops" },
    { src: "/images/gallery/1.jpg", title: "Events" },
    { src: "/images/gallery/1.jpg", title: "Labs" },
    { src: "/images/gallery/1.jpg", title: "Collaborations" },
    { src: "/images/gallery/1.jpg", title: "Student Life" }
];

const GallerySec = () => {
    const navPrevRef = useRef(null);
    const navNextRef = useRef(null);

    return (
        <section className="gallery-sec">
            <div className="gallery-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <SecTitle
                                subTitle={"Gallery"}
                                mainTitle={<>Inside Rise N Shine</>}
                                revealLetters={true}
                            />
                        </div>
                        <div className="col-lg-6 text-lg-end d-flex justify-content-lg-end justify-content-start">
                            <div className="slide-buttons">
                                <button type="button" ref={navPrevRef} className="gallery-nav prev" aria-label="Previous slide" />
                                <button type="button" ref={navNextRef} className="gallery-nav next" aria-label="Next slide" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gallery-carousel">
                <SwiperCarousel
                    slidesPerView={1.2}
                    spaceBetween={14}
                    loop={true}
                    speed={800}
                    navigationBtns={false}
                    pagination={false}
                    breakpoints={{
                        576: { slidesPerView: 1.6 },
                        768: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navPrevRef.current;
                        swiper.params.navigation.nextEl = navNextRef.current;
                    }}
                    showPagination={false}
                >
                    {galleryItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ScrollReveal direction="fade-up" delay={0.2 + index * 0.05}>
                                <div className="gallery-card">
                                    <div className="img-wrapper">
                                        <Image src={item.src} alt={item.title} width={1200} height={900} loading="lazy" />
                                    </div>
                                    <div className="overlay">
                                        <span className="label">{item.title}</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </SwiperSlide>
                    ))}
                </SwiperCarousel>
            </div>
        </section>
    );
};

export default GallerySec;
