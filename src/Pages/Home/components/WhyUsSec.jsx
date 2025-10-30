import React from 'react'
import Image from '../../../components/Image'
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal'
import SecTitle from '../../../components/SecTitle'

const data = [
    {
        title: "Global Perspective",
        icon: "/icons/mission.png",
    },
    {
        title: "Industry-Focused Programmes",
        icon: "/icons/vision.png",
    },
    {
        title: "Expert Mentorship",
        icon: "/icons/vision.png",
    },
    {
        title: "Future-Ready Skills",
        icon: "/icons/vision.png",
    },
];

const WhyUsSec = () => {
    return (
        <section className="home-whyus-sec">
            <div className="container">
                <div className="row page-text-content">
                    <div className="col-lg-6 left-side">
                        <SecTitle
                            subTitle={"Why us"}
                            mainTitle={"Why Rise N Shine?"}
                            revealLetters={true}
                        />
                        <ScrollReveal direction="fade-in" delay={0.4}>
                            <div className="content-wrapper">
                                <p>Because we prepare you for tomorrow, not yesterday.</p>

                                <div className="why-us-list">
                                    {data.map((item, index) => (
                                        <ScrollReveal
                                            key={index}
                                            direction="fade-up"
                                            duration={2}
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
                                                </div>
                                            </div>
                                        </ScrollReveal>
                                    ))}
                                </div>

                                 <p>At Rise N Shine, your education is the launchpad for your success.</p>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="col-lg-6">
                        <ScrollReveal direction="fade-right" delay={0.4}>
                            <div className="img-wrapper">
                                <Image src={`/images/hero-banner.jpg`} alt={""} width={746} height={541} />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUsSec