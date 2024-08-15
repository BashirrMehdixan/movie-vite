import {useEffect, createContext, useReducer, useContext, useState} from "react";
import WatchListReducer from "/src/context/watchlist/WatchlistReducer";
import {auth, db} from "/src/app/firebase";
import {AuthContext} from "/src/context/auth/AuthContext";
import {collection, onSnapshot} from "firebase/firestore";
import {toast} from "react-toastify";
import LoadingAnimation from "/src/components/LoadingAnimation";

const initialState = {
    watchlist: [],
};

export const WatchlistContext = createContext(initialState);

const WatchlistProvider = ({children}) => {
    const {user} = useContext(AuthContext);
    const [state, dispatch] = useReducer(WatchListReducer, initialState);

    useEffect(() => {
        if (Object.keys(user).length) {
            onSnapshot(
                collection(db, "users", auth.currentUser.uid, "watchlist"),
                (snapshot) => {
                    const watchlist = snapshot.docs.map(doc => doc.data());
                    dispatch({type: "SET_WATCHLIST", payload: watchlist});
                },
                (error) => {
                    console.error("Error fetching watchlist: ", error);
                }
            );

        }
    }, [user]);


    return (
        <WatchlistContext.Provider value={{watchlist: state.watchlist, dispatch}}>
            {children}
        </WatchlistContext.Provider>
    )
}

export default WatchlistProvider;
