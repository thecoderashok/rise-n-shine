import React, { useEffect, useRef } from "react";
import { matchPath, useLocation } from "react-router";
import PageTransition from "./PageTransition";
import { useLoader } from "../../context/Loader/LoaderContext";
import { pageTransitionConfig } from "../../lib/routeConfig";

const TransitionWrapper = () => {
    const { isFirstLoad } = useLoader();
    // Get React Router Pathname instead from useLinkClick (that is only for Next.JS)
    const { pathname } = useLocation();
    const pageRoutMeta = useRef({
        title: null,
        parentTitle: null,
    });

    useEffect(() => {
        const matchedPage = pageTransitionConfig.find((page) =>
            matchPath(
                {
                    path: page.path,
                    end: true,
                },
                pathname
            )
        );

        // const matchProjectDetailsPage = matchPath(
        //     {
        //         path: "/our-projects/:slug",
        //         end: true,
        //     },
        //     pathname
        // );

        if (matchedPage) {
            if (matchedPage.path === "/") {
                pageRoutMeta.current.title = isFirstLoad.current
                    ? matchedPage.routeTitle
                    : null;
                pageRoutMeta.current.parentTitle = null;
            } else {
                pageRoutMeta.current.title = matchedPage.routeTitle || null;
                pageRoutMeta.current.parentTitle = matchedPage.routeSubTitle || null;
            }
        }
    }, [pathname, isFirstLoad]);

    return (
        <>
            <PageTransition
                title={pageRoutMeta?.current.title}
                parentTitle={pageRoutMeta?.current.parentTitle}
            />
        </>
    );
};

export default TransitionWrapper;
