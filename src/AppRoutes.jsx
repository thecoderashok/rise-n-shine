import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { useCustomRouter } from './context/CustomRouter/CustomRouterContext';
import PageWrapper from './components/Route/PageWrapper';
import Layout from './Layout';
const Home = lazy(() => import('./Pages/Home/Home'));
const AboutUs = lazy(() => import('./Pages/AboutUs/AboutUs'));
const Academics = lazy(() => import('./Pages/Academics/Academics'));
const Faculties = lazy(() => import('./Pages/Faculties/Faculties'));

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
            path: "/academics",
            component: <Academics />,
        },
        {
            path: "/faculties",
            component: <Faculties />,
        },
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
