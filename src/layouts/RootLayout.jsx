import {useContext, useEffect, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";
import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";
import SubscriptionComponent from "/src/components/SubscriptionComponent";
import LoadingAnimation from "/src/components/LoadingAnimation";
import ScrollToTop from "/src/components/ScrollToTop";
import {MoviesContext, ShowsContext} from "/src/context/Context";

const RootLayout = () => {
    const location = useLocation();
    const {movies, fetchMovies} = useContext(MoviesContext);
    const {shows, fetchShows} = useContext(ShowsContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMovies();
        fetchShows();
    }, []);

    useEffect(() => {
        if (movies.length > 0 && shows.length > 0) {
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, [location.pathname]);
    return (
        <>
            <Navbar/>
            <main>
                {loading ? (
                        <LoadingAnimation/>
                    ) :
                    <Outlet/>
                }
            </main>
            <SubscriptionComponent/>
            <ScrollToTop/>
            <Footer/>
        </>
    )
}

export default RootLayout;