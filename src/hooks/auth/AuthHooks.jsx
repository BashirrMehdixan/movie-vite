import {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {doc, setDoc, updateDoc, Timestamp} from "firebase/firestore";
import {
    sendEmailVerification,
    updateEmail,
    updateProfile,
} from "firebase/auth";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {toast} from "react-toastify";
import {db, login, logout, signUp, auth} from "/src/app/firebase";
import {AuthContext} from "/src/context/auth/AuthContext";

const AuthHooks = () => {
    const navigate = useNavigate();
    const {dispatch, user} = useContext(AuthContext);
    const [data, setData] = useState({});
    const [gender, setGender] = useState(user.gender ? user.gender : "Gender");
    const [profilePicture, setProfilePicture] = useState(user.profile_picture || null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProfilePicture(file);
    };

    const dataHandler = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        });
    };

    // Signup Action
    const signUpAction = async (e, data, gender) => {
        e.preventDefault();
        if (data.password === data.confirmPassword && gender !== "Gender") {
            try {
                const user = await signUp(data.email, data.password);
                if (user) {
                    dispatch({type: "SIGN_UP", payload: user});
                    await updateProfile(user, {
                        displayName: data.username,
                    });
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
                    });
                    navigate({pathname: `/users/${data.username}`});
                    toast.success(`Hello ${data.username}, Welcome to our family. Your verification email has been sent to ${data.email}`);
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
                navigate({pathname: `/users/${user.displayName}`});
                toast.success("Welcome back");
            }
            return user;
        } catch (e) {
            toast.error(e.message);
        }
    }

    const handleSaveProfile = async () => {
        if (!profilePicture) {
            toast.error("Please select a profile picture to upload.");
            return;
        }

        const storage = getStorage();
        const storageRef = ref(storage, `profile_pictures/${user.username}/${profilePicture.name}`);

        try {
            const snapshot = await uploadBytes(storageRef, profilePicture);
            const downloadURL = await getDownloadURL(snapshot.ref);
            await updateDoc(doc(db, 'users', user.id), {profile_picture: downloadURL});
            setProfilePicture(downloadURL);
            toast.success("Profile picture updated!");
        } catch (error) {
            toast.error("Error uploading image: " + error.message);
        }
    };


    const updateData = async (e, data) => {
        e.preventDefault();
        try {
            await updateDoc(doc(db, 'users', user.id), {
                firstname: data.firstname || user.firstname,
                lastname: data.lastname || user.lastname,
                birthday: data.birthday || user.birthday,
                gender: gender === 'Gender' ? user.gender : gender,
            });

            if (data.email) {
                await updateEmail(auth.currentUser, data.email);
                await sendEmailVerification(auth.currentUser);
                await updateDoc(doc(db, 'users', user.id), {email: data.email});
                toast.success(`Verification email was sent to ${data.email} address`);
            }

            if (profilePicture) {
                await handleSaveProfile();
            }

            if (data.username) {
                await updateProfile(auth.currentUser, {
                    displayName: data.username
                });
                await updateDoc(doc(db, 'users', user.id), {username: data.username});
            }

        } catch (error) {
            toast.error(error.message);
        }
    };
    return {
        dataHandler,
        logOutAction,
        signUpAction,
        loginAction,
        updateData,
        data,
        gender,
        setGender,
        profilePicture,
        setProfilePicture,
        handleImageChange
    }
}

export default AuthHooks;