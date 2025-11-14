import React, { useEffect, useRef } from 'react'
import SecTitle from '../../../components/SecTitle'
import Image from '../../../components/Image';
import gsap from 'gsap';

const MissionVisionSec = () => {

    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const colItems = containerRef.current.querySelectorAll(".col-item");

        colItems.forEach(col => {
            const para = col.querySelector(".para");
            if (!para) return;

            para.dataset.fullHeight = para.scrollHeight;

            gsap.set(para, { height: 0 });

            col.addEventListener("mouseenter", () => {
                gsap.to(para, {
                    height: para.dataset.fullHeight,
                    duration: 0.8,
                    ease: "power3.out",
                });
            });

            col.addEventListener("mouseleave", () => {
                gsap.to(para, {
                    height: 0,
                    duration: 0.8,
                    ease: "power3.out",
                });
            });
        });

        const handleResize = () => {
            colItems.forEach(col => {
                const para = col.querySelector(".para");
                if (!para) return;

                para.dataset.fullHeight = para.scrollHeight;

                if (parseFloat(para.style.height) > 0) {
                    gsap.set(para, { height: para.dataset.fullHeight });
                }
            });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    return (
        <section className="mission-and-vision-sec" ref={containerRef}>
            <div className="cols">
                <div className="col-item">
                    <div className="text-wrapper">
                        <SecTitle mainTitle={<>Our <br /> Vision</>} reveal={false} />
                        <div className="para">
                            <p>
                                To be a globally recognised institute that redefines professional education by shaping bold thinkers, agile leaders, and future-ready professionals who rise to shine in every corner of the world.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="center-logo">
                    <Image src={"/images/logo/rise-n-shine-icon.png"} width={400} height={400} alt='logo' />
                </div>
                <div className="video-wrapper">
                    <video
                        src={"/video/video-bg-1.mp4"}
                        controls={false}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="video"
                        loading="eager"
                        preload="metadata"
                    />
                </div>
                {/* <div className="img-wrapper">
                    <Image src={`/images/hero-banner.jpg`} alt={""} width={1920} height={1080} />
                </div> */}
                <div className="col-item">

                    <div className="text-wrapper">
                        <SecTitle mainTitle={"Our Mission"} reveal={false} />

                        <div className="para">
                            <p>To empower learners with future-ready skills through industry-focused education that blends academic excellence with hands-on experience.</p>
                            <p>Based in Dubai's global hub, we offer dynamic certification programmes, expert mentorship, and real-world exposure, shaping bold thinkers and agile professionals prepared to lead in a fast-changing world. We don't just teach. We transform potential into performance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionVisionSec