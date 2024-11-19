import {lazy, Suspense} from "react";
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
// Lazy-loaded pages
const HomeIndex = lazy(() => import("/src/pages/home/HomeIndex"));
const MoviesIndex = lazy(() => import("/src/pages/movies/MoviesIndex"));
const ShowsIndex = lazy(() => import("/src/pages/shows/ShowsIndex"));
const SupportIndex = lazy(() => import("/src/pages/support/SupportIndex"));
const SubscriptionsIndex = lazy(() => import("/src/pages/subscriptions/SubscriptionsIndex"));
const NotFound = lazy(() => import("/src/pages/NotFound"));

const Register = lazy(() => import("/src/pages/auth/Register"));
const Login = lazy(() => import("/src/pages/auth/Login"));
const Profile = lazy(() => import("/src/pages/auth/Profile"));
const History = lazy(() => import("/src/pages/auth/History"));
const Favorites = lazy(() => import("/src/pages/auth/Favorites"));
const Watchlist = lazy(() => import("/src/pages/auth/Watchlist"));

const MovieDetail = lazy(() => import("/src/pages/movies/MovieDetail"));
const ShowsDetail = lazy(() => import("/src/pages/shows/ShowsDetail"));

const LoadingAnimation = lazy(() => import("./components/LoadingAnimation"));

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout/>,
            errorElement: <NotFound/>,
            children: [
                {
                    index: true,
                    element: (
                        <Suspense fallback={<LoadingAnimation/>}>
                            <HomeIndex/>
                        </Suspense>
                    )
                },
                {
                    path: "movies",
                    element: (
                        <Suspense fallback={<LoadingAnimation/>}>
                            <MoviesIndex/>
                        </Suspense>
                    )
                },
                {
                    path: "movies/:id",
                    element: (
                        <Suspense fallback={<LoadingAnimation/>}>
                            <MovieDetail/>
                        </Suspense>
                    )
                },
                {
                    path: "shows",
                    element: (
                        <Suspense fallback={<LoadingAnimation/>}>
                            <ShowsIndex/>
                        </Suspense>
                    )
                },
                {
                    path: "shows/:id",
                    element: (
                        <Suspense fallback={<LoadingAnimation/>}>
                            <ShowsDetail/>
                        </Suspense>
                    )
                }
                ,
                {
                    path: "support",
                    element: (
                        <Suspense fallback={<LoadingAnimation/>}>
                            <SupportIndex/>
                        </Suspense>
                    )
                },
                {
                    path: "subscriptions",
                    element: (
                        <Suspense fallback={<LoadingAnimation/>}>
                            <SubscriptionsIndex/>
                        </Suspense>
                    )
                },
            ],
        },
        {
            path: "/",
            element: (
                <Suspense fallback={<LoadingAnimation/>}>
                    <RegisterLayout/>
                </Suspense>
            ),
            children: [
                {
                    path: "register",
                    element: (
                        <Suspense fallback={<LoadingAnimation/>}>
                            <Register/>
                        </Suspense>
                    )
                },
                {
                    path: "login",
                    element: (
                        <Suspense fallback={<LoadingAnimation/>}>
                            <Login/>
                        </Suspense>
                    )
                }
            ]
        },
        {
            path: "/users",
            element: (
                <Suspense fallback={<LoadingAnimation/>}>
                    <AuthLayout/>
                </Suspense>
            ),
            errorElement: (
                <Suspense fallback={<LoadingAnimation/>}>
                    <NotFound/>
                </Suspense>
            ),
            children: [
                {
                    path: ":username",
                    element: (
                        <Suspense fallback={<LoadingAnimation/>}>
                            <Profile/>
                        </Suspense>
                    )
                },
                {
                    path: ":username/favorites",
                    element:
                        (
                            <Suspense fallback={<LoadingAnimation/>}>
                                <Favorites/>
                            </Suspense>
                        )
                },
                {
                    path: ":username/history",
                    element: (
                        <Suspense fallback={<LoadingAnimation/>}>
                            <History/>
                        </Suspense>
                    )
                },
                {
                    path: ":username/watchlist",
                    element: (
                        <Suspense fallback={<LoadingAnimation/>}>
                            <Watchlist/>
                        </Suspense>
                    )
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
