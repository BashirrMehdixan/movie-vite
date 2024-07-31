import {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import {login, logout, signUp} from "/src/store/firebase";
import {AuthContext} from "/src/context/auth/AuthContext";

const AuthHooks = () => {
    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext);
    const [data, setData] = useState({});
    const [gender, setGender] = useState("Gender");

    const dataHandler = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        })
    }
    const logOutAction = async () => {
        try {
            await logout();
            dispatch({type: "LOGOUT", payload: null});
            toast.success("See you soon");
            navigate({pathname: "/"})
        } catch (e) {
            toast.error(e.message);
        }
    }
    const signUpAction = async (e, data) => {
        e.preventDefault();
        if (data.password === data.confirmPassword) {
            try {
                const user = await signUp(data.email, data.password);
                if (user) {
                    dispatch({type: "SIGN_UP", payload: user});
                    navigate({pathname: "/profile"})
                    toast.success(`Hello ${data.username}, Welcome our family`)
                }
            } catch (e) {
                toast.error(e.message);
            }
        } else {
            toast.error("Passwords do not match");
        }
    }

    const loginAction = async (e, data) => {
        e.preventDefault();
        try {
            const user = await login(data.email, data.password);
            if (user) {
                dispatch({type: "LOGIN", payload: user});
                navigate({pathname: "/profile"})
                toast.success("Welcome back");
            }
            return user
        } catch (e) {
            toast.error(e.message);
        }
    }
    return {logOutAction, signUpAction, loginAction,dataHandler,data, gender, setGender}
}

export default AuthHooks;