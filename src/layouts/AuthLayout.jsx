import {useState, useEffect, useContext, Suspense} from "react";
import {useLocation} from "react-router-dom";
import {AuthContext} from "/src/context/Context";
import LoadingAnimation from "/src/components/LoadingAnimation";
import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";
import AuthIndex from "/src/pages/auth/AuthIndex";

const AuthLayout = () => {
    const {currentUser} = useContext(AuthContext);
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (currentUser) {
            setLoading(false)
        }
    }, [location.pathname]);

    return (
        <>
            <Navbar/>
            {loading ? (
                <LoadingAnimation/>) : (
                <AuthIndex/>
            )
            }
            <Footer/>
        </>
    )
}

export default AuthLayout;