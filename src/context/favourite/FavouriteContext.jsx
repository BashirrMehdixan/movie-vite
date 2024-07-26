import {useState, createContext, useContext, useEffect} from "react";
import {MovieContext} from "/src/context/movies/MovieContext";

export const FavouriteContext = createContext([]);

const FavouriteContextProvider = ({children}) => {
    const {movies} = useContext(MovieContext);
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

export default FavouriteContextProvider;