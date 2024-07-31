import {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {doc, setDoc, Timestamp} from "firebase/firestore";
import {updateProfile} from "firebase/auth";
import toast from "react-hot-toast";
import {db, login, logout, signUp} from "/src/store/firebase";
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

    // Signup Action
    const signUpAction = async (e, data, gender) => {
        e.preventDefault();
        if (data.password === data.confirmPassword && gender !== "Gender") {
            try {
                const user = await signUp(data.email, data.password);
                console.log(user)
                if (user) {
                    dispatch({type: "SIGN_UP", payload: user});
                    await updateProfile(user, {
                        displayName: data.username,
                    })
                    await setDoc(doc(db, "users", user.uid), {
                        id: user.uid.toString(),
                        username: data.username,
                        firstname: "",
                        lastname: "",
                        birthday: data.date,
                        email: data.email,
                        gender: gender,
                        profile_picture: "",
                        subscription: "free",
                        createdAt: Timestamp.fromDate(new Date()),
                    })
                    navigate({pathname: `/user/${data.username}`});
                    toast.success(`Hello ${data.username}, Welcome our family. Your verification email has been sent to ${data.email}`);
                }
            } catch (e) {
                toast.error(e.message);
            }
        } else {
            toast.error(data.password === data.confirmPassword ? "Passwords do not match" : 'Please, select a gender');
        }
    }

    // Logout action
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

    // Login action
    const loginAction = async (e, data) => {
        e.preventDefault();
        try {
            const user = await login(data.email, data.password);
            if (user) {
                dispatch({type: "LOGIN", payload: user});
                navigate({pathname: `/user/${user.displayName}`});
                toast.success("Welcome back");
            }
            return user
        } catch (e) {
            toast.error(e.message);
        }
    }

    return {logOutAction, signUpAction, loginAction, dataHandler, data, gender, setGender}
}

export default AuthHooks;