import React from 'react'
import { useClassNames } from '../../hook/useClassNames'
import TextSplit from '../../components/TextSplit';
import ParallaxWrapper from '../../components/Parallax/ParallaxWrapper';
import Image from '../../components/Image';

const PageBannerSec = ({ customClasses, title, pageTitle, imageSrc }) => {
    const classes = useClassNames();
    return (
        <section className={classes("page-banner-sec", customClasses)}>
            <ParallaxWrapper offset={20}>
                <div className="image-wrapper">
                    <Image
                        src={imageSrc}
                        alt={title}
                        title={title}
                        width={1920}
                        height={1080}
                        priority={true}
                    />
                </div>
            </ParallaxWrapper>
            <div className="inner-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-wrapper">
                            <h1 className="main-title-text">{pageTitle}</h1>

                            <TextSplit reveal={true}>
                                <h2 className="title-text">{title}</h2>
                            </TextSplit>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageBannerSec;