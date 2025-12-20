import React from 'react';
import Image from '../../../components/Image';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import Button from '../../../components/Button/Button';

const faculty_images = [
    {
        src: "/images/team/Dr-Somnath-Patil.jpg",
    },
    {
        src: "/images/team/Dr-Rohini-Patil.jpg",
    },
    {
        src: "/images/team/Dr-Ahmad.jpg",
    },
    {
        src: "/images/team/Dr-Sankalp-Dandawate.jpg",
    },
    {
        src: "/images/team/Ms-Suman-Deokota.jpg",
    },
    {
        src: "/images/team/Ms-Palak-Khanna.jpg",
    }
];

const FacultyLeadershipSec = () => {
    return (
        <section className="faculty-leadership-sec sec-dark">
            <div className="container">
                <div className="row page-text-content align-items-center">
                    <div className="col-lg-6 left-side">
                        <div className="images-pres">
                            <ScrollReveal direction="fade-up" delay={0.25}>
                                <div className="images-col marquee-col">
                                    <div className="marquee-track">
                                        {faculty_images.map((img, index) => (
                                            <div className={`img-wrapper`} key={index} aria-hidden="true">
                                                <Image
                                                    src={img.src}
                                                    width={500}
                                                    height={500}
                                                    alt="Faculty member"
                                                />
                                            </div>
                                        ))}
                                        {[...faculty_images].map((img, index) => (
                                            <div className={`img-wrapper`} key={`duplicate-${index}`} aria-hidden="true">
                                                <Image
                                                    src={img.src}
                                                    width={500}
                                                    height={500}
                                                    alt="Faculty member"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="fade-down" delay={0.25}>
                                <div className="images-col marquee-col">
                                    <div className="marquee-track marquee-reverse">
                                        {[...faculty_images].reverse().map((img, index) => (
                                            <div className={`img-wrapper`} key={index} aria-hidden="true">
                                                <Image
                                                    src={img.src}
                                                    width={500}
                                                    height={500}
                                                    alt="Faculty member"
                                                />
                                            </div>
                                        ))}
                                        {[...faculty_images].reverse().map((img, index) => (
                                            <div className={`img-wrapper`} key={`duplicate-${index}`} aria-hidden="true">
                                                <Image
                                                    src={img.src}
                                                    width={500}
                                                    height={500}
                                                    alt="Faculty member"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>

                    <ScrollReveal direction="fade-up" delay={0.25}>
                        <div className="col-lg-6">
                            <div className="heading-wrapper">
                                <h2 className="title-text">
                                    Faculty Profiles
                                </h2>
                            </div>
                            <div className="text-content py-0">
                                <p>
                                    At Rise and Shine Institute of Learning, our strength lies in the calibre of our leadership and faculty. The institute is guided by accomplished professionals who bring together academic excellence, industry expertise, and a global perspective. From visionary directors and senior academicians to dynamic officers shaping learning and operations, every member of the team contributes to creating an environment where knowledge meets real-world relevance. Their diverse qualifications in management, medicine, psychology, economics, and marketing reflect a multidisciplinary foundation that equips students with a truly holistic education. Collectively, they form a team committed to nurturing future-ready professionals who are prepared to excel in an increasingly competitive and interconnected world.
                                </p>

                                <Button textLabel="Meet our team" link={`/faculties`} customClass={"style-1"} />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default FacultyLeadershipSec;

