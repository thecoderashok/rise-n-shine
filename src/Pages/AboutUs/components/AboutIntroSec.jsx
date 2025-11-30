import React from "react";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import Image from "../../../components/Image";

const AboutIntroSec = () => {
    return (
        <>
            <section className="about-intro-sec sec-gray">
                <div className="container">
                    <div className="row page-text-content">
                        <div className="col-lg-6 left-side">
                            <div className="heading-wrapper">
                                <h2 className="sub-title">Who we are</h2>
                                <h3 className="title-text">
                                    <b className="colored">Rise N Shine Institute of Learning</b>{" "}
                                    is a forward-looking centre of learning that was founded with
                                    the vision of redefining professional education in an
                                    increasingly globalised world.
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-content">
                                <p>
                                    Located in Dubai, one of the world's most vibrant business and
                                    cultural capitals, the institute provides students with a
                                    unique vantage point where academic excellence meets
                                    real-world opportunities.
                                </p>
                                <p>
                                    The institute has been established to nurture thinkers,
                                    innovators, and leaders who are prepared to excel in dynamic,
                                    multicultural, and competitive environments. The institute
                                    combines rigorous academic theory with practical exposure,
                                    ensuring that every learner is not only prepared for
                                    examinations but also equipped for the real-world challenges
                                    of the global workplace.
                                </p>
                            </div>
                            {/* <ScrollReveal direction="fade-left" delay={0.1}>
                                <div className="image-wrapper vertical-large">
                                    <Image
                                        src="/images/hero-2.jpg"
                                        width={1920}
                                        height={1080}
                                        alt=""
                                    />
                                </div>
                            </ScrollReveal> */}
                        </div>
                    </div>
                    <div className="row page-text-content align-items-end">
                        <div className="col-lg-6 left-side">
                            <div className="text-content">
                                <p>
                                    At Rise N Shine, the programmes are thoughtfully crafted to
                                    meet industry demands, integrating foundational concepts with
                                    practical projects, internships, and global experiences. This
                                    methodology enables students to develop the knowledge, skills,
                                    and confidence that distinguish them in their respective
                                    careers. We take pride in our distinguished faculty, a
                                    collective of academicians and experienced industry
                                    professionals who bring valuable insights from across the
                                    globe into the classroom. Their guidance enables students to
                                    develop a profound understanding of their subjects while also
                                    learning how to apply these skills in professional contexts.
                                    The mentorship of the faculty extends beyond academic
                                    instruction, preparing learners to grow into resilient
                                    professionals with a global perspective.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ScrollReveal direction="fade-left" delay={0.1}>
                                <div className="image-wrapper">
                                    <Image
                                        src="/images/hero-2.jpg"
                                        width={1920}
                                        height={1080}
                                        alt=""
                                    />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-intro-sec sec-two">
                <div className="container">
                    <div className="row page-text-content">
                        <div className="col-lg-6">
                            <div className="title-text style-2">
                                The student experience <br /> at{" "}
                                <b className="colored">Rise N Shine</b> is designed <br /> to be
                                holistic.
                            </div>
                        </div>

                        <div className="col-lg-6 right-side">
                            <div className="text-content py-0">
                                <p>
                                    In addition to academics, learners are encouraged to
                                    participate in cultural events, clubs, and community projects
                                    that enrich their perspective and prepare them to succeed in
                                    diverse environments. The institute values cultural diversity
                                    and celebrates it as a cornerstone of modern education,
                                    creating a vibrant ecosystem where students from different
                                    backgrounds learn, collaborate, and grow together.
                                </p>
                                <p>
                                    With a strong focus on career development, Rise N Shine offers
                                    robust career services that guide learners through every stage
                                    of their professional journey. From building an impactful
                                    résumé to refining interview skills and accessing internships
                                    or placements with leading organisations, students benefit
                                    from personalised support that accelerates their career paths.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutIntroSec;
