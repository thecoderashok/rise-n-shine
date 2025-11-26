import React from "react";


const AboutMarqueeSec = () => {
    return (
        <>
            <section className="about-marquee-sec">
                <div className="marquee-container" aria-hidden="true">
                    <div className="marquee-track">
                        <span>Rise N Shine</span>
                        <span>Rise N Shine</span>
                        <span>Rise N Shine</span>
                        <span>Rise N Shine</span>
                        <span>Rise N Shine</span>
                        <span>Rise N Shine</span>
                    </div>
                </div>
                <div className="inner-sec">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <p>
                                    Rise N Shine is more than just an educational institute. It serves as a launchpad for future leaders, innovators, and professionals who are prepared to shine on the global stage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutMarqueeSec;
