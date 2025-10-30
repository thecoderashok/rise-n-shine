import React from 'react'
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import Image from '../../../components/Image';

const MissionVisionSec = () => {
    return (
        <section className='about-mission-vision-sec'>
            <div className="container">
                <div className="row page-text-content align-items-center">
                    <div className="col-lg-6 left-side">
                        <ScrollReveal direction="fade-left" delay={0.4}>
                            <div className="img-wrapper">
                                <Image src={`/images/hero-banner.jpg`} alt={""} width={746} height={541} />
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className="col-lg-6">
                        <ScrollReveal direction="fade-right" delay={0.4}>
                            <div className="content-wrapper">
                                <div className="text-wrapper">
                                    <h2 className='title-text'>Our Vision</h2>
                                    <p>
                                        To be a globally recognised institute that redefines professional education by shaping bold thinkers, agile leaders, and future-ready professionals who rise to shine in every corner of the world.
                                    </p>
                                </div>
                                <div className="text-wrapper">
                                    <h2 className='title-text'>Our Mission</h2>
                                    <p>
                                        To empower learners with future-ready skills through industry-focused education that blends academic excellence with hands-on experience.
                                    </p>
                                    <p>
                                        Based in Dubai's global hub, we offer dynamic certification programmes, expert mentorship, and real-world exposure, shaping bold thinkers and agile professionals prepared to lead in a fast-changing world. We don't just teach. We transform potential into performance.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionVisionSec;