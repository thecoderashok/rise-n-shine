import React from "react";
import { Fancybox } from "@fancyapps/ui";
import { useClassNames } from "../../hook/useClassNames";
import ParallaxWrapper from "../../components/Parallax/ParallaxWrapper";
import Image from "../../components/Image";

const getVideoType = (url) => {
    if (!url) return "video";
    if (url.includes("youtube.com") || url.includes("youtu.be")) return "youtube";
    if (url.includes("vimeo.com")) return "vimeo";
    return "video";
};

const VideoTourSec = ({
    customClasses,
    imageSrc = "/images/video-tour-bg.jpg",
    imageAlt = "Video Tour",
    videoSrc = "https://player.vimeo.com/video/136527314",
    videoUrl,
}) => {
    const classes = useClassNames();
    const finalVideoSrc = videoUrl || videoSrc;
    const videoType = getVideoType(finalVideoSrc);

    const handlePlayClick = () => {
        Fancybox.show(
            [
                {
                    src: finalVideoSrc,
                    type: videoType,
                },
            ],
            {
                Toolbar: false,
                closeButton: "top",
                dragToClose: false,
                Video: {
                    autoplay: true,
                    controls: true,
                },
            }
        );
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
                        priority
                    />
                </div>
            </ParallaxWrapper>

            <div className="inner-sec">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="play-button-wrapper">
                                <button
                                    type="button"
                                    className="play-button"
                                    onClick={handlePlayClick}
                                    aria-label="Play Video"
                                >
                                    <span className="play-icon">
                                        <i className="fa-solid fa-play"></i>
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
