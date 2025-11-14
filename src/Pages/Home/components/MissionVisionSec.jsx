import React, { useEffect, useRef } from 'react'
import SecTitle from '../../../components/SecTitle'
import Image from '../../../components/Image';

const MissionVisionSec = () => {

    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const colItems = containerRef.current.querySelectorAll(".col-item");

        const handleResize = () => {
            colItems.forEach(col => {
                const para = col.querySelector(".para");
                const textWrapper = col.querySelector(".text-wrapper");
                if (!para && !textWrapper) return;

                const paraHeight = para.scrollHeight;
                const fullHeight = textWrapper.scrollHeight;

                textWrapper.style.setProperty("--height", `${paraHeight}px`);
                textWrapper.style.setProperty("--full-height", `${fullHeight}px`);
            });
        };

        handleResize();

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
                        <SecTitle mainTitle={"Mission"} reveal={false} />

                        <div className="para">
                            <p>To empower learners with future-ready skills through industry-focused education that blends academic excellence with hands-on experience.</p>
                            <p>Based in Dubai's global hub, we offer dynamic certification programmes, expert mentorship, and real-world exposure, shaping bold thinkers and agile professionals prepared to lead in a fast-changing world. We don't just teach. We transform potential into performance.</p>
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
                <div className="col-item">
                    <div className="text-wrapper">

                        <SecTitle mainTitle={<>Vision</>} reveal={false} />
                        <div className="para">
                            <p>
                                To be a globally recognised institute that redefines professional education by shaping bold thinkers, agile leaders, and future-ready professionals who rise to shine in every corner of the world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionVisionSec