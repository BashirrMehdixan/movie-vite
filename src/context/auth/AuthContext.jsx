import {createContext, useEffect, useReducer, useState} from "react";
import AuthReducer from "/src/context/auth/AuthReducer";
import {auth, db} from "/src/store/firebase";
import {doc, onSnapshot} from "firebase/firestore";

const initialState = {
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || null
};
export const AuthContext = createContext(initialState);

const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    const [user, setUser] = useState({});
    useEffect(() => {
        localStorage.setItem("currentUser", JSON.stringify(state.currentUser))
    }, [auth.currentUser]);

    useEffect(() => {
        if (state.currentUser) {
            onSnapshot(doc(db, 'users', state.currentUser.uid), (doc) => setUser(doc.data()));
        }
    }, [state.currentUser])
    return (
        <AuthContext.Provider value={{currentUser: state.currentUser, dispatch, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;