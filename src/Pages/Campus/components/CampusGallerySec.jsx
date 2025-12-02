import React, { useRef } from "react";
import SecTitle from "../../../components/SecTitle";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import SwiperCarousel from "../../../components/Swiper/SwiperCarousel";
import { SwiperSlide } from "swiper/react";
import GalleryCard from "../../components/GalleryCard";

const galleryItems = [
    { src: "/images/hero-1.jpg", title: "Campus View" },
    { src: "/images/hero-2.jpg", title: "Modern Facilities" },
    { src: "/images/hero-3.jpg", title: "Learning Spaces" },
    { src: "/images/why-us-1.jpg", title: "Student Life" },
    { src: "/images/why-us-2.jpg", title: "Campus Events" },
    { src: "/images/why-us-3.jpg", title: "Academic Excellence" },
    { src: "/images/why-us-4.jpg", title: "Community" },
    { src: "/images/marketing-bg.jpg", title: "Programmes" },
    { src: "/images/finance-bg.jpg", title: "Resources" },
];

const CampusGallerySec = () => {
    const navPrevRef = useRef(null);
    const navNextRef = useRef(null);

    return (
        <section className="campus-gallery-sec sec-gray">
            <div className="gallery-header">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-lg-6">
                            <SecTitle
                                subTitle={""}
                                mainTitle={<>Campus Gallery</>}
                            />
                        </div>
                        <div className="col-lg-6">
                            <ScrollReveal direction="fade-up" delay={0.2}>
                                <div className="content-text">
                                    <p>
                                        The Rise and Shine campus in Dubai is designed to inspire excellence, collaboration, and creativity. It brings together modern digital classrooms, innovative studios, and dynamic student spaces that encourage both focused learning and interactive exchange. The gallery reflects the vibrant spirit of a community where ideas are shared, cultures connect, and aspirations take shape. Every image captures the energy of an environment built to nurture bold thinkers, agile leaders, and future-ready professionals.
                                    </p>
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
                                            <GalleryCard
                                                data={{
                                                    ...item,
                                                    alt: item.title || item.alt || "",
                                                    title: null,
                                                    width: 1200,
                                                    height: 900,
                                                    loading: "lazy"
                                                }}
                                            />
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
};

export default CampusGallerySec;

