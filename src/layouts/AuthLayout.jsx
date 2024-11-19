import {Suspense, lazy, useContext} from "react";
import {ScrollRestoration} from "react-router-dom";
import {AuthContext} from "/src/context/Context";
import LoadingAnimation from "/src/components/LoadingAnimation";
import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";

const AuthIndex = lazy(() => import("/src/pages/auth/AuthIndex"));

const AuthLayout = () => {
    const {user} = useContext(AuthContext);

    return (
        <>
            <Navbar/>
            <Suspense fallback={<LoadingAnimation/>}>
                <AuthIndex/>
            </Suspense>
            <Footer/>
            <ScrollRestoration/>
        </>
    );
};

export default AuthLayout;