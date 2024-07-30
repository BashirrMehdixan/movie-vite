import {Outlet, useLocation} from "react-router-dom";
import RegisterNavbar from "/src/layouts/RegisterNavbar";
import Footer from "/src/layouts/Footer";

const RegisterLayout = () => {
    const location = useLocation();
    return (
        <>
            <RegisterNavbar/>
            <Outlet/>
            {/*<Footer/>*/}
        </>
    )
}

export default RegisterLayout;