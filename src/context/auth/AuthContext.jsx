import {createContext, useEffect, useReducer} from "react";
import AuthReducer from "/src/context/auth/AuthReducer";
import {auth} from "/src/store/firebase";

const initialState = {
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || null
};
export const AuthContext = createContext(initialState);

const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    useEffect(() => {
        localStorage.setItem("currentUser", JSON.stringify(state.currentUser))
    }, [auth.currentUser]);
    return (
        <AuthContext.Provider value={{currentUser: state.currentUser, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;