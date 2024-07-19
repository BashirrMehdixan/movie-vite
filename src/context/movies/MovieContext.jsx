import {createContext, useState, useEffect} from "react";

export const MovieContext = createContext([]);

const MovieProvider = ({children}) => {
    const api_key = '286a82355468525bb9e08f91eac5c6dc';
    const base_url = 'https://api.themoviedb.org/3/';
    const [movies, setMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [newMovies, setNewMovies] = useState([]);
    const [movieGenres, setMovieGenres] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const [popularRes, newRes, genresRes] = await Promise.all([
                    fetch(`${base_url}movie/popular?api_key=${api_key}&page=1`),
                    fetch(`${base_url}movie/now_playing?api_key=${api_key}&page=1`),
                    fetch(`${base_url}genre/movie/list?api_key=${api_key}`)
                ]);

                const popularData = await popularRes.json();
                const newData = await newRes.json();
                const genresData = await genresRes.json();

                setPopularMovies(popularData.results);
                setNewMovies(newData.results);
                setMovieGenres(genresData.genres);

                setMovies([
                    ...popularData.results,
                    ...newData.results
                ]);
            } catch (error) {
                console.error("Error fetching movie data: ", error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <MovieContext.Provider value={{movies, popularMovies, newMovies, movieGenres}}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieProvider;
