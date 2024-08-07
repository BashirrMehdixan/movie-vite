import {createContext, useState, useEffect} from "react";
import instance from "/src/api/api";
import axios from "axios";

export const MoviesContext = createContext([]);

const MoviesProvider = ({children}) => {
    // const base_url = import.meta.env.VITE_APP_BASE_API_URL;
    // const api_key = import.meta.env.VITE_APP_API_KEY;
    // const [all, setAll] = useState([]);
    const [movies, setMovies] = useState([]);
    const [newMovies, setNewMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [upComing, setUpcoming] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [movieGenres, setMovieGenres] = useState([]);
    const [popularGenres, setPopularGenres] = useState([]);

    const fetchMovies = async () => {
        try {
            const [moviesRes, popularMoviesRes, upcomingMoviesRes, topRatedMoviesRes, newMoviesRes, genresRes] = await Promise.all([
                instance.get("/discover/movie"),
                instance.get("/movie/popular"),
                instance.get("/movie/upcoming"),
                instance.get("/movie/top_rated"),
                instance.get("/movie/now_playing"),
                instance.get("/genre/movie/list")
            ]);

            setMovies(moviesRes.results);
            setPopularMovies(popularMoviesRes.results);
            setUpcoming(upcomingMoviesRes.results);
            setTopRated(topRatedMoviesRes.results);
            setNewMovies(newMoviesRes.results);
            setMovieGenres(genresRes.genres);
            setPopularGenres(genresRes.genres);
        } catch (error) {
            console.error("Error fetching movie data: ", error);
        }
    }

    // const fetchContent = async (type, sort, page = 1) => {
    //     try {
    //         axios.get(`${base_url}discover/${type}`, {
    //             params: {
    //                 api_key: api_key,
    //                 sort_by: sort,
    //                 page: page
    //             }
    //         }).then(data => setAll(data.data.results));
    //     } catch (error) {
    //         console.error("Error fetching movie data: ", error);
    //     }
    // };

    return (
        <MoviesContext.Provider
            value={{
                fetchMovies,
                movies,
                newMovies,
                popularMovies,
                upComing,
                movieGenres,
                popularGenres,
                topRated
            }}>
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesProvider;