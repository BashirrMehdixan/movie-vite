import {useEffect, createContext, useReducer, useContext} from "react";
import WatchListReducer from "/src/context/watchlist/WatchlistReducer";
import {auth, db} from "/src/app/firebase";
import {AuthContext} from "/src/context/auth/AuthContext";
import {collection, onSnapshot} from "firebase/firestore";

const initialState = {
    watchlist: []
};

export const WatchlistContext = createContext(initialState);

const WatchlistProvider = ({children}) => {
    const {user} = useContext(AuthContext);
    const [state, dispatch] = useReducer(WatchListReducer, initialState);
    useEffect(() => {
        if (!Object.keys(user).length) return;
        const unsubscribe = onSnapshot(
            collection(db, "users", auth.currentUser.uid, "watchlist"),
            (snapshot) => {
                const watchlist = snapshot.docs.map(doc => doc.data());
                dispatch({type: "TOGGLE_WATCHLIST", payload: watchlist});
            }
        );
        return () => {
            unsubscribe();
        }
    }, [user])
    return (
        <WatchlistContext.Provider value={{watchlist: state.watchlist, dispatch}}>
            {children}
        </WatchlistContext.Provider>
    )
}

export default WatchlistProvider;