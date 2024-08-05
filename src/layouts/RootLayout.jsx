import {useContext, useEffect, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";
import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";
import SubscriptionComponent from "/src/components/SubscriptionComponent";
import LoadingAnimation from "/src/components/LoadingAnimation";
import ScrollToTop from "/src/components/ScrollToTop";
import {MoviesContext, SeriesContext} from "/src/context/Context";

const RootLayout = () => {
    const location = useLocation();
    const {movies} = useContext(MoviesContext);
    const {series} = useContext(SeriesContext);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (movies.length > 0 && series.length > 0) {
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, [location]);
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