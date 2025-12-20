import React, { useRef } from 'react'
import SecTitle from '../../../components/SecTitle'
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import TransitionLink from '../../../components/TransitionLink';
import Image from '../../../components/Image';

const data = [
    {
        title: <>Marketing and Sales Management Professional Development Programme</>,
        desc: "",
        image: "marketing.jpg",
    },
    {
        title: <>Finance Management Professional Development Programme</>,
        desc: "",
        image: "finance-management.jpg",
    },
    {
        title: <>Digital Storytelling Programme</>,
        desc: "",
        image: "story-telling.jpg",
    },
];

const OurProgramsSec = () => {

    const containerRef = useRef(null);

    return (
        <section className="programmes-sec sec-gray">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                        <SecTitle
                            mainTitle="Programmes"
                            subTitle={"What we offer"}
                            revealLetters={true}
                        />
                    </div>
                    <div className="col-12">
                        <div className="programmes-list" ref={containerRef}>
                            {data.map((item, index) => (
                                <ScrollReveal
                                    key={index}
                                    direction="fade-up"
                                    triggerRef={containerRef}
                                    delay={(index * 0.1) + 0.4}
                                >
                                    <div className="programme-card">
                                        <TransitionLink href={`#`} className="img-wrapper">
                                            <Image src={`/images/programmes/${item.image}`} alt={item.title} width={519} height={389} />
                                        </TransitionLink>
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
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurProgramsSec


{/* <section className="programmes-intro">
                <ParallaxWrapper offset={15}>
                    <div className="image-wrapper">
                        <Image
                            src="/images/marketing-bg.jpg"
                            width={1920}
                            height={1080}
                            alt="Marketing Programmes"
                        />
                    </div>
                </ParallaxWrapper>
                <div className="inner-sec">
                    <div className="container">
                        <div className="row justify-content-center">
                            <ScrollReveal direction="clip-fade-up">
                                <div className="col-lg-8 text-center">
                                    <div className="heading-wrapper">
                                        <h2 className="title-text">
                                            Marketing Programmes
                                        </h2>
                                    </div>
                                    <div className="text-content">
                                        <p>
                                            The Professional Marketing Management Development Programmes at Rise and Shine Institute of Learning are designed to equip learners with a comprehensive foundation in modern marketing and sales. Each programme progresses from essential principles to advanced strategies, combining academic depth with real-world application. Students engage with diverse modules ranging from digital marketing, sales and distribution, and financial services marketing, to cutting-edge areas such as AI-driven strategies, marketing technology, and growth hacking. This structured approach ensures that every learner develops not only a strong theoretical understanding but also the practical skills and global perspective required to excel in today's competitive business environment.
                                        </p>

                                        <Button textLabel="Learn More" customClass="style-2" link={`#`} />
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section> */}