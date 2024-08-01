import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification
} from "firebase/auth";
import toast from "react-hot-toast";

const firebaseConfig = {
    apiKey: "AIzaSyB9qfDYlUV8YR8xjPAkeb80rScpYI5zAPw",
    authDomain: "movie-27dcf.firebaseapp.com",
    projectId: "movie-27dcf",
    storageBucket: "movie-27dcf.appspot.com",
    messagingSenderId: "990071315004",
    appId: "1:990071315004:web:5187920bf875bb717d0139"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

const signUp = async (email, password) => {
    const {user} = await createUserWithEmailAndPassword(auth, email, password);
    sendEmailVerification(auth.currentUser);
    return user;
};

const login = async (email, password) => {
    const {user} = await signInWithEmailAndPassword(auth, email, password);
    return user;
};

const logout = async () => {
    await signOut(auth);
    return true
};

const verifyEmail = async () => {
    await sendEmailVerification(auth.currentUser);
    toast.success(`Verification email has been sent to ${auth.currentUser.email}`);
}

export {signUp, login, logout, verifyEmail, auth, app, db};