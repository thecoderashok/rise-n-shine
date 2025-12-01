import React from "react";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import Image from "../../../components/Image";
import SecTitle from "../../../components/SecTitle";
import { useClassNames } from "../../../hook/useClassNames";

const data = [
    {
        title: (
            <>
                Hon&rsquo;ble <b>Dr. Somnath P Patil</b>
            </>
        ),
        desc: "Director",
        image: "Dr-Somnath-Patil.jpg",
        content: (
            <>
                <p>
                    At Rise and Shine Institute of Learning, Dubai, we believe that
                    education is not merely the transmission of knowledge, it is a
                    transformative journey driven by purpose, aspiration, and impact. The
                    institute embodies these principles and stands as a testament to a
                    collective vision of nurturing future-ready leaders who are prepared
                    to thrive in a globally competitive environment.
                </p>
                <p>
                    This initiative represents one of our most forward-looking ventures,
                    built on a shared commitment to empower young minds to dream
                    ambitiously, lead with conviction, and rise to every challenge.
                    Founded on the pillars of creativity, resilience, and innovation, Rise
                    and Shine is far more than an academic institution, it is a platform
                    for personal and professional evolution.
                </p>
                <p>
                    Our Dubai campus offers a truly immersive experience. With
                    state-of-the-art digital classrooms, creative studios, and
                    collaborative student spaces, the campus is designed to provide an
                    ecosystem where academic excellence meets real-world relevance.
                    Through industry exposure, expert mentorship, and entrepreneurial
                    engagement, students gain not only knowledge but also the confidence
                    and character required to lead transformational change.
                </p>
                <p>
                    As Director, I take pride in supporting this visionary endeavour and
                    upholding its values. I extend a warm invitation to be part of this
                    journey of transformation. Step into an environment where learning
                    meets leadership, and where aspirations take flight.
                </p>
                <p>
                    Welcome to the future. Welcome to Rise and Shine Institute of
                    Learning, Dubai.
                </p>
            </>
        ),
    },
    {
        title: (
            <>
                Hon&rsquo;ble <b>Dr. Rohini S Patil</b>
            </>
        ),
        desc: "Director",
        image: "Dr-Rohini-Patil.jpg",
        content: (
            <>
                <p>
                    At Rise and Shine Institute of Learning, our vision is grounded in a
                    deep understanding of what the modern business world requires —
                    adaptability, cross-cultural fluency, and a future-oriented mindset.
                    As we extend our presence internationally, the Dubai campus stands as
                    a beacon for ambitious learners who seek an education that goes beyond
                    traditional boundaries.
                </p>
                <p>
                    Dubai serves as a launchpad for innovation, entrepreneurship, and
                    global engagement. The academic offerings of the institute are
                    carefully aligned with the region&rsquo;s dynamic ecosystem, ensuring
                    that students gain experiential learning, industry immersion, and
                    international exposure from the very beginning of their journey.
                </p>
                <p>
                    Our approach is focused on preparing learners for leadership that
                    extends across borders and industries. The programmes place emphasis
                    on real-world problem solving, ethical decision making, and global
                    collaboration — qualities that are indispensable in today&rsquo;s
                    evolving economic landscape.
                </p>
                <p>
                    We extend an invitation to passionate learners to join this
                    transformative journey. With world-class faculty, global industry
                    interfaces, and a strong emphasis on personal growth, Rise and Shine
                    is the place where education evolves into leadership and ambition
                    becomes achievement.
                </p>
            </>
        ),
    },
];

const FounderMessageSec = () => {
    const classes = useClassNames();
    return (
        <section className="founder-message-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 heading-wrapper">
                        <SecTitle
                            mainTitle={<>Founder&rsquo;s Message</>}
                        />
                    </div>
                </div>

                <div className="founder-message-list">
                    {data.map((item, index) => (
                        <ScrollReveal key={index} direction="clip-scale-in-downward" delay={index * 0.1}>
                            <div className={classes("founder-message-item", (index % 2 !== 0) && "reverse-order")}>
                                <div className="founder-item-inner">
                                    <div className="row">
                                        <div className="col-lg-4 founder-media-col">
                                            <div className="image-container">
                                                <Image
                                                    src={`/images/team/${item.image}`}
                                                    alt={"Founder Image"}
                                                    width={600}
                                                    height={800}
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="info-block">
                                                <h3 className="info-name">{item.title}</h3>
                                                <span className="info-role">{item.desc}</span>
                                            </div>
                                        </div>

                                        <div className="col-lg-8 founder-text-col">
                                            <div className="content-wrapper">
                                                <div
                                                    className="quote-icon"
                                                    style={{
                                                        maskImage: "url(/icons/left-quote.png)",
                                                        WebkitMaskImage: "url(/icons/left-quote.png)",
                                                    }}
                                                ></div>

                                                <div className="message-wrapper">{item.content}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FounderMessageSec;
