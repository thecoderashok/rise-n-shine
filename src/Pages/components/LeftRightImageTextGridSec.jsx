import React from 'react'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'
import { useClassNames } from '../../hook/useClassNames'
import Image from '../../components/Image'
import SecTitle from '../../components/SecTitle'

const LeftRightImageTextGridSec = ({ data = [], title = {}, content, sectionClass }) => {
    const classes = useClassNames();

    return (
        <>
            <section className={classes("lr-grid-section", sectionClass)}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row align-items-start">
                                {title && (
                                    <div className="col-lg-6">
                                        <SecTitle
                                            subTitle={title.subTitle}
                                            mainTitle={title.mainTitle}
                                        />
                                    </div>
                                )}

                                {content && (
                                    <div className="col-lg-6">
                                        <ScrollReveal direction="fade-up" delay={0.2}>
                                            <div className="content-text">
                                                {content}
                                            </div>
                                        </ScrollReveal>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="lr-cards-list">
                                {data.map((item, index) => (
                                    <div className="lr-card-wrapper" key={index}>
                                        <ScrollReveal direction="clip-scale-in-downward" delay={0.3 + index * 0.05}>
                                            <div className="lr-card">
                                                <div className="left-side">
                                                    <div className="image-wrapper">
                                                        <Image
                                                            src={`${item.image}`}
                                                            width={1200}
                                                            height={800}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="right-side">
                                                    <h2 className="title-text">{item.title}</h2>

                                                    <div className="description" dangerouslySetInnerHTML={{ __html: item.content }} />
                                                </div>
                                            </div>
                                        </ScrollReveal>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LeftRightImageTextGridSec
