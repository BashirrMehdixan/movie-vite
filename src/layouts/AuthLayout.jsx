import {useState, useEffect, useContext} from "react";
import {useLocation} from "react-router-dom";
import {AuthContext, MoviesContext, ShowsContext} from "/src/context/Context";
import LoadingAnimation from "/src/components/LoadingAnimation";
import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";
import AuthIndex from "/src/pages/auth/AuthIndex";

const AuthLayout = () => {
    const {currentUser} = useContext(AuthContext);
    const {fetchMovies} = useContext(MoviesContext);
    const {fetchShows} = useContext(ShowsContext);
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchMovies();
        fetchShows();
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