import React from 'react'
import TextSplit from '../../../components/TextSplit'
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal'

const AboutIntroSec = () => {
    return (
        <section className='about-intro-sec sec-gray'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 left-col">
                        <TextSplit reveal={true}>
                            <h2 className="title-text">About the Rise N Shine <br /> <b>Institute of Learning:</b></h2>
                        </TextSplit>

                        <ScrollReveal direction="fade-up" delay={0.4}>
                            <div className="text-wrapper">
                                <div className="icon">
                                    <span
                                        style={{
                                            maskImage: `url(/icons/left-quote.png)`,
                                            WebkitMaskImage: `url(/icons/left-quote.png)`,
                                        }}
                                    ></span>
                                </div>
                                <p>
                                    Rise N Shine Institute of Learning is a forward-looking centre of learning that was founded with the vision of redefining professional education in an increasingly globalised world. Located in Dubai, one of the world's most vibrant business and cultural capitals, the institute provides students with a unique vantage point where academic excellence meets real-world opportunities. The institute has been established to nurture thinkers, innovators, and leaders who are prepared to excel in dynamic, multicultural, and competitive environments.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className="col-lg-6 right-col">
                        <ScrollReveal direction="fade-right" delay={0.4}>
                            <div className="content-box">
                                <div className="text-wrapper">
                                    <p>
                                        The institute combines rigorous academic theory with practical exposure, ensuring that every learner is not only prepared for examinations but also equipped for the real-world challenges of the global workplace.
                                    </p>
                                    <p>
                                        At Rise N Shine, the programmes are thoughtfully crafted to meet industry demands, integrating foundational concepts with practical projects, internships, and global experiences. This methodology enables students to develop the knowledge, skills, and confidence that distinguish them in their respective careers. We take pride in our distinguished faculty, a collective of academicians and experienced industry professionals who bring valuable insights from across the globe into the classroom. Their guidance enables students to develop a profound understanding of their subjects while also learning how to apply these skills in professional contexts. The mentorship of the faculty extends beyond academic instruction, preparing learners to grow into resilient professionals with a global perspective.
                                    </p>

                                    <p>
                                        The student experience at Rise N Shine is designed to be holistic. In addition to academics, learners are encouraged to participate in cultural events, clubs, and community projects that enrich their perspective and prepare them to succeed in diverse environments. The institute values cultural diversity and celebrates it as a cornerstone of modern education, creating a vibrant ecosystem where students from different backgrounds learn, collaborate, and grow together.
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

export default AboutIntroSec