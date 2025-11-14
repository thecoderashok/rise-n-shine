import React from 'react'
import Image from '../../../components/Image'
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal'
import SecTitle from '../../../components/SecTitle'

const data = [
    {
        title: "Global Perspective",
        icon: "/icons/mission.png",
    },
    {
        title: "Industry-Focused Programmes",
        icon: "/icons/vision.png",
    },
    {
        title: "Expert Mentorship",
        icon: "/icons/vision.png",
    },
    {
        title: "Future-Ready Skills",
        icon: "/icons/vision.png",
    },
];

const WhyUsSec = () => {
    return (
        <>
            <section className='pb-0'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SecTitle
                                mainTitle={<>Why <b className='colored'>Rise N Shine</b></>}
                                revealLetters={true}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-whyus-sec">
                <div className="cols-row">
                    {data.map((item, index) => (
                        <div className="col-item" key={index}>
                            <Image src={`/images/hero-banner.jpg`} alt={""} width={746} height={541} />

                            <div className="icon-wrapper">
                                <div
                                    className="icon"
                                    style={{
                                        maskImage: `url(${item.icon})`,
                                        WebkitMaskImage: `url(${item.icon})`,
                                    }}
                                ></div>
                            </div>

                            <div className="text-content">
                                <h3 className="title-text">{item.title}</h3>
                                {item.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default WhyUsSec