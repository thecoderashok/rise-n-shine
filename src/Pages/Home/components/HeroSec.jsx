import React from 'react'
import ParallaxWrapper from '../../../components/Parallax/ParallaxWrapper';
import Image from '../../../components/Image';
import SwiperCarousel from '../../../components/Swiper/SwiperCarousel';
import { SwiperSlide } from 'swiper/react';

const data = [
    {
        title: "Global Vibes Only!",
        image: "hero-1.jpg"
    },
    {
        title: "Learning Levelled Up",
        image: "hero-2.jpg"
    },
    {
        title: "Lead, Don't Follow!",
        image: "hero-3.jpg"
    }
];

const HeroSec = () => {
    return (
        <section className="hero-sec">
            <SwiperCarousel
                slidesPerView={1}
                spaceBetween={0}
                speed={1000}
                autoplay={true}
                autoplayDelay={5000}
                navigationBtns={false}
                showPagination={false}
                fadeEffect={true}
                loop={true}
            >
                {data.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <ParallaxWrapper offset={20}>
                            <div className="image-wrapper">
                                <Image
                                    src={`/images/banner/${slide.image}`}
                                    alt={""}
                                    title={""}
                                    width={1920}
                                    height={1080}
                                    priority={true}
                                />
                            </div>
                        </ParallaxWrapper>

                        <div className="inner-sec">
                            <div className="container">
                                <div className="content-wrapper">
                                    <h2 className="title-text">
                                        {slide.title}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </SwiperCarousel>
        </section>
    )
}

export default HeroSec;