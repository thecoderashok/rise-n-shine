import React from "react";
import Image from "../../../components/Image";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import SecTitle from "../../../components/SecTitle";

const data = [
    {
        title: "Global Perspective",
        icon: "/icons/mission.png",
        image: "/images/why-us-1.jpg",
    },
    {
        title: "Industry-Focused Programmes",
        icon: "/icons/vision.png",
        image: "/images/why-us-2.jpg",
    },
    {
        title: "Expert Mentorship",
        icon: "/icons/vision.png",
        image: "/images/why-us-3.jpg",
    },
    {
        title: "Future-Ready Skills",
        icon: "/icons/vision.png",
        image: "/images/why-us-4.jpg",
    },
];

const WhyUsSec = () => {
    return (
        <>
            <section className="home-whyus-sec">
                <div className="top-sec">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 text-center">
                                <SecTitle
                                    mainTitle={<>Why Rise N Shine</>}
                                    desc={
                                        <>
                                            Because we prepare you for tomorrow, not yesterday. <br />{" "}
                                            At Rise N Shine, your education is the launchpad for your
                                            success.
                                        </>
                                    }
                                    revealLetters={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cols-row">
                    {data.map((item, index) => (
                        <div className="col-item" key={index}>
                            <Image src={item.image} alt={""} width={746} height={541} />

                            <div className="inner">
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
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default WhyUsSec;
