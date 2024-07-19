import {useEffect} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AOS from "aos";
// import 'aos/dist/aos.css';
// Layouts
import RootLayout from "/src/layouts/RootLayout";

// Pages
import HomeIndex from "/src/pages/home/HomeIndex";
import MoviesIndex from "/src/pages/movies/MoviesIndex";
import ShowsIndex from "/src/pages/shows/ShowsIndex";
import MovieDetail from "/src/pages/movies/MovieDetail";
import SupportIndex from "/src/pages/support/SupportIndex";
import SubscriptionsIndex from "/src/pages/subscriptions/SubscriptionsIndex";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout/>,
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
                    path: "shows",
                    element: <ShowsIndex/>
                },
                {
                    path: "movies/:slug",
                    element: <MovieDetail/>
                },
                {
                    path: "support",
                    element: <SupportIndex/>
                },
                {
                    path: "subscriptions",
                    element: <SubscriptionsIndex/>
                }
            ]
        }
    ])
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
