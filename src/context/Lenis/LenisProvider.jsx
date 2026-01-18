import React, { useCallback, useEffect, useState } from "react";
import { LenisContext } from "./LenisContext";
import { gsap, ScrollTrigger } from "../../gsapInit";
import Lenis from "lenis";

const LenisProvider = ({ children }) => {
    const [lenisInstance, setLenisInstance] = useState(null);

    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: false,
            duration: 1,
            syncTouch: true,
            syncTouchLerp: 0.075,
            touchInertiaExponent: 1,
            touchMultiplier: 1.8,
        });

        const timeout = setTimeout(() => {
            setLenisInstance(lenis);
        }, 10);

        const raf = (time) => {
            lenis.raf(time * 1000);
            ScrollTrigger?.update();
        };

        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        lenis.on("scroll", ScrollTrigger.update);

        return () => {
            clearTimeout(timeout);
            gsap.ticker.remove(raf);
            lenis.destroy();
        };
    }, []);

    const refreshLenis = useCallback(() => {
        if (!lenisInstance) return;

        lenisInstance.resize();
        ScrollTrigger.refresh(true);

        requestAnimationFrame(() => {
            lenisInstance.resize();
        });

        window.dispatchEvent(new Event("resize"));
    }, [lenisInstance]);

    return (
        <LenisContext.Provider value={{ lenis: lenisInstance, refreshLenis }}>
            {children}
        </LenisContext.Provider>
    );
};

export default LenisProvider;