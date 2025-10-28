import React, { cloneElement, useCallback, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { useInView } from '../../hook/useInView';
import { useLoader } from '../../context/Loader/LoaderContext';
import { gsap } from '../../gsapInit';

const ScrollReveal = ({
    children,
    direction = 'fade-in',
    offset = 40,
    delay = 0,
    duration = 1,
    once = true,
    triggerRef = null,
    loadGsap = false,
}) => {

    const internalRef = useRef(null);
    const targetRef = triggerRef || internalRef;
    const isInView = useInView(targetRef, { once });

    const { isMounted } = useLoader();

    const variants = useMemo(() => ({
        'fade-in': { from: { opacity: 0 }, to: { opacity: 1 } },
        'fade-up': { from: { opacity: 0, y: offset, z: 0 }, to: { opacity: 1, y: 0, z: 0 } },
        'fade-down': { from: { opacity: 0, y: -offset, z: 0 }, to: { opacity: 1, y: 0, z: 0 } },
        'fade-left': { from: { opacity: 0, x: -offset, z: 0 }, to: { opacity: 1, x: 0, z: 0 } },
        'fade-right': { from: { opacity: 0, x: offset, z: 0 }, to: { opacity: 1, x: 0, z: 0 } },
        'zoom-in': { from: { opacity: 0, scale: 0.8, z: 0 }, to: { opacity: 1, scale: 1, z: 0 } },
    }), [offset]);

    const variant = variants[direction] || variants['fade-in'];

    useLayoutEffect(() => {
        if (loadGsap && internalRef.current) {
            gsap.set(internalRef.current, variant.from);
        }
    }, [loadGsap, variant]);


    const animationTrigger = useCallback(() => {
        if (!isMounted) return;

        const el = internalRef.current;
        if (!el || !loadGsap) return;

        const cleanup = () => {
            el.style.willChange = "";
        };

        gsap.killTweensOf(el);
        el.style.willChange = "transform, opacity";

        requestAnimationFrame(() => {
            if (isInView) {
                gsap.to(el, {
                    ...variant.to,
                    duration,
                    delay,
                    ease: "power3.out",
                    onComplete: cleanup,
                });
            } else if (!once) {
                gsap.to(el, {
                    ...variant.from,
                    duration: 0.4,
                    delay: 0,
                    ease: "power2.out",
                    onComplete: cleanup,
                });
            }
        });
    }, [isInView, isMounted, loadGsap, once, delay, duration, variant]);

    useEffect(() => {
        const el = internalRef.current;
        if (!el) return;

        if (isMounted) {
            if (isInView) {
                el.classList.add("is-inview");
            } else if (!once) {
                el.classList.remove("is-inview");
            }
        }

        if (loadGsap) {
            gsap.set(el, variant.from);

            if (isMounted) {
                if (isInView) {
                    animationTrigger();
                }
            }

        } else {
            el.setAttribute("data-scroll-reveal", direction);
            el.style.setProperty("--scroll-reveal-offset", `${offset}px`);
            el.style.setProperty("--scroll-reveal-delay", `${delay}s`);
            el.style.setProperty("--scroll-reveal-duration", `${duration}s`);
        }

    }, [
        isInView,
        isMounted,
        animationTrigger,
        loadGsap,
        variant,
        direction,
        offset,
        delay,
        duration,
        once,
    ]);

    if (!children || typeof children !== 'object' || !('type' in children)) {
        console.warn('ScrollReveal expects a valid React element as its child.');
        return null;
    }

    return cloneElement(children, {
        ref: internalRef,
    });
};

export default React.memo(ScrollReveal);


