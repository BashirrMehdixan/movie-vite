import {useState, createContext, useContext, useEffect} from "react";
import {MoviesContext} from "/src/context/movies/MoviesContext";

export const FavouriteContext = createContext([]);

const FavouriteProvider = ({children}) => {
    const {movies} = useContext(MoviesContext);
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
        <FavouriteContext.Provider value={{likedMovie, likeMovieAction}}>
            {children}
        </FavouriteContext.Provider>
    )
}

export default FavouriteProvider;