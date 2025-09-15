import { Button } from 'primereact/button';

const AccessDeniedPage = () => {
    return (
        <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
            <div className="flex flex-column align-items-center justify-content-center">
                <div>
                    <div className="w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center">
                        <div className="flex justify-content-center align-items-center bg-pink-500 border-circle">
                            <i className="pi pi-fw pi-exclamation-circle text-5xl"></i>
                        </div>
                        <h1 className="text-900 font-bold text-5xl mb-2">Access Denied</h1>
                        <div className="text-600 mb-5">
                            You do not have the necessary permisions.
                        </div>
                        <Button icon="pi pi-arrow-left" label="Go Back" text />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { AccessDeniedPage };
