import { createBrowserRouter } from 'react-router';
// import Login from '@/screens/Login';
// import { Landing, DynamicRemoteLoaderWrapper } from '@/screens/Landing';
// import { landingLoader } from '@/utils/loaders';
import { AccessDeniedPage, NotFoundPage } from '@shared/screens';
// import { Public } from '@/screens/Public';
// import SampleForm from '@/screens/SampleForm';

const Router = createBrowserRouter([
    { path: '/web', element: <>Host home page</> },
    { path: '/web/login', element: <>Login</> },
    // { path: '/web/sample-form', element: <SampleForm /> },
    // {
    //     path: '/web/landing/*',
    //     element: <Landing />,
    //     loader: landingLoader,
    //     shouldRevalidate: ({ currentUrl, nextUrl }) => {
    //         // ensures the loader is only run once for parent component
    //         return !(
    //             currentUrl.pathname.startsWith('/web/landing') &&
    //             nextUrl.pathname.startsWith('/web/landing')
    //         );
    //     },
    //     children: [
    //         { index: true, element: <div>Welcome to the Landing Page</div> },
    //         { path: ':module/*', element: <DynamicRemoteLoaderWrapper /> },
    //     ],
    // },
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
