import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import AOS from "aos";
// import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";

// Layouts
import RootLayout from "/src/layouts/RootLayout";
import RegisterLayout from "/src/layouts/RegisterLayout";

// Pages
import HomeIndex from "/src/pages/home/HomeIndex";
import MoviesIndex from "/src/pages/movies/MoviesIndex";
import MovieDetail from "/src/pages/movies/MovieDetail";
import SeriesIndex from "/src/pages/series/SeriesIndex";
import SeriesDetail from "/src/pages/series/SeriesDetail";
import SupportIndex from "/src/pages/support/SupportIndex";
import SubscriptionsIndex from "/src/pages/subscriptions/SubscriptionsIndex";
import Register from "/src/pages/profile/Register";
import Login from "/src/pages/profile/Login";
import Profile from "/src/pages/profile/Profile";
import NotFound from "/src/pages/NotFound";

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
                {
                    path: "profile",
                    element: <Profile/>
                }
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
