// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import toast from "react-hot-toast";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9qfDYlUV8YR8xjPAkeb80rScpYI5zAPw",
    authDomain: "movie-27dcf.firebaseapp.com",
    projectId: "movie-27dcf",
    storageBucket: "movie-27dcf.appspot.com",
    messagingSenderId: "990071315004",
    appId: "1:990071315004:web:5187920bf875bb717d0139"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const signUp = async (email, password) => {
    const {user} = await createUserWithEmailAndPassword(auth, email, password);
    return user;
}

const login = async (email, password) => {
    const {user} = await signInWithEmailAndPassword(auth, email, password);
    return user;
}

export {signUp, login}