import {Outlet, useLocation} from "react-router-dom";
import RegisterNavbar from "/src/components/RegisterNavbar";
import Footer from "/src/components/Footer";

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