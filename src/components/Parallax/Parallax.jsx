import React, { cloneElement, useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/app/gsapInit';

const Parallax = ({
    children,
    speed = 2,
}) => {
    const parallaxRef = useRef(null);

    useEffect(() => {
        const el = parallaxRef.current;
        if (!el) return;

        const distance = 100 * speed;

        const tween = gsap.fromTo(
            el,
            { y: distance },
            {
                y: -distance,
                ease: 'none',
                scrollTrigger: {
                    trigger: el,
                    start: '-50% bottom',
                    end: 'bottom top',
                    scrub: true,
                    // markers: true,
                },
            }
        );

        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
        };
    }, [speed]);


    return cloneElement(children, {
        ref: parallaxRef,
        style: {
            willChange: 'transform',
            ...(children.props.style || {}),
        },
    });
};

export default Parallax;
