import { createBrowserRouter } from 'react-router';
import { ErrorPage, Landing, Login } from '@shared/screens';
// import { Landing, DynamicRemoteLoaderWrapper } from '@/screens/Landing';
import { landingLoader } from '@shared/utils';
import { AccessDeniedPage, NotFoundPage } from '@shared/screens';
import { RouteLoaderError } from '@shared/screens/RouteLoaderError';
// import { Public } from '@/screens/Public';
// import SampleForm from '@/screens/SampleForm';

const Router = createBrowserRouter([
    { path: '/web', element: <>Host home page</> },
    { path: '/web/login', element: <Login /> },
    // { path: '/web/sample-form', element: <SampleForm /> },
    {
        path: '/web/landing/*',
        element: <Landing />,
        loader: landingLoader,
        errorElement: <RouteLoaderError />
    },
    // {
    //     path: '/web/public/*',
    //     element: <Public />,
    //     children: [
    //         { index: true, element: <div>Welcome to the Public Page</div> },
    //         { path: ':module/*', element: <DynamicRemoteLoaderWrapper /> },
    //     ],
    // },
    { path: '/web/accessdenied', element: <AccessDeniedPage /> },
    { path: '/web/*', element: <NotFoundPage /> },
]);

export { Router };
