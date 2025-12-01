import React from "react";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";

const AboutMarqueeSec = () => {
    const marqueeWords = [
        "Rise N Shine",
        "Transformative",
        "Experiential",
        "Global",
        "Insightful",
        "Empowering",
        "Resilient",
    ];

    return (
        <>
            <section className="about-marquee-sec">
                <div className="marquee-container" aria-hidden="true">
                    <div className="marquee-track">
                        {marqueeWords.map((word, index) => (
                            <span key={index}>{word}</span>
                        ))}
                        {marqueeWords.map((word, index) => (
                            <span key={`duplicate-${index}`}>{word}</span>
                        ))}
                    </div>
                </div>
                <ScrollReveal direction="clip-scale-out-downward" delay={0.4}>
                    <div className="inner-sec">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-auto">
                                    <p style={{transform: "translateZ(0)"}}>
                                        Rise N Shine is more than just an educational institute. It serves as a launchpad for future leaders, innovators, and professionals who are prepared to shine on the global stage.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </>
    );
};

export default AboutMarqueeSec;
