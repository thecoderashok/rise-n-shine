import React, { useRef, useEffect, useCallback, useMemo } from "react";
import { useInView } from "../hook/useInView";
import { useLoader } from "../context/Loader/LoaderContext";
import { useClassNames } from "../hook/useClassNames";
import { gsap } from "../gsapInit";

const Counter = ({ count, delay = 0, duration = 2, format, customClass = "", ...props }) => {
    const numberRef = useRef(null);
    const isInView = useInView(numberRef, { once: true });

    const { isMounted } = useLoader();

    const classes = useClassNames()

    const dynamicFormat = useMemo(() => {
        if (format) return format;

        const countStr = count.toString();
        const hasDecimal = countStr.includes(".");
        const decimals = hasDecimal ? countStr.split(".")[1].length : 0;

        const formatter = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 0,
            maximumFractionDigits: decimals,
        });

        return (val) => {
            const rounded = Number(val.toFixed(decimals));
            return formatter.format(rounded);
        };
    }, [count, format]);

    const animateCounter = useCallback(() => {
        const counterObj = { val: 0 };
        gsap.to(
            counterObj,
            {
                val: count,
                delay,
                duration,
                ease: "power1.out",
                onUpdate() {
                    if (numberRef.current) {
                        numberRef.current.textContent = dynamicFormat(counterObj.val);
                    }
                }
            }
        );
    }, [count, delay, duration, dynamicFormat]);

    useEffect(() => {
        if (!isMounted) return;
        if (isInView) {
            let ctx = gsap.context(() => {
                animateCounter();
            });
            return () => ctx.revert();
        }
    }, [isInView, isMounted, animateCounter]);

    return (
        <span ref={numberRef} className={classes("counter", customClass)} {...props} />
    );
};

export default React.memo(Counter);
