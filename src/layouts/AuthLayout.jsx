import Navbar from "/src/layouts/Navbar";
import Footer from "/src/layouts/Footer";
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