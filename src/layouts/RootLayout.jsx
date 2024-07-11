import {useEffect} from "react";
import {Outlet} from "react-router-dom";
import Navbar from "/src/layouts/Navbar";
import Footer from "/src/layouts/Footer";

const RootLayout = () => {
    useEffect(() => {
        document.body.classList.add('bg-[#1E1E1E]');

    }, []);
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default RootLayout;