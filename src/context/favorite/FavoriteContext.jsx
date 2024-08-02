import {createContext, useEffect, useReducer} from "react";
import FavoriteReducer from "/src/context/favorite/FavoriteReducer";

const initialState = {
    favoriteMovies: JSON.parse(localStorage.getItem("favoriteMovies")) || [],
    favoriteSeries: JSON.parse(localStorage.getItem("favoriteSeries")) || []
};
export const FavoriteContext = createContext(initialState);

const FavoriteProvider = ({children}) => {
    const [state, dispatch] = useReducer(FavoriteReducer, initialState);

    useEffect(() => {
        localStorage.setItem("favoriteMovies", JSON.stringify(state.favoriteMovies));
    }, [state.favoriteMovies]);

    useEffect(() => {
        localStorage.setItem("favoriteSeries", JSON.stringify(state.favoriteSeries));
    }, [state.favoriteSeries]);

    return (
        <FavoriteContext.Provider
            value={{favoriteMovies: state.favoriteMovies, favoriteSeries: state.favoriteSeries, dispatch}}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteProvider;