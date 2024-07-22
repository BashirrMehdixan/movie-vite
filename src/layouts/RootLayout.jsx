import {Outlet} from "react-router-dom";
import Navbar from "/src/layouts/Navbar";
import Footer from "/src/layouts/Footer";
import SubscriptionComponent from "/src/components/SubscriptionComponent";
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";

const RootLayout = () => {
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <SubscriptionComponent/>
            <Footer/>
        </>
    )
}

export default RootLayout;