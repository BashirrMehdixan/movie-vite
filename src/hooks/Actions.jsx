import {useContext} from "react";
import {deleteDoc, doc, getDoc, setDoc} from "firebase/firestore";
import {toast} from "react-toastify";
import {db, auth} from "/src/app/firebase";
import {FavoriteContext} from "/src/context/Context";

const Actions = () => {
    const {dispatch} = useContext(FavoriteContext);
    const favAction = async (item, type) => {
        if (!auth.currentUser) return;
        const collectionName = type === ("movies") ? "favoriteMovies" : "favoriteShows";
        const docRef = doc(db, "users", auth.currentUser.uid, collectionName, item.id.toString());
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            await deleteDoc(docRef);
            dispatch({
                type: type === "movies" ? "TOGGLE_FAVORITE_MOVIE" : "TOGGLE_FAVORITE_SHOW",
                payload: item.id
            });
            toast.success(`Removed ${item.title || item.name} from your favorites ${type}`);
        } else {
            await setDoc(docRef, {
                ...item,
                type: type
            });
            dispatch({
                type: type === "movies" ? "TOGGLE_FAVORITE_MOVIE" : "TOGGLE_FAVORITE_SHOW",
                payload: {
                    ...item,
                    type: type
                }
            });
            toast.success(`Added ${item.title || item.name} to your favorite ${type}`);
        }
    }

    return {
        favAction
    }
}
export default Actions