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