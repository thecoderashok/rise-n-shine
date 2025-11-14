import React from 'react'
import ParallaxWrapper from '../../../components/Parallax/ParallaxWrapper';
import Image from '../../../components/Image';
import SwiperCarousel from '../../../components/Swiper/SwiperCarousel';
import { SwiperSlide } from 'swiper/react';
import { useClassNames } from '../../../hook/useClassNames';
import TextSplit from '../../../components/TextSplit';

const data = [
    {
        title: <>World-Class <b>Learning,</b> Limitless You.</>,
        image: "hero-1-bg.jpg",
        object: "hero-1-object.png"
    },
    {
        title: <>World-Class <b>Learning,</b> Limitless You.</>,
        image: "hero-1-bg.jpg",
        object: "hero-1-object.png"
    },
    {
        title: <>World-Class <b>Learning,</b> Limitless You.</>,
        image: "hero-1-bg.jpg",
        object: "hero-1-object.png"
    },
    // {
    //     title: <><b>Skill Up.</b> Stand Out.</>,
    //     image: "hero-2.jpg"
    // },
    // {
    //     title: <>Turn Your Drive Into <b>Direction.</b></>,
    //     image: "hero-3.jpg"
    // }
];

const HeroSec = () => {
    const classes = useClassNames()
    return (
        <section className="hero-sec">
            <SwiperCarousel
                slidesPerView={1}
                spaceBetween={0}
                speed={1000}
                autoplay={false}
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
                                <div className={classes("content-wrapper")}>
                                    <TextSplit>
                                        <h2 className="title-text">
                                            {slide.title}
                                        </h2>
                                    </TextSplit>
                                </div>

                                <div className="object-wrapper">
                                    <Image
                                        src={`/images/banner/${slide.object}`}
                                        alt={""}
                                        title={""}
                                        width={1920}
                                        height={1080}
                                        priority={true}
                                    />
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