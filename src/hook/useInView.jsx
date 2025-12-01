import { useState, useEffect, useRef } from "react";

export const useInView = (
    ref,
    {
        once = false,
        rootMargin = "0px 0px -10% 0px",
        threshold = 0,
        root = null,
    } = {}
) => {
    const [inView, setInView] = useState(false);
    const hasBeenInView = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const screenWidth = window.innerWidth;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.boundingClientRect) return;
                    const currentY = entry.boundingClientRect.top;
                    const currentX = entry.boundingClientRect.left;

                    const isOffScreenHorizontally = currentX < 0 || currentX > screenWidth;
                    const isAboveViewport = currentY < 0;

                    if (entry.isIntersecting) {
                        setInView(true);
                        hasBeenInView.current = true;

                        if (once) {
                            observer.unobserve(entry.target);
                        }
                    } else if (isAboveViewport || isOffScreenHorizontally) {
                        setInView(true);
                    } else {
                        if (!once || !hasBeenInView.current) {
                            setInView(false);
                        }
                    }
                });
            },
            {
                root,
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
            observer.disconnect();
        };
    }, [ref, once, threshold, rootMargin, root]);

    return inView;
};
