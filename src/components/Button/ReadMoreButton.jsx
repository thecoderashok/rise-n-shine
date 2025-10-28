import React from 'react'
import "./Styles.css";
import { useClassNames } from '../../hook/useClassNames';
import TransitionLink from '../TransitionLink';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const ReadMoreButton = ({ textLable, link = "#", customClass, revealDelay = 0, revealAnimation = false, direction = "fade-up", ...props }) => {

    const classes = useClassNames();

    const BaseButton = (
        <TransitionLink
            href={link}
            className={classes("read-more-btn", customClass)}
            {...props}
        >
            <span className="text-label">
                <span data-text={textLable}>{textLable}</span>
            </span>
            <span className="icon"></span>
        </TransitionLink>
    )


    if (revealAnimation) {
        return (
            <ScrollReveal loadGsap={true} direction={direction} offset={40} duration={0.8} delay={revealDelay}>
                <div className="btn-wrapper">
                    {BaseButton}
                </div>
            </ScrollReveal>
        );
    }

    return BaseButton;
}

export default ReadMoreButton;