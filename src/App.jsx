import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Layouts
import RootLayout from "/src/layouts/RootLayout";

// Pages
import HomeIndex from "/src/pages/home/HomeIndex";
import MoviesIndex from "/src/pages/movies/MoviesIndex";
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
                    path: "movies-and-shows",
                    element: <MoviesIndex/>
                },
                {
                    path: "movies-and-shows/:slug",
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
