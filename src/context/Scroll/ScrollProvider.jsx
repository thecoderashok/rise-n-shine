import { useEffect, useRef, useState } from "react";
import { ScrollContext } from "./ScrollContext";

export default function ScrollProvider({ children }) {
    const [scroll, setScroll] = useState({
        y: 0,
        direction: null,
        delta: 0,
    });

    const callbacks = useRef(new Set());
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    const updateScroll = (newScroll) => {
        setScroll(newScroll);
        callbacks.current.forEach((cb) => cb(newScroll));
    };

    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;

                    if (currentScrollY > lastScrollY.current) {
                        updateScroll({
                            y: currentScrollY,
                            direction: "down",
                            delta: 0,
                        })

                    } else if (currentScrollY < lastScrollY.current) {
                        updateScroll({
                            y: currentScrollY,
                            direction: "up",
                            delta: 0,
                        })
                    }

                    lastScrollY.current = currentScrollY;
                    ticking.current = false;
                });

                ticking.current = true;
            }
        };

        const handleWheel = (event) => {

            if (!ticking.current) {
                requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;

                    if (event.deltaY > 0) {
                        updateScroll({
                            y: currentScrollY,
                            direction: "down",
                            delta: event.deltaY,
                        })
                    } else {
                        updateScroll({
                            y: currentScrollY,
                            direction: "up",
                            delta: event.deltaY,
                        })
                    }

                    ticking.current = false;
                });

                ticking.current = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("wheel", handleWheel, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    const registerScrollCallback = (callback) => {
        callbacks.current.add(callback);
        return () => callbacks.current.delete(callback);
    };

    return (
        <ScrollContext.Provider value={{ scroll, registerScrollCallback }}>
            {children}
        </ScrollContext.Provider>
    );
}
