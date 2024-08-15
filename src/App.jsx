import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {AuthContext} from "/src/context/Context";
import AOS from "aos";
// import 'aos/dist/aos.css';

// Swiper css
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import 'react-toastify/dist/ReactToastify.css';

// Layouts
import {RootLayout, RegisterLayout, AuthLayout} from "/src/layouts/Layouts";
// Pages
import {HomeIndex, MoviesIndex, ShowsIndex, SupportIndex, SubscriptionsIndex, NotFound} from "/src/pages/Pages";
import {
    Register,
    Login,
    Profile,
    History,
    Favorites,
    Watchlist,
} from "/src/pages/auth/AuthPages";

// Detail Pages
import MovieDetail from "/src/pages/movies/MovieDetail";
import ShowsDetail from "/src/pages/shows/ShowsDetail";
import {useContext, useState} from "react";
import LoadingAnimation from "./components/LoadingAnimation.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout/>,
            errorElement: <NotFound/>,
            children: [
                {
                    index: true,
                    element: <HomeIndex/>
                },
                {
                    path: "movies",
                    element: <MoviesIndex/>
                },
                {
                    path: "movies/:id",
                    element: <MovieDetail/>
                },
                {
                    path: "shows",
                    element: <ShowsIndex/>
                },
                {
                    path: "shows/:id",
                    element: <ShowsDetail/>
                }
                ,
                {
                    path: "support",
                    element: <SupportIndex/>
                },
                {
                    path: "subscriptions",
                    element: <SubscriptionsIndex/>
                },
            ],
        },
        {
            path: "/",
            element: <RegisterLayout/>,
            children: [
                {
                    path: "register",
                    element: <Register/>
                },
                {
                    path: "login",
                    element: <Login/>
                }
            ]
        },
        {
            path: "/users",
            element: <AuthLayout/>,
            errorElement: <NotFound/>,
            children: [
                {
                    path: ":username",
                    element: <Profile/>
                },
                {
                    path: ":username/favorites",
                    element: <Favorites/>
                },
                {
                    path: ":username/history",
                    element: <History/>
                },
                {
                    path: ":username/watchlist",
                    element: <Watchlist/>
                },
            ]
        }
    ])
    return (
        <>
            <RouterProvider router={router}/>
            <ToastContainer
                theme="dark"
                autoClose={3000}
                position="top-right"
                pauseOnFocusLoss={false}
            />
        </>
    )
}

export default App
