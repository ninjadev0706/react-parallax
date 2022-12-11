import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
const Routing = () => (
    <Routes>
        <Route path="/" element={<LandingPage />} />
    </Routes>
);
export default Routing;