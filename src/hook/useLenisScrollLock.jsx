import { useEffect, useRef, useState } from "react";

const useLenisScrollLock = () => {
    const [locked, setLocked] = useState(false);
    const cleanupRef = useRef(null);

    useEffect(() => {
        if (!locked) {
            cleanupRef.current?.();
            cleanupRef.current = null;
            return;
        }

        if (cleanupRef.current) return;

        const prevent = e => e.preventDefault();

        const preventKeys = e => {
            const keys = [
                "ArrowUp",
                "ArrowDown",
                "ArrowLeft",
                "ArrowRight",
                " ",
                "PageUp",
                "PageDown",
                "Home",
                "End",
            ];

            if (keys.includes(e.key)) {
                e.preventDefault();
            }
        };

        document.body.setAttribute("data-lenis-prevent", "");

        window.addEventListener("wheel", prevent, { passive: false });
        window.addEventListener("touchmove", prevent, { passive: false });
        window.addEventListener("keydown", preventKeys, { passive: false });

        cleanupRef.current = () => {
            document.body.removeAttribute("data-lenis-prevent");
            window.removeEventListener("wheel", prevent);
            window.removeEventListener("touchmove", prevent);
            window.removeEventListener("keydown", preventKeys);
        };

        return () => {
            cleanupRef.current?.();
            cleanupRef.current = null;
        };
    }, [locked]);

    return { setLocked };
};

export default useLenisScrollLock;
