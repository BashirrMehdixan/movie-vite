import {useContext, useEffect, useState} from "react";
import {Outlet, useLocation, ScrollRestoration} from "react-router-dom";
import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";
import SubscriptionComponent from "/src/components/SubscriptionComponent";
import LoadingAnimation from "/src/components/LoadingAnimation";
import ScrollToTop from "/src/components/ScrollToTop";
import {DataContext} from "/src/context/DataContext";

const RootLayout = () => {
    const location = useLocation();
    const [all, setAll] = useState([]);
    const {fetchData} = useContext(DataContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData('trending', 'all', 'day').then(data => setAll(data));
    }, []);

    useEffect(() => {
        if (all.length) {
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
            <ScrollRestoration/>
            <Footer/>
        </>
    )
}

export default RootLayout;