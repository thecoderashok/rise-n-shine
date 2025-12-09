import React from "react";
import Image from "../../../components/Image";
import TextSplit from "../../../components/TextSplit";
import Button from "../../../components/Button/Button";
import ParallaxWrapper from "../../../components/Parallax/ParallaxWrapper";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";

const AboutSec = () => {
    return (
        <section className="home-about-sec">
            <div className="container">
                <div className="row align-items-end page-text-content">
                    <div className="col-lg-7 left-side">
                        <div className="title-wrapper">
                            <ScrollReveal direction="clip-scale-out-downward" delay={0.5}>
                                <div className="inner">
                                    <h2 className="main-title">
                                        Welcome to <br /> <b>Rise N Shine</b>
                                    </h2>
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className="images-pres">
                            <ScrollReveal direction="clip-scale-in-downward" delay={0.2}>
                                <div className="img-wrapper small">
                                    <ParallaxWrapper offset={10}>
                                        <Image
                                            src={`/images/home-01.jpg`}
                                            width={1920}
                                            height={1080}
                                        />
                                    </ParallaxWrapper>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal direction="clip-scale-in-downward" delay={0.2}>
                                <div className="img-wrapper large">
                                    <ParallaxWrapper offset={10}>
                                        <Image
                                            src={`/images/home-02.jpg`}
                                            width={1920}
                                            height={1080}
                                        />
                                    </ParallaxWrapper>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                    <div className="col-lg-5 right-side">
                        <ScrollReveal direction="clip-fade-up" delay={0.25}>
                            <div className="text-wrapper">
                                <h3 className="title-text">
                                    At <b className="colored">Rise N Shine,</b> we are dedicated
                                    to fostering an educational environment
                                </h3>
                                <p>
                                    that not only challenges our students academically but also
                                    prepares them thoroughly for the demands of the global job
                                    market. Our Certification Tracks are meticulously designed to
                                    blend rigorous academic theory with practical, real-world
                                    applications, ensuring that our students are not just learners,
                                    but innovators and industry leaders of tomorrow.
                                </p>

                                <ScrollReveal direction="clip-scale-out-downward" delay={0.3}>
                                    <Button textLabel={"Read more"} iconClass="fa-solid fa-arrow-right" />
                                </ScrollReveal>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSec;
