import {createContext, useContext, useEffect, useReducer} from "react";
import {collection, onSnapshot} from "firebase/firestore";
import FavoriteReducer from "/src/context/favorite/FavoriteReducer";
import {AuthContext} from "/src/context/Context";
import {db, auth} from "/src/app/firebase";

const initialState = {
    favoriteMovies: [],
    favoriteShows: []
};

export const FavoriteContext = createContext(initialState);

const FavoriteProvider = ({children}) => {
    const [state, dispatch] = useReducer(FavoriteReducer, initialState);

    useEffect(() => {
        if (!auth.currentUser) return;

        const unsubscribeMovies = onSnapshot(
            collection(db, "users", auth.currentUser.uid, "favoriteMovies"),
            (snapshot) => {
                const favMovies = snapshot.docs.map(doc => doc.data());
                dispatch({type: "SET_FAVORITE_MOVIES", payload: favMovies});
            }
        );

        const unsubscribeShows = onSnapshot(
            collection(db, "users", auth.currentUser.uid, "favoriteShows"),
            (snapshot) => {
                const favShows = snapshot.docs.map(doc => doc.data());
                dispatch({type: "SET_FAVORITE_SHOWS", payload: favShows});
            }
        );

        return () => {
            unsubscribeMovies();
            unsubscribeShows();
        };
    }, [auth.currentUser, state]);

    return (
        <FavoriteContext.Provider
            value={{favoriteMovies: state.favoriteMovies, favoriteShows: state.favoriteShows, dispatch}}>
            {children}
        </FavoriteContext.Provider>
    );
}

export default FavoriteProvider;