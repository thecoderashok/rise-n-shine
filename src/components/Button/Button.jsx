import React from 'react'
import "./styles.scss";
import { useClassNames } from '../../hook/useClassNames';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import { Link } from 'react-router';
// import TransitionLink from '../TransitionLink';

const Button = ({
    textLabel,
    link = null,
    customClass,
    iconClass = "fa-solid fa-arrow-right",
    revealDelay = 0,
    direction = "fade-up",
    revealAnimation = false,
    ...props
}) => {
    const classes = useClassNames();

    const className = classes("standard-btn", customClass);

    const BaseButton = link ? (
        <span className={className} role="button">
            <Link href={link} {...props} />
            <span className="text-label">
                <span data-text={textLabel}>{textLabel}</span>
            </span>
            <span className="icon">
                <i className={iconClass} aria-hidden="true"></i>
            </span>
        </span>
    ) : (
        <button className={className} {...props}>
            <span className="text-label">
                <span data-text={textLabel}>{textLabel}</span>
            </span>
            <span className="icon">
                <i className={iconClass} aria-hidden="true"></i>
            </span>
        </button>
    );

    if (revealAnimation) {
        return (
            <ScrollReveal loadGsap={true} direction={direction} offset={40} duration={0.8} delay={revealDelay}>
                {BaseButton}
            </ScrollReveal>
        );
    }

    return BaseButton;
}

export default Button;
