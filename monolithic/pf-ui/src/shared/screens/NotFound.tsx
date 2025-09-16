const NotFoundPage = () => {
    return (
        <div className="py-8 px-5 sm:px-8 flex flex-column align-items-center justify-content-center h-full w-full">
            <span className="text-blue-500 font-bold text-3xl">404</span>
            <h1 className="text-900 font-bold text-5xl mb-2">Not Found</h1>
            <div className="text-600 mb-5">Requested resource is not available</div>
        </div>
    );
};

export { NotFoundPage };
