import {createContext, useState, useEffect} from "react";

export const MovieContext = createContext([]);

const MovieProvider = ({children}) => {
    const api_key = '286a82355468525bb9e08f91eac5c6dc';
    const base_url = 'https://api.themoviedb.org/3/';
    const [newMovies, setNewMovies] = useState([]);
    const [movieGenre, setMovieGenre] = useState([]);


    useEffect(() => {
        fetch(`${base_url}movie/now_playing?api_key=${api_key}&page=1`)
            .then(res => res.json())
            .then(data => setNewMovies(data.results))
    }, []);
    fetch(`${base_url}genre/movie/list?api_key=${api_key}`)
        .then(res => res.json())
        .then(data => setMovieGenre(data.genres))

    return (
        <MovieContext.Provider value={{newMovies, movieGenre}}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieProvider;
