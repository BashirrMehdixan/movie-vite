import {useState, useContext} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {doc, updateDoc} from "firebase/firestore";
import {
    updateProfile,
} from "firebase/auth";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {toast} from "react-toastify";
import {db}from "/src/app/firebase";
import supabase, {signUp, signIn, signOut} from "/src/app/supabase";

const AuthHooks = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [currentUser, setCurrentUser] = useState(() => {
        const savedUser = localStorage.getItem('currentUser');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [gender, setGender] = useState(currentUser?.gender ? currentUser?.gender : "Gender");
    const [profilePicture, setProfilePicture] = useState(currentUser?.profile_picture || null);
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
    const signUpAction = async (e, formData, gender) => {
        e.preventDefault();

        if (formData.password === formData.confirmPassword && gender.toLowerCase() !== "gender") {
            try {
                const {user} = await signUp(formData);

                if (Object.keys(user).length) {
                    const uid = user.id;
                    const {data, error} = await supabase
                        .from('users')
                        .insert([
                            {
                                uid,
                                email: formData.email,
                                username: formData.username,
                                gender: gender,
                                birthday: formData.date
                            }
                        ]).select('*');

                    if (error) {
                        console.error("Error inserting user data:", error);
                        toast.error(error.message);
                        return;
                    }
                    navigate(location.state?.from || "/");
                    if (data && data.length > 0) {
                        localStorage.setItem('currentUser', JSON.stringify(data[0]));
                        navigate({
                            pathname: "/"
                        });
                    } else {
                        toast.error("User data not found."); // This might be due to asynchronous behavior
                    }
                }

            } catch (error) {
                toast.error(error.message);
            }
        } else {
            toast.error(formData.password === formData.confirmPassword ? "Passwords do not match" : 'Please, select a gender');
        }
    }

    // Logout action
    const logOutAction = async () => {
        try {
            await signOut();
            setCurrentUser(null);
            toast.success("See you soon");
            location.pathname.includes('users') && navigate({pathname: `/`})

        } catch (e) {
            toast.error(e.message);
        }
    }

    // Login action
    const loginAction = async (e, data) => {
        e.preventDefault();
        try {
            const user = await signIn(data.email, data.password);
            if (Object.keys(user).length) {
                const {data: users} = await supabase.from('users').select('*').eq('uid', user.user.id).single();
                localStorage.setItem('currentUser', JSON.stringify(users));
                setCurrentUser(user);
                navigate(location.state?.from || "/");
                return users;
            }
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
        const storageRef = ref(storage, `profile_pictures/${currentUser.username}/${profilePicture.name}`);

        try {
            const snapshot = await uploadBytes(storageRef, profilePicture);
            const downloadURL = await getDownloadURL(snapshot.ref);
            await updateDoc(doc(db, 'users', currentUser.id), {profile_picture: downloadURL});
            setProfilePicture(downloadURL);
            toast.success("Profile picture updated!");
        } catch (error) {
            toast.error("Error uploading image: " + error.message);
        }
    };


    const updateData = async (e, data) => {
        e.preventDefault();
        try {
            const {data: user} = await supabase
                .from('users')
                .update({
                    firstname: data.firstname,
                    lastname: data.lastname,
                    gender: data.gender,
                    birthday: data.date,
                    username: data.username,
                    email: data.email,
                })
                .eq('uid', currentUser.uid)
                .select('*')
                .single();
            localStorage.setItem('currentUser', JSON.stringify(user));
            if (data.email) {
                toast.success(`Verification email was sent to ${data.email} address`);
            }

            if (profilePicture) {
                await handleSaveProfile();
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
        currentUser,
        gender,
        setGender,
        profilePicture,
        setProfilePicture,
        handleImageChange
    }
}

export default AuthHooks;