import React, { useRef } from 'react'
import SecTitle from '../../../components/SecTitle'
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import Image from '../../../components/Image';
import ParallaxWrapper from '../../../components/Parallax/ParallaxWrapper';

const data = [
    {
        title: "Our Mission",
        desc: "To empower learners with future-ready skills through industry-focused education that blends academic excellence with hands-on experience. Based in Dubai’s global hub, we offer dynamic certification programmes, expert mentorship, and real-world exposure, shaping bold thinkers and agile professionals prepared to lead in a fast-changing world. We don't just teach. We transform potential into performance.",
        icon: "/icons/mission.png",
    },
    {
        title: "Our Vision",
        desc: "To be a globally recognised institute that redefines professional education by shaping bold thinkers, agile leaders, and future-ready professionals who rise to shine in every corner of the world.",
        icon: "/icons/vision.png",
    },
];

const MissionVisionSec = () => {

    const containerRef = useRef(null);

    return (
        <section className="mission-and-vision-sec">
            <div className="top-sec">
                <ParallaxWrapper offset={15}>
                    <div className="image-wrapper">
                        <Image
                            src={`/images/mission-bg.jpg`}
                            alt={""}
                            title={""}
                            width={1920}
                            height={1080}
                            priority={true}
                        />
                    </div>
                </ParallaxWrapper>

                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <SecTitle
                                mainTitle={<>Vision That Inspires, <br /> Mission That Empowers</>}
                                revealLetters={true}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="inner-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="our-mission-grid" ref={containerRef}>
                                {data.map((item, index) => (
                                    <ScrollReveal
                                        key={index}
                                        direction="fade-up"
                                        duration={2}
                                        triggerRef={containerRef}
                                        delay={index * 0.04 + 0.4}
                                    >
                                        <div className="card-item">
                                            <div className="icon-wrapper">
                                                <div
                                                    className="icon"
                                                    style={{
                                                        maskImage: `url(${item.icon})`,
                                                        WebkitMaskImage: `url(${item.icon})`,
                                                    }}
                                                ></div>
                                            </div>

                                            <div className="text-content">
                                                <h3 className="title-text">{item.title}</h3>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionVisionSec