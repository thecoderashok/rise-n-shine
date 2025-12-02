import React from "react";
import { useClassNames } from "../../hook/useClassNames";
import ParallaxWrapper from "../../components/Parallax/ParallaxWrapper";
import Image from "../../components/Image";

const VideoTourSec = ({
    customClasses,
    imageSrc = "/images/video-tour-bg.jpg",
    imageAlt = "Video Tour",
    onPlayClick,
}) => {
    const classes = useClassNames();

    const handlePlayClick = () => {
        if (onPlayClick) {
            onPlayClick();
        }
    };

    return (
        <section className={classes("video-tour-sec", customClasses)}>
            <ParallaxWrapper offset={10}>
                <div className="image-wrapper">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={1920}
                        height={1080}
                        priority={true}
                    />
                </div>
            </ParallaxWrapper>
            <div className="inner-sec">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="play-button-wrapper">
                                <button
                                    className="play-button"
                                    onClick={handlePlayClick}
                                    aria-label="Play Video"
                                >
                                    <span className="play-icon">
                                        <i className="fa-solid fa-play" aria-hidden="true"></i>
                                    </span>
                                    <span className="ripple-effect"></span>
                                    <span className="ripple-effect ripple-2"></span>
                                    <span className="ripple-effect ripple-3"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoTourSec;

