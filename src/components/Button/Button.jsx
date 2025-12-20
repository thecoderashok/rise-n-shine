import React, { useEffect, useRef } from 'react'
import "./styles.scss";
import { useClassNames } from '../../hook/useClassNames';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import TransitionLink from '../TransitionLink';

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

    const btnRef = useRef(null);

    useEffect(() => {
        if (!btnRef.current) return;
        const button = btnRef.current;

        const handleClick = (e) => {
            const ripple = document.createElement("span");
            ripple.classList.add("ripple");

            const animationDuration = 800;
            const rect = button.getBoundingClientRect();
            const radius = Math.max(rect.width, rect.height) * 1.8;

            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;

            const rippleX = rect.width / 2 - radius / 2;
            const rippleY = rect.height / 2 - radius / 2;

            ripple.style.width = `${radius}px`;
            ripple.style.height = `${radius}px`;
            ripple.style.left = `${rippleX}px`;
            ripple.style.top = `${rippleY}px`;

            const originX = clickX - rippleX;
            const originY = clickY - rippleY;

            ripple.style.transformOrigin = `${originX}px ${originY}px`;
            ripple.style.setProperty("--animation-duration", `${animationDuration / 1000}s`);

            button.appendChild(ripple);

            setTimeout(() => ripple.remove(), animationDuration);
        };

        button.addEventListener("click", handleClick);
        return () => button.removeEventListener("click", handleClick);
    }, []);

    const BaseButton = link ? (
        <span className={className} role="button" ref={btnRef}>
            <TransitionLink href={link} {...props} />
            <span className="text-label">
                <span data-text={textLabel}>{textLabel}</span>
            </span>
            <span className="icon">
                <i className={iconClass} aria-hidden="true"></i>
            </span>
        </span>
    ) : (
        <button className={className} {...props} ref={btnRef}>
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
