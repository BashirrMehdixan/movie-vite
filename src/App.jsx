import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import AOS from "aos";
// import 'aos/dist/aos.css';

// Swiper css
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";

import {RootLayout, RegisterLayout, AuthLayout} from "/src/layouts/Layouts";
import {HomeIndex, MoviesIndex, SeriesIndex, SupportIndex, SubscriptionsIndex, NotFound} from "/src/pages/Pages";
import {
    Register,
    Login,
    Profile,
    EditProfile,
    History,
    Favorites,
    Playlist,
    Watchlist,
    Videos
} from "/src/pages/auth/ProfilePages"

// Detail Pages
import MovieDetail from "/src/pages/movies/MovieDetail";
import SeriesDetail from "/src/pages/series/SeriesDetail";

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
                    path: "series",
                    element: <SeriesIndex/>
                },
                {
                    path: "series/:id",
                    element: <SeriesDetail/>
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
            path: "/user",
            element: <AuthLayout/>,
            children: [
                {
                    path: ":username",
                    element: <Profile/>
                },
                {
                    path: ":username/edit",
                    element: <EditProfile/>
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
                    path: ":username/videos",
                    element: <Videos/>
                },
            ]
        }
    ])
    return (
        <>
            <RouterProvider router={router}/>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </>
    )
}

export default App
