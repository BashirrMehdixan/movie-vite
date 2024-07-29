import {Outlet} from "react-router-dom";
import Navbar from "/src/layouts/Navbar";
import Footer from "/src/layouts/Footer";
import SubscriptionComponent from "/src/components/SubscriptionComponent";
import ScrollToTop from "/src/components/ScrollToTop.jsx";

const RootLayout = () => {
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <SubscriptionComponent/>
            <ScrollToTop/>
            <Footer/>
        </>
    )
}

export default RootLayout;