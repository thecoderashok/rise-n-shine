import React from 'react'
import "./styles.scss";
import { useClassNames } from '../../hook/useClassNames';
import TransitionLink from '../TransitionLink';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const ReadMoreButton = ({ textLabel, link = "#", customClass, revealDelay = 0, revealAnimation = false, direction = "fade-up", ...props }) => {

    const classes = useClassNames();

    const BaseButton = (
        <TransitionLink
            href={link}
            className={classes("read-more-btn", customClass)}
            {...props}
        >
            <span className="text-label">
                <span data-text={textLabel}>{textLabel}</span>
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