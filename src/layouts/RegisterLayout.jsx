import {Outlet, ScrollRestoration, useLocation} from "react-router-dom";
import RegisterNavbar from "/src/components/RegisterNavbar";

const RegisterLayout = () => {
    const location = useLocation();
    return (
        <>
            <RegisterNavbar/>
            <Outlet/>
            <ScrollRestoration />
        </>
    )
}

export default RegisterLayout;