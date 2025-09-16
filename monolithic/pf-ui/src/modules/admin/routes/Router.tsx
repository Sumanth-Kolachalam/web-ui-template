import { Route, Routes } from 'react-router';

const Router = () => {
    return (
        <Routes>
            <Route index element={<>Admin Home Screen</>} />
            <Route path="*" element={<>Not Found</>} />
        </Routes>
    );
};

export default Router;
