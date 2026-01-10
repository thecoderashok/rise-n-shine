import React, { useEffect, useState } from "react";
import { matchPath, useLocation } from "react-router";
import PageTransition from "./PageTransition";
import { useLoader } from "../../context/Loader/LoaderContext";
import { pageTransitionConfig } from "../../lib/routeConfig";

const TransitionWrapper = () => {
    const { isFirstLoad } = useLoader();
    const { pathname } = useLocation();

    const [routeMeta, setRouteMeta] = useState({
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

        const timeout = setTimeout(() => {
            if (!matchedPage) {
                setRouteMeta({ title: null, parentTitle: null });
                return;
            }
            if (matchedPage.path === "/") {
                setRouteMeta({
                    title: isFirstLoad.current ? matchedPage.routeTitle : "Back to Home Page",
                    parentTitle: null,
                });
            } else {
                setRouteMeta({
                    title: matchedPage.routeTitle || null,
                    parentTitle: matchedPage.routeSubTitle || null,
                });
            }
        }, 0);

        return () => {
            clearTimeout(timeout);
        }

    }, [pathname, isFirstLoad]);

    return (
        <PageTransition
            title={routeMeta.title}
            parentTitle={routeMeta.parentTitle}
        />
    );
};

export default TransitionWrapper;
