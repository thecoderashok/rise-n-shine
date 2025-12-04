import React, { useRef } from "react";
import SecTitle from "../../../components/SecTitle";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import SwiperCarousel from "../../../components/Swiper/SwiperCarousel";
import { SwiperSlide } from "swiper/react";
import Image from "../../../components/Image";

const clubsData = [
    {
        src: "/images/hero-1.jpg",
        title: "Art and Craft Club (Doodle and Do)",
        description: "Encourages creative expression through hands-on projects and design."
    },
    {
        src: "/images/hero-2.jpg",
        title: "Business Club",
        description: "Fosters entrepreneurial thinking and business leadership skills through interactive activities."
    },
    {
        src: "/images/hero-3.jpg",
        title: "ESG Club",
        description: "Promotes awareness of environmental, social, and governance principles with practical initiatives."
    },
    {
        src: "/images/why-us-1.jpg",
        title: "Event Management Club",
        description: "Develops organisational and leadership abilities through planning and executing events."
    },
    {
        src: "/images/why-us-2.jpg",
        title: "Social Media Club",
        description: "Builds digital storytelling and communication skills while engaging with real-world media trends."
    }
];

const ClubCard = ({ data }) => {
    const { src, title, description, alt = "", width = 1200, height = 900 } = data;

    return (
        <div className="club-card">
            <div className="img-wrapper">
                <Image
                    src={src}
                    alt={alt || title}
                    width={width}
                    height={height}
                />
            </div>
            <div className="content-wrapper">
                <h3 className="title-text">{title}</h3>
                <p className="description">{description}</p>
            </div>
        </div>
    );
};

const ClubsActivitiesSec = () => {
    const navPrevRef = useRef(null);
    const navNextRef = useRef(null);

    return (
        <section className="clubs-activities-sec">
            <div className="gallery-header">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-lg-6">
                            <SecTitle
                                subTitle={""}
                                mainTitle={<>Clubs and Activities</>}
                            />
                        </div>
                        <div className="col-lg-6">
                            <ScrollReveal direction="fade-up" delay={0.2}>
                                <div className="content-text">
                                    <p>
                                        Clubs at Rise and Shine Institute of Learning provide a vibrant platform for students to explore interests, develop leadership, and build strong networks beyond the classroom. Each club is designed to nurture creativity, collaboration, and practical skills while enriching the overall campus experience.
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
                                    onBeforeInit={(swiper) => {
                                        swiper.params.navigation.prevEl = navPrevRef.current;
                                        swiper.params.navigation.nextEl = navNextRef.current;
                                    }}
                                    showPagination={false}
                                >
                                    {clubsData.map((club, index) => (
                                        <SwiperSlide key={index}>
                                            <ClubCard
                                                data={{
                                                    ...club,
                                                    alt: club.title,
                                                    width: 1200,
                                                    height: 900,
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

export default ClubsActivitiesSec;

