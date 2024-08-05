import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";
import AuthIndex from "/src/pages/auth/AuthIndex";

const AuthLayout = () => {
    return (
        <>
            <Navbar/>
            <AuthIndex/>
            <Footer/>
        </>
    )
}

export default AuthLayout;