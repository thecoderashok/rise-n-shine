import React, { useRef } from "react";
import SecTitle from "../../../components/SecTitle";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import SwiperCarousel from "../../../components/Swiper/SwiperCarousel";
import { SwiperSlide } from "swiper/react";
import GalleryCard from "../../components/GalleryCard";

const galleryItems = [
    { src: "/images/hero-1.jpg", title: "Classroom Sessions" },
    { src: "/images/hero-2.jpg", title: "Workshops" },
    { src: "/images/hero-3.jpg", title: "Cultural Events" },
    { src: "/images/why-us-1.jpg", title: "Student Initiatives" },
    { src: "/images/why-us-2.jpg", title: "Academic Life" },
    { src: "/images/why-us-3.jpg", title: "Learning Environment" },
    { src: "/images/why-us-4.jpg", title: "Community" },
    { src: "/images/marketing-bg.jpg", title: "Collaboration" },
    { src: "/images/finance-bg.jpg", title: "Innovation" },
];

const FacultyGallerySec = () => {
    const navPrevRef = useRef(null);
    const navNextRef = useRef(null);

    return (
        <section className="faculty-gallery-sec">
            <div className="gallery-header">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-lg-6">
                            <SecTitle
                                subTitle={""}
                                mainTitle={<>Internal Gallery</>}
                            />
                        </div>
                        <div className="col-lg-6">
                            <ScrollReveal direction="fade-up" delay={0.2}>
                                <div className="content-text">
                                    <p>
                                        The Internal Gallery offers a glimpse into the everyday rhythm of the Rise and Shine campus. It showcases the essence of academic life, from dynamic classroom sessions and collaborative workshops to cultural events and student-led initiatives. Each image reflects the institute's commitment to providing a nurturing environment where learning, creativity, and community flourish together.
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

export default FacultyGallerySec;

