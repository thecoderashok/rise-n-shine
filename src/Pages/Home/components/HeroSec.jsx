import React, { useEffect } from 'react'
import ParallaxWrapper from '../../../components/Parallax/ParallaxWrapper';
import Image from '../../../components/Image';
import SwiperCarousel from '../../../components/Swiper/SwiperCarousel';
import { SwiperSlide } from 'swiper/react';
import { useClassNames } from '../../../hook/useClassNames';
import TextSplit from '../../../components/TextSplit';
import { AutoFitText } from '../../components/AutoFitText';

const data = [
    {
        title: <>World-Class <b>Learning,</b> Limitless You.</>,
        image: {
            src: "hero-1-bg.jpg",
            alt: "World-Class Learning, Limitless You"
        },
        object: "hero-1-object.png",
        shape: "shape-pink.png"
    },
    {
        title: <><b>Skill Up.</b> Stand Out.</>,
        image: {
            src: "hero-2-bg.jpg",
            alt: "Skill Up. Stand Out."
        },
        object: "hero-2-object.png",
        shape: "shape-purple.png"
    },
    {
        title: <>Turn Your Drive Into <b>Direction.</b></>,
        image: {
            src: "hero-3-bg.jpg",
            alt: "Turn Your Drive Into Direction"
        },
        object: "hero-3-object.png",
        shape: "shape-yellow.png"
    },
];


const HeroSec = () => {
    const classes = useClassNames()

    useEffect(() => {
        const cleanup = AutoFitText({
            wordSelector: ".title-text .word",
            containerSelector: ".hero-sec .content-wrapper",
        });

        return cleanup;
    }, []);

    return (
        <section className="hero-sec">
            <SwiperCarousel
                slidesPerView={1}
                spaceBetween={0}
                speed={1000}
                autoplay={false}
                autoplayDelay={3000}
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
                                    src={`/images/banner/${slide.image.src}`}
                                    alt={slide.image.alt}
                                    title={slide.image.alt}
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
                                        alt={slide.image.alt}
                                        priority={true}
                                    />
                                </div>

                                <div className="shape-wrapper">
                                    <Image
                                        src={`/images/banner/${slide.shape}`}
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