import { Outlet } from "react-router-dom";
import Home from "../COMPONENTS/NavPages/Home/Home";
import Footer from "../COMPONENTS/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="bg-[#000000]">
            <Home></Home>
            <div className="min-h-[calc(100vh-298px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;