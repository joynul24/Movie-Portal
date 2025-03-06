import { Outlet } from "react-router-dom";
import Footer from "../COMPONENTS/Footer/Footer";
import Navber from "../COMPONENTS/Navber/Navber";

const MainLayout = () => {
    return (
        <div className="bg-[#000000]">
            <Navber></Navber>
            <div className="min-h-[calc(100vh-298px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;