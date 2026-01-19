import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { useCustomRouter } from './context/CustomRouter/CustomRouterContext';
import PageWrapper from './components/Route/PageWrapper';
import Layout from './Layout';
const Home = lazy(() => import('./Pages/Home/Home'));
const AboutUs = lazy(() => import('./Pages/AboutUs/AboutUs'));
const Academics = lazy(() => import('./Pages/Academics/Academics'));
const Programmes = lazy(() => import('./Pages/Academics/Programmes'));
const Faculties = lazy(() => import('./Pages/Faculties/Faculties'));
const Admissions = lazy(() => import('./Pages/Admissions/Admissions'));
const ContactUs = lazy(() => import('./Pages/Contact/ContactUs'));
const Campus = lazy(() => import('./Pages/Campus/Campus'));
const StudentsLife = lazy(() => import('./Pages/StudentsLife/StudentsLife'));
const Placement = lazy(() => import('./Pages/Placement/Placement'));
const Research = lazy(() => import('./Pages/Research/Research'));
const NewsEvents = lazy(() => import('./Pages/NewsEvents/NewsEvents'));

const AppRoutes = () => {
    const { customPathname } = useCustomRouter();

    const AllRoutes = [
        {
            path: "/",
            component: <Home />,
        },
        {
            path: "/about-us",
            component: <AboutUs />,
        },
        {
            path: "/programmes",
            component: <Academics />,
        },
        {
            path: "/programmes/:programmeSlug",
            component: <Programmes />,
        },
        {
            path: "/faculties",
            component: <Faculties />,
        },
        {
            path: "/admissions",
            component: <Admissions />,
        },
        {
            path: "/campus",
            component: <Campus />,
        },
        {
            path: "/students-life",
            component: <StudentsLife />,
        },
        {
            path: "/placement",
            component: <Placement />,
        },
        {
            path: "/research",
            component: <Research />,
        },
        {
            path: "/news-events",
            component: <NewsEvents />,
        },
        {
            path: "/contact-us",
            component: <ContactUs />,
        },
    ];

    return (
        <div className="main-wrapper">
            <div className="page-content">
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
        </div>
    );
};

export default AppRoutes;
