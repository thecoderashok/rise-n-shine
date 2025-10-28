import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { useCustomRouter } from './context/CustomRouter/CustomRouterContext';
import PageWrapper from './components/Route/PageWrapper';

const Layout = lazy(() => import('./Layout'));
const Home = lazy(() => import('./pages/Home/index.jsx'));
// const AboutUs = lazy(() => import('./pages/AboutUs'));
// const ServicesOffered = lazy(() => import('./pages/ServicesOffered'));
// const ProjectsExecuted = lazy(() => import('./pages/Projects/ProjectsExecuted'));
// const ProjectDetails = lazy(() => import('./pages/Projects/ProjectDetails'));
// const OurClients = lazy(() => import('./pages/OurClients'));
// const ContactUs = lazy(() => import('./pages/ContactUs'));
// const PageNotFound = lazy(() => import('./pages/PageNotFound'));

const AppRoutes = () => {
    const { customPathname } = useCustomRouter();

    const AllRoutes = [
        {
            path: "/",
            component: <Home />,
        },
        // {
        //     path: "/about-us",
        //     component: <AboutUs />,
        // },
        // {
        //     path: "/our-services",
        //     component: <ServicesOffered />,
        // },
        // {
        //     path: "/our-projects",
        //     component: <ProjectsExecuted />,
        // },
        // {
        //     path: "/our-projects/:slug",
        //     component: <ProjectDetails />,
        // },
        // {
        //     path: "/our-clients",
        //     component: <OurClients />,
        // },
        // {
        //     path: "/contact-us",
        //     component: <ContactUs />,
        // },
        // {
        //     path: "*",
        //     component: <PageNotFound />,
        // },
    ];

    return (
        <div className="main-wrapper">
            <Suspense fallback={<div className="loader"></div>}>
                <Routes location={{ pathname: customPathname }}>
                    <Route element={<Layout />}>
                        {AllRoutes.map((page, index) => (
                            <Route
                                path={page.path}
                                element={
                                    <PageWrapper key={customPathname}>
                                        {page.component}
                                    </PageWrapper>
                                }
                                key={index}
                            />
                        ))}
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default AppRoutes;
