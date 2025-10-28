import React, { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../../gsapInit';
import { useResize } from '../../context/Resize/ResizeContext';

const ParallaxWrapper = ({ children, offset = 30 }) => {
    const parallaxRef = useRef(null);
    const wrapperRef = useRef(null);
    const [wrapperHeight, setWrapperHeight] = useState("100%");
    const [diffPercent, setDiffPercent] = useState(0);
    const [finalOffset, setFinalOffset] = useState(offset);
    const { registerResizeCallback } = useResize();

    useEffect(() => {
        const container = parallaxRef.current;
        const wrapper = wrapperRef.current;

        if (!container || !wrapper) return;

        let rafId = null;
        const resizeHandler = () => {
            if (rafId) return;
            if (container) {
                rafId = requestAnimationFrame(() => {
                    const windowHeight = window.visualViewport?.height || window.innerHeight;
                    const containerHeight = container.offsetHeight;

                    const diff = Math.max(0, windowHeight - containerHeight);
                    const diffPercentValue = Math.max((diff / windowHeight) * 100 * 1.2, 6);
                    setDiffPercent(diffPercentValue);

                    const offsetValue = (windowHeight * offset / 100);
                    setFinalOffset(offsetValue);

                    const addHeight = Math.max(diff * offset / 100, (containerHeight * diffPercentValue / 100) / 2);

                    setWrapperHeight(`${containerHeight + addHeight}px`);
                    ScrollTrigger.refresh();
                    rafId = null;
                });
            }
        };

        resizeHandler();
        const unMountResize = registerResizeCallback(resizeHandler);

        const observer = new ResizeObserver(resizeHandler);
        observer.observe(document.body);

        const ctx = gsap.context(() => {
            gsap.fromTo(
                wrapper,
                { y: -finalOffset },
                {
                    y: finalOffset,
                    ease: "none",
                    scrollTrigger: {
                        trigger: container,
                        start: "top bottom",
                        end: `bottom -${diffPercent}%`,
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                }
            );
        }, wrapper);

        return () => {
            if (unMountResize) unMountResize();
            observer.disconnect();
            ctx.revert();
            if (rafId) cancelAnimationFrame(rafId);
        }
    }, [registerResizeCallback, offset, diffPercent, finalOffset]);

    return (
        <div ref={parallaxRef} className="parallax-container" data-height={wrapperHeight}>
            <div className="parallax-wrapper" style={{ height: wrapperHeight }} ref={wrapperRef}>
                {children}
            </div>
        </div>
    );
};

export default ParallaxWrapper;





