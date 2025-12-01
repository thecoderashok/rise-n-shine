import React from "react";
import Image from "../../../components/Image";
import TextSplit from "../../../components/TextSplit";
import Button from "../../../components/Button/Button";
import ParallaxWrapper from "../../../components/Parallax/ParallaxWrapper";

const AboutSec = () => {
    return (
        <section className="home-about-sec">
            <div className="container">
                <div className="row align-items-end page-text-content">
                    <div className="col-lg-7 left-side">
                        <div className="title-wrapper">
                            <h2 className="main-title">
                                Welcome to <br /> <b>Rise N Shine</b>
                            </h2>
                        </div>
                        <div className="images-pres">
                            <div className="img-wrapper small">
                                <ParallaxWrapper offset={10}>
                                    <Image
                                        src={`/images/about-img.jpg`}
                                        width={1920}
                                        height={1080}
                                    />
                                </ParallaxWrapper>
                            </div>
                            <div className="img-wrapper large">
                                <ParallaxWrapper offset={10}>
                                    <Image
                                        src={`/images/hero-1.jpg`}
                                        width={1920}
                                        height={1080}
                                    />
                                </ParallaxWrapper>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 right-side">
                        <div className="text-wrapper">
                            <TextSplit reveal={true}>
                                <h3 className="title-text">
                                    At <b className="colored">Rise N Shine,</b> we are dedicated
                                    to fostering an educational environment
                                </h3>
                            </TextSplit>
                            <p>
                                that not only challenges our students academically but also
                                prepares them thoroughly for the demands of the global job
                                market. Our Certification Tracks are meticulously designed to
                                blend rigorous academic theory with practical, real-world
                                applications, ensuring that our students are not just learners,
                                but innovators and industry leaders of tomorrow.
                            </p>

                            <Button textLabel={"Read more"} iconClass="fa-solid fa-arrow-right" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSec;
