import {Outlet} from "react-router-dom";
import Navbar from "/src/layouts/Navbar";
import Footer from "/src/layouts/Footer";
import SubscriptionLayout from "/src/layouts/SubscriptionLayout";

const RootLayout = () => {
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <SubscriptionLayout/>
            <Footer/>
        </>
    )
}

export default RootLayout;