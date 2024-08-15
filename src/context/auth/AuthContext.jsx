import { createContext, useEffect, useReducer, useState } from "react";
import AuthReducer from "/src/context/auth/AuthReducer";
import { auth, db } from "/src/app/firebase";
import {doc, getDoc, onSnapshot} from "firebase/firestore";

const initialState = {
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || null
};
export const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    const [user, setUser] = useState({});
    useEffect(() => {
        localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    }, [state.currentUser]);

    useEffect(() => {
        if (state.currentUser) {
            const docRef = doc(db, 'users', state.currentUser.uid);
            const fetchData = async () => {
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUser(docSnap.data());
                } else {
                    console.log("No such document!");
                }
            };
            fetchData();
        }
    }, [state.currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;