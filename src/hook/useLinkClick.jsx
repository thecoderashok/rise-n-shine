import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function useLinkClick() {
    const [linkClicked, setLinkClicked] = useState(false);
    const { pathname } = useLocation();
    const [routingPathname, setRoutingPathname] = useState(pathname);

    const handleClick = useCallback((e) => {
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) {
            return;
        }
        const link = e.currentTarget;
        if (!link || !link.href) return;
        if (link.target === "_blank") return;
        if (link.href.startsWith("#")) return;

        const currentUrl = window.location.href.split("#")[0];
        const linkUrl = link.href.split("#")[0];
        if (linkUrl === currentUrl) return;

        setLinkClicked(true);

        const href = link.getAttribute("href");
        const newPath = new URL(href, window.location.origin).pathname;

        setRoutingPathname(newPath);
    }, [])

    useEffect(() => {
        const attachListeners = () => {
            const links = document.querySelectorAll("a[data-transition]");
            links.forEach((link) => {
                link.removeEventListener("click", handleClick);
                link.addEventListener("click", handleClick);
            });
        };

        attachListeners();

        const observer = new MutationObserver(attachListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            const links = document.querySelectorAll("a[data-transition]");
            links.forEach((link) => {
                link.removeEventListener("click", handleClick);
            });
        };
    }, [handleClick]);


    const resetLinkClick = useCallback(() => {
        // setRoutingPathname(pathname);
        setLinkClicked(false);
    }, []);

    return { linkClicked, routingPathname, resetLinkClick };
}
