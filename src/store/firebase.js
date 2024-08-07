import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification
} from "firebase/auth";
import {toast} from "react-toastify";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_FIREBASE_APP_ID
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