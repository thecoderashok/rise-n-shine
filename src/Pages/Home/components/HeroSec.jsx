import React from 'react'
import ParallaxWrapper from '../../../components/Parallax/ParallaxWrapper';
import Image from '../../../components/Image';

const HeroSec = () => {
    return (
        <section className="hero-sec">
            <ParallaxWrapper offset={20}>
                <div className="image-wrapper">
                    <Image
                        src={`/images/hero-banner.jpg`}
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
                            <span className="uppercase">Academic Excellence</span> <br /> Global Opportunities
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSec;