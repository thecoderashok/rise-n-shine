import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import Layout from '../Layout';
// import ErrorPage from '../Shared/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        // errorElement: <ErrorPage />,
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
]);

export default router;
