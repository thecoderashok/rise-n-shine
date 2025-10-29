import React, { useEffect, useRef } from 'react'
import { headerConfig } from './lib/routeConfig';
import { useClassNames } from './hook/useClassNames';
import { Outlet, useLocation } from 'react-router';
import MainHeader from './components/Header/MainHeader';
import Footer from "./components/Footer/Footer"

function Layout() {
    const location = useLocation();
    const pathname = location.pathname;

    const classes = useClassNames();
    const mainRef = useRef();

    const selectedRoutes = headerConfig.nonTransparentRoutes;
    const isHeaderNotTransparent = selectedRoutes.includes(pathname);

    useEffect(() => {
        const header = document.querySelector("header");
        const main = mainRef.current;

        if (!header || !main) return;

        if (isHeaderNotTransparent) {
            main.style.marginTop = `${header.offsetHeight}px`;
        } else {
            main.style.marginTop = "";
        }
    }, [isHeaderNotTransparent, pathname]);


    return (
        <>
            <MainHeader isTransparent={!isHeaderNotTransparent} />
            <main className={classes(isHeaderNotTransparent && "top-space-margin")} ref={mainRef}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;