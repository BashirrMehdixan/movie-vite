import {useState, createContext} from "react";
import instance from "/src/api/api";

export const ShowsContext = createContext([]);

const SeriesProvider = ({children}) => {
    const [shows, setShows] = useState([]);
    const [popularShows, setPopularShows] = useState([]);
    const [topRatedShows, setTopRatedShows] = useState([]);
    const [showGenres, setShowsGenres] = useState([]);
    const [popularShowsGenres, setPopularShowsGenres] = useState([]);

    const fetchShows = async () => {
        try {
            const [showsRes, popularShowsRes, topRatedShowsRes, genresRes] = await Promise.all([
                instance.get("/discover/tv"),
                instance.get("/tv/popular"),
                instance.get("/tv/top_rated"),
                instance.get("/genre/tv/list"),
                instance.get("/genre/tv/list")
            ]);

            setShows(showsRes.results);
            setPopularShows(popularShowsRes.results);
            setTopRatedShows(topRatedShowsRes.results);
            setShowsGenres(genresRes.genres);
            setPopularShowsGenres(genresRes.genres);

        } catch (error) {
            console.error("Error fetching movie data: ", error);
        }
    }

    return (
        <ShowsContext.Provider value={{
            fetchShows,
            shows,
            popularShows,
            showGenres,
            popularShowsGenres,
            topRatedShows,
        }}>
            {children}
        </ShowsContext.Provider>
    );
};

export default SeriesProvider;