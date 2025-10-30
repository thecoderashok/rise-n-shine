import React, { useRef, useState } from 'react'
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import Image from '../../../components/Image';
import SwiperCarousel from '../../../components/Swiper/SwiperCarousel';
import { SwiperSlide } from 'swiper/react';
import SecTitle from '../../../components/SecTitle';
import TextSplit from '../../../components/TextSplit';

const data = [
    {
        title: <>Hon&rsquo;ble <b>Dr. Somnath P Patil</b></>,
        desc: "Director",
        image: "Dr-Somnath-Patil.jpg",
        content: (
            <>
                <p>
                    At Rise and Shine Institute of Learning, Dubai, we believe that education is not merely the transmission of knowledge, it is a transformative journey driven by purpose, aspiration, and impact. The institute embodies these principles and stands as a testament to a collective vision of nurturing future-ready leaders who are prepared to thrive in a globally competitive environment.
                </p>
                <p>
                    This initiative represents one of our most forward-looking ventures, built on a shared commitment to empower young minds to dream ambitiously, lead with conviction, and rise to every challenge. Founded on the pillars of creativity, resilience, and innovation, Rise and Shine is far more than an academic institution, it is a platform for personal and professional evolution.
                </p>
                <p>
                    Our Dubai campus offers a truly immersive experience. With state-of-the-art digital classrooms, creative studios, and collaborative student spaces, the campus is designed to provide an ecosystem where academic excellence meets real-world relevance. Through industry exposure, expert mentorship, and entrepreneurial engagement, students gain not only knowledge but also the confidence and character required to lead transformational change.
                </p>
                <p>
                    As Director, I take pride in supporting this visionary endeavour and upholding its values. I extend a warm invitation to be part of this journey of transformation. Step into an environment where learning meets leadership, and where aspirations take flight.
                </p>
                <p>
                    Welcome to the future. Welcome to Rise and Shine Institute of Learning, Dubai.
                </p>
            </>
        )
    },
    {
        title: <>Hon&rsquo;ble <b>Dr. Rohini S Patil</b></>,
        desc: "Director",
        image: "Dr-Rohini-Patil.jpg",
        content: (
            <>
                <p>
                    At Rise and Shine Institute of Learning, our vision is grounded in a deep understanding of what the modern business world requires — adaptability, cross-cultural fluency, and a future-oriented mindset. As we extend our presence internationally, the Dubai campus stands as a beacon for ambitious learners who seek an education that goes beyond traditional boundaries.
                </p>
                <p>
                    Dubai serves as a launchpad for innovation, entrepreneurship, and global engagement. The academic offerings of the institute are carefully aligned with the region&rsquo;s dynamic ecosystem, ensuring that students gain experiential learning, industry immersion, and international exposure from the very beginning of their journey.
                </p>
                <p>
                    Our approach is focused on preparing learners for leadership that extends across borders and industries. The programmes place emphasis on real-world problem solving, ethical decision making, and global collaboration — qualities that are indispensable in today&rsquo;s evolving economic landscape.
                </p>
                <p>
                    We extend an invitation to passionate learners to join this transformative journey. With world-class faculty, global industry interfaces, and a strong emphasis on personal growth, Rise and Shine is the place where education evolves into leadership and ambition becomes achievement.
                </p>
            </>
        )
    },
    // {
    //     title: <><b>Dr. Amol A Gawande</b></>,
    //     desc: "General Manager",
    //     image: "Dr-Amol-Gawande.jpg",
    //     content: (
    //         <>
    //             <p>
    //                 At Rise and Shine Institute of Learning, we believe that the future of management education exists at the intersection of innovation, global exposure, and real-world impact. With immense pride and strategic foresight, our international campus in Dubai stands as a testament to this vision, located in a global centre of enterprise, technology, and cultural convergence.
    //             </p>
    //             <p>
    //                 Our presence in Dubai reflects our dedication to developing globally competent professionals who are both industry ready and future ready. The city&rsquo;s dynamic economy, progressive governance, and strategic importance as a global business hub provide students with unmatched access to world-class opportunities.
    //             </p>
    //             <p>
    //                 Through an immersive academic experience, students engage directly with multinational companies, secure valuable certifications, and acquire hands-on exposure that accelerates both their learning and career growth.
    //             </p>
    //             <p>
    //                 This initiative promotes international collaboration, academic excellence, and learner mobility. Students cultivate a global mindset by working with international peers, collaborating with industry leaders, and navigating contemporary business challenges.
    //             </p>
    //             <p>
    //                 At Rise and Shine Institute of Learning, our mission is to shape agile, innovative, and ethical leaders who are prepared to create meaningful impact in every market across the world. We welcome aspiring professionals who are ready to embrace change, think boldly, and contribute to the future of global business.
    //             </p>
    //         </>
    //     )
    // }
]

const FounderMessageSec = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    const goNext = () => {
        swiperRef.current?.slideNext();
    };

    const goPrev = () => {
        swiperRef.current?.slidePrev();
    };

    return (
        <section className='founder-message-sec'>
            <div className="container">
                <div className="row page-text-content">
                    <div className="col-12 heading-wrapper">
                        <SecTitle
                            mainTitle={<>Founder&rsquo;s Message</>}
                            revealLetters={true}
                        />

                        <ScrollReveal direction="fade-in" delay={0.4}>
                            <div className="slide-buttons">
                                <button onClick={goNext} className="prev-btn" aria-label="Previous Slide"></button>
                                <button onClick={goPrev} className="next-btn" aria-label="Next Slide"></button>
                            </div>
                        </ScrollReveal>

                    </div>
                    <div className="col-lg-6 left-side">
                        <ScrollReveal direction="fade-left" delay={0.4}>
                            <div className="content-wrapper">

                                {data.map((item, index) => (
                                    <div
                                        className="inner"
                                        key={index}
                                        data-state={activeIndex === index ? "active" : "inactive"}
                                    >

                                        <TextSplit reveal={true} revealLetters={true} once={false} >
                                            <h3 className="title-text">{item.title}</h3>
                                        </TextSplit>

                                        <ScrollReveal direction="fade-up" offset={30} delay={0.2} once={false}>
                                            <span className="desc">
                                                {item.desc}
                                            </span>
                                        </ScrollReveal>

                                        <ScrollReveal direction="fade-up" offset={40} delay={0.4} once={false}>
                                            <div className="para">{item.content}</div>
                                        </ScrollReveal>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className="col-lg-6">
                        <ScrollReveal direction="fade-right" delay={0.4}>
                            <div className="img-carousel">
                                <SwiperCarousel
                                    slidesPerView={1}
                                    spaceBetween={0}
                                    speed={800}
                                    autoplay={true}
                                    autoplayDelay={5000}
                                    navigationBtns={false}
                                    showPagination={false}
                                    loop={true}
                                    fadeEffect={true}
                                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                                >
                                    {data.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="img-wrapper">
                                                <Image
                                                    src={`/images/team/${item.image}`}
                                                    alt={item.title}
                                                    width={1200}
                                                    height={1200}
                                                    loading="lazy"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </SwiperCarousel>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FounderMessageSec;