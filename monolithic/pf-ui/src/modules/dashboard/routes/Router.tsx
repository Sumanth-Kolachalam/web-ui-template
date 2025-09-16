import { Route, Routes } from "react-router";
import DashboardHome from "../screens/DashboardHome";
import { NotFoundPage } from "@shared/screens";

const Router = () => {
    return (
        <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default Router;