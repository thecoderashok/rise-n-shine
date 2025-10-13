import React from 'react'
import { Outlet } from 'react-router';
import Navbar4 from './components/Navbar/Navbar4';
import Footer from './components/Footer/Footer';

function Layout() {

    return (
        <>
            <Navbar4 />
            {/* <BackToTop /> */}
            <main>
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}

export default Layout;