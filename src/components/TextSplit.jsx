import React, {
    useEffect,
    useRef,
    useCallback,
    Fragment,
    Children,
    isValidElement,
    cloneElement,
    createElement,
    useMemo,
} from "react";
import { useLoader } from "../context/Loader/LoaderContext";
import { useInView } from "../hook/useInView";

const normalizeChildren = (children) => {
    return Children.toArray(children).map((child) => {
        if (typeof child === "string") return child;
        if (isValidElement(child)) {
            return {
                tag: child.type,
                content: normalizeChildren(child.props.children),
                props: child.props,
            };
        }
        return child;
    });
};

const renderContent = (content) => {
    return content.flatMap((line, i) => {
        const { ...props } = line.props || {};

        if (typeof line === "string") {
            return line
                .split(/\s+/)
                .filter(Boolean)
                .map((word, wi) => (
                    <Fragment key={`${i}-${wi}`}>
                        <span className={`words line`}>
                            <span className="word">
                                {word.split("").map((char, ci) => (
                                    <span key={ci} className="char">
                                        {char}
                                    </span>
                                ))}
                            </span>
                        </span>
                        <span className="whitespace">{" "}</span>
                    </Fragment>
                ));
        }

        if (line.tag === Fragment) {
            return <Fragment key={i}>{renderContent(line.content)}</Fragment>;
        }
        if (line.tag === "br") {
            return <br key={i} />;
        }
        if (line.tag) {
            return createElement(
                line.tag,
                { key: i, ...props },
                renderContent(line.content)
            );
        }

        return null;
    });
};

const TextSplit = ({
    children,
    duration = 1,
    revealDelay = 0,
    revealLetters = false,
    reveal = false,
    once = true,
}) => {
    const elementRef = useRef(null);
    const isInView = useInView(elementRef, { once });
    const { isMounted } = useLoader();

    const trigger = useCallback(() => {
        if (!elementRef.current) return;

        elementRef.current.style.setProperty(
            "--reveal-delay",
            `${revealDelay}ms`
        );
        elementRef.current.style.setProperty("--duration", `${duration}s`);

        const chars = elementRef.current.querySelectorAll(".char");
        const words = elementRef.current.querySelectorAll(".word");

        const totalChars = chars.length;
        const totalWords = words.length;
        const totalDuration = duration * 1000;
        const adjustedCharsDelay = totalChars ? totalDuration / totalChars : 0;
        const adjustedWordsDelay = totalWords ? totalDuration / totalWords : 0;

        chars.forEach((char, i) => {
            const delay = adjustedCharsDelay * (i / 3);
            char.style.setProperty("--delay", `${delay}ms`);
        });

        words.forEach((word, i) => {
            const delay = adjustedWordsDelay * (i / 4);
            word.style.setProperty("--delay", `${delay}ms`);
        });

        const type = revealLetters ? "chars" : "words";

        if (reveal) {
            elementRef.current.setAttribute("data-text-reveal", type);
            if (!isMounted) return;

            if (isInView) {
                elementRef.current.setAttribute("data-revealed", "true");
            } else {
                elementRef.current.setAttribute("data-revealed", "false");
            }
        }
    }, [isInView, reveal, revealDelay, duration, revealLetters, isMounted]);

    useEffect(() => {
        trigger();
    }, [trigger]);

    const finalRender = useMemo(() => {
        if (!children || !children.props || !children.props.children) return null;
        return renderContent(normalizeChildren(children.props.children));
    }, [children]);

    useEffect(() => {
        if (!elementRef.current) return;

        elementRef.current
            .querySelectorAll(".last-line")
            .forEach((el) => el.classList.remove("last-line"));

        const lines = elementRef.current.querySelectorAll(".words.line");
        if (lines.length > 0) {
            lines[lines.length - 1].classList.add("last-line");
        }

    }, [finalRender]);

    if (!isValidElement(children)) {
        console.warn("TextSplit expects a single valid React element as its child.");
        return null;
    }


    return cloneElement(children, {
        ref: elementRef,
        children: finalRender,
    });
};

export default TextSplit;
