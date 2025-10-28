import { useEffect } from "react";

export const usePageSEO = ({ title, metas = [], canonical }) => {
    useEffect(() => {
        if (title) document.title = title;

        if (canonical) {
            let link = document.querySelector('link[rel="canonical"]');
            if (!link) {
                link = document.createElement("link");
                link.setAttribute("rel", "canonical");
                document.head.appendChild(link);
            }
            link.setAttribute("href", canonical);
        }

        const setMetaTag = (attr, key, content) => {
            if (content) {
                let meta = document.querySelector(`meta[${attr}="${key}"]`);

                if (!meta) {
                    meta = document.createElement("meta");
                    meta.setAttribute(attr, key);
                    document.head.appendChild(meta);
                }

                meta.setAttribute("content", content);
            }
        };

        metas.forEach(({ attr, key, content }) => {
            setMetaTag(attr, key, content);
        });
    }, [title, metas, canonical]);
};
