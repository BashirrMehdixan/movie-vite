import {Suspense, lazy, useContext} from "react";
import {ScrollRestoration} from "react-router-dom";
import LoadingAnimation from "/src/components/LoadingAnimation";
import Navbar from "/src/partials/Navbar";
import Footer from "/src/partials/Footer";

const AuthIndex = lazy(() => import("/src/pages/auth/AuthIndex"));

const AuthLayout = () => {

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