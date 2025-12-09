import React, { useRef } from "react";
import SecTitle from "../../../components/SecTitle";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import SwiperCarousel from "../../../components/Swiper/SwiperCarousel";
import { SwiperSlide } from "swiper/react";
import GalleryCard from "../../components/GalleryCard";

const galleryItems = [
    { src: "/images/gallery/1.jpg", title: "Class Room" },
    { src: "/images/gallery/2.jpg", title: "Campus" },
    { src: "/images/gallery/3.jpg", title: "Events" },
    { src: "/images/gallery/4.jpg", title: "Labs" },
    { src: "/images/gallery/5.jpg", title: "Parkings" },
    { src: "/images/gallery/6.jpg", title: "Student Life" }
];

const GallerySec = () => {
    const navPrevRef = useRef(null);
    const navNextRef = useRef(null);

    return (
        <section className="gallery-sec sec-gray" id="gallery">
            <div className="gallery-header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <SecTitle
                                subTitle={"Campus Life"}
                                mainTitle={<>Inside Rise N Shine</>}
                            />
                        </div>
                        <div className="col-md-6 text-md-end d-flex justify-content-md-end justify-content-start">
                            <div className="slide-buttons">
                                <button type="button" ref={navPrevRef} className="slide-btn prev" aria-label="Previous slide" />
                                <button type="button" ref={navNextRef} className="slide-btn next" aria-label="Next slide" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="carousel-sec">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <ScrollReveal direction="fade-right" delay={0.2}>
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
                                                    key={index}
                                                    data={{
                                                        ...item,
                                                        alt: item.title || item.alt || "",
                                                        width: 1200,
                                                        height: 900,
                                                        loading: "lazy"
                                                    }}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </SwiperCarousel>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySec;
