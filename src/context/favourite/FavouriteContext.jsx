import {useState, createContext, useContext, useEffect, useReducer} from "react";
import {MoviesContext} from "/src/context/movies/MoviesContext";
import FavouriteReducer from "/src/context/favourite/FavouriteReducer";

const initialState = {
    favouriteMovies: JSON.parse(localStorage.getItem("likedMovies")) || null,
    favouriteSeries: JSON.parse(localStorage.getItem("likedSeries")) || null,
}
export const FavouriteContext = createContext([]);
export const useFavourite = () => useContext(initialState);

const FavouriteProvider = ({children}) => {
    const {movies} = useContext(MoviesContext);
    const [state, dispatch] = useReducer(FavouriteReducer, initialState);
    const [likedMovie, setLikedMovie] = useState(() => {
        const storedLikedMovies = localStorage.getItem("likedMovies");
        return storedLikedMovies ? JSON.parse(storedLikedMovies) : [];
    });
    useEffect(() => {
        localStorage.setItem("likedMovies", JSON.stringify(likedMovie));
    }, [likedMovie]);

    const likeMovieAction = (movieId) => {
        if (likedMovie.includes(movieId)) {
            setLikedMovie(likedMovie.filter(id => id !== movieId));
        } else {
            setLikedMovie([...likedMovie, movieId]);
        }
    };
    return (
        <FavouriteContext.Provider value={{likedMovie, likeMovieAction, favouriteMovies: movies, favouriteSeries: state.favouriteSeries, dispatch}}>
            {children}
        </FavouriteContext.Provider>
    )
}

export default FavouriteProvider;