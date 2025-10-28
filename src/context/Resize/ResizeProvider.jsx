import { useEffect, useRef, useState } from "react";
import { ResizeContext } from "./ResizeContext.jsx";

export default function ResizeProvider({ children }) {
    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });

    const callbacks = useRef(new Set());

    const updateSize = (newSize) => {
        setSize(newSize);
        callbacks.current.forEach((callback) => callback(newSize));
    };

    useEffect(() => {
        let ticking = false;
        const handleResize = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const newSize = {
                        width: window.innerWidth,
                        height: window.innerHeight,
                    };
                    updateSize(newSize);
                    ticking = false;
                });
                ticking = true;
            }
        };

        const newSize = {
            width: window.innerWidth,
            height: window.innerHeight,
        };

        updateSize(newSize);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const registerResizeCallback = (callback) => {
        callbacks.current.add(callback);
        return () => callbacks.current.delete(callback);
    };

    return (
        <ResizeContext.Provider value={{ size, registerResizeCallback }}>
            {children}
        </ResizeContext.Provider>
    );
}
