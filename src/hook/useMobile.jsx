import { useEffect, useState } from "react";

export default function useMobile(breakpoint = 991) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

        const timeout = setTimeout(() => {
            setIsMobile(mediaQuery.matches);
        }, 0);

        const handler = (e) => setIsMobile(e.matches);
        mediaQuery.addEventListener("change", handler);

        return () => {
            mediaQuery.removeEventListener("change", handler);
            clearTimeout(timeout);
        };
    }, [breakpoint]);

    return isMobile;
}

