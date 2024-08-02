import {createContext, useContext, useEffect, useReducer} from "react";
import FavoriteReducer from "/src/context/favorite/FavoriteReducer";
import {AuthContext} from "/src/context/Context";
import {collection, onSnapshot} from "firebase/firestore";
import {db, auth} from "/src/store/firebase";

const initialState = {
    favoriteMovies: [],
    favoriteSeries: []
};

export const FavoriteContext = createContext(initialState);

const FavoriteProvider = ({children}) => {
    const {user} = useContext(AuthContext);
    const [state, dispatch] = useReducer(FavoriteReducer, initialState);

    useEffect(() => {
        if (!auth.currentUser) return;

        onSnapshot(
            collection(db, "users", auth.currentUser.uid, "favoriteMovies"),
            (snapshot) => {
                const favMovies = snapshot.docs.map(doc => doc.data());
                dispatch({type: "SET_FAVOURITE_MOVIES", payload: favMovies});
            }
        );

        onSnapshot(
            collection(db, "users", auth.currentUser.uid, "favoriteSeries"),
            (snapshot) => {
                const favSeries = snapshot.docs.map(doc => doc.data());
                dispatch({type: "SET_FAVOURITE_SERIES", payload: favSeries});
            }
        );
    }, [user, state.favoriteMovies, state.favoriteSeries]);

    return (
        <FavoriteContext.Provider
            value={{favoriteMovies: state.favoriteMovies, favoriteSeries: state.favoriteSeries, dispatch}}>
            {children}
        </FavoriteContext.Provider>
    );
}

export default FavoriteProvider;