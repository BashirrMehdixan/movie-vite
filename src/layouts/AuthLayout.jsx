import {Suspense, lazy, useState, useEffect, useContext} from "react";
import {ScrollRestoration, useLocation} from "react-router-dom";
import {AuthContext, MoviesContext, ShowsContext} from "/src/context/Context";
import LoadingAnimation from "/src/components/LoadingAnimation";
import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";

const AuthIndex = lazy(() => import("/src/pages/auth/AuthIndex"));

const AuthLayout = () => {
    const {user} = useContext(AuthContext);
    const {fetchMovies} = useContext(MoviesContext);
    const {fetchShows} = useContext(ShowsContext);
    const location = useLocation();

    useEffect(() => {
        fetchMovies();
        fetchShows();
    }, [location.pathname]);

    return (
        <>
            <Navbar/>
            <Suspense fallback={<LoadingAnimation/>}>
                <AuthIndex/>
            </Suspense>
            <Footer/>
            <ScrollRestoration />
        </>
    );
};

export default AuthLayout;