import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import AOS from "aos";
// import 'aos/dist/aos.css';

// Swiper css
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import 'react-toastify/dist/ReactToastify.css';

import {RootLayout, RegisterLayout, AuthLayout} from "/src/layouts/Layouts";
import {HomeIndex, MoviesIndex, ShowsIndex, SupportIndex, SubscriptionsIndex, NotFound} from "/src/pages/Pages";
import {
    Register,
    Login,
    Profile,
    History,
    Favorites,
    Playlist,
    Watchlist,
    Videos
} from "/src/pages/auth/ProfilePages";

// Detail Pages
import MovieDetail from "/src/pages/movies/MovieDetail";
import ShowsDetail from "/src/pages/shows/ShowsDetail";

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
                    path: ":username/playlist",
                    element: <Playlist/>
                },
                {
                    path: ":username/watchlist",
                    element: <Watchlist/>
                },
                {
                    path: ":username/videos",
                    element: <Videos/>
                },
            ]
        }
    ])
    return (
        <>
            <RouterProvider router={router}/>
            <ToastContainer
                theme="dark"
                position="top-right"
            />
        </>
    )
}

export default App
