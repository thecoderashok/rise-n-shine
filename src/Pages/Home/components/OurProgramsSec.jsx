import React from 'react';
import SecTitle from '../../../components/SecTitle';
import TransitionLink from '../../../components/TransitionLink';
import Image from '../../../components/Image';
import SwiperCarousel from '../../../components/Swiper/SwiperCarousel';
import { SwiperSlide } from 'swiper/react';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';

const data = [
    {
        title: <>Marketing and Sales Management Professional Development Programme</>,
        desc: "",
        image: "marketing.jpg",
        modules: [
            "Principals of Marketing",
            "Digital Marketing",
            "Sales & Marketing",
            "Key Account Management",
            "Banking",
            "Real Estate Marketing",
            "FMCG",
            "Market Research"
        ]
    },
    {
        title: <>Professional Marketing Management Development Program - Advanced Level 1</>,
        desc: "",
        image: "finance-management.jpg",
        modules: [
            "Sales & Distribution Management",
            "Marketing of Financial Services",
            "AI - Driven Digital Marketing",
            "MarTech & Marketing Automation Tools",
            "Retail Management & Digital Commerce",
            "Organisational Marketing",
            "Digital Storytelling"
        ]
    },
    {
        title: <>Professional Marketing Management Development Program - Advanced Level 2 </>,
        desc: "",
        image: "story-telling.jpg",
        modules: [
            "Marketing Management",
            "Phygital Consumer Behavior",
            "Technology & AI",
            "Services Marketing",
            "Growth Hacking and Performance Marketing",
            "Market Research and Analytics"
        ]
    },
];

const OurProgramsSec = () => {
    return (
        <section className="programmes-sec">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                        <SecTitle
                            mainTitle="Programmes"
                            subTitle={"What we offer"}
                        />
                    </div>
                    <div className="col-12">
                        <div className="programmes-carousel">
                            <SwiperCarousel
                                slidesPerView={1}
                                spaceBetween={20}
                                navigationBtns
                                breakpoints={{
                                    575: { slidesPerView: 1.2 },
                                    768: { slidesPerView: 2 },
                                    991: { slidesPerView: 2 },
                                    1200: { slidesPerView: 3 },
                                }}
                            >
                                {data.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <ScrollReveal direction="clip-scale-in-downward" delay={0.1 * (index + 1)}>
                                            <div className="programme-card">
                                                <TransitionLink href={`#`} className="img-wrapper">
                                                    <Image src={`/images/programmes/${item.image}`} alt={item.title} width={519} height={389} />
                                                </TransitionLink>
                                                <div className="overlay-wrapper">
                                                    <ul className="modules">
                                                        {item.modules.map((mItem, mIndex) => (
                                                            <li key={mIndex} style={{ "--delay": `${mIndex * 40}ms` }}>{mItem}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="text-wrapper">
                                                    <TransitionLink href={`#`}>
                                                        <h3 className="title-text">{item.title}</h3>
                                                    </TransitionLink>

                                                    <TransitionLink href={`#`} className={"view-more-btn"}>
                                                        <span className="text-label">
                                                            View Details
                                                        </span>
                                                        <span className="icon"></span>
                                                    </TransitionLink>
                                                </div>
                                            </div>
                                        </ScrollReveal>
                                    </SwiperSlide>
                                ))}
                            </SwiperCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurProgramsSec
