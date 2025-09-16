import { Button } from 'primereact/button';
import { useCallback } from 'react';
import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router';

const wrapperStyle = { borderRadius: '56px', padding: '0.3rem' };
const cardStyle = { borderRadius: '53px' };
const iconContainerStyle = { height: '3.2rem', width: '3.2rem' };

const RouteLoaderError = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    let message = 'Something went wrong.';
    if (isRouteErrorResponse(error)) {
        message = `${error.status} ${error.statusText}`;
    } else if (error instanceof Error) {
        message = error.message;
    }

    const resetErrorBoundary = useCallback(() => {
        // basic "retry" — go back or reload
        void navigate(-1); // navigate back and replace
    }, [navigate]);

    return (
        <div className="surface-ground flex align-items-center justify-content-center h-full w-full">
            <div className="flex flex-column align-items-center justify-content-center h-full w-full">
                <div style={wrapperStyle}>
                    <div
                        className="w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center"
                        style={cardStyle}
                    >
                        <div
                            className="flex justify-content-center align-items-center bg-pink-500 border-circle"
                            style={iconContainerStyle}
                        >
                            <i className="pi pi-fw pi-exclamation-circle text-5xl"></i>
                        </div>
                        <h1 className="text-900 font-bold text-5xl mb-2">Error Occurred</h1>
                        <div className="text-600 mb-5">{message}</div>
                        <Button
                            icon="pi pi-arrow-left"
                            label="Try Again"
                            text
                            onClick={resetErrorBoundary}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { RouteLoaderError };
