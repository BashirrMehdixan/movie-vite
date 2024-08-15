import {useContext} from "react";
import {deleteDoc, doc, getDoc, setDoc} from "firebase/firestore";
import {toast} from "react-toastify";
import {WatchlistContext} from "/src/context/Context";
import {db, auth} from "/src/app/firebase";

const WatchActionHook = () => {
    const {dispatch} = useContext(WatchlistContext);

    const watchActions = async (item, type) => {
        if (!auth.currentUser) return;

        const docRef = doc(db, "users", auth.currentUser.uid, `watchList`, item.id.toString());
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            await deleteDoc(docRef);
            dispatch({
                type: "TOGGLE_WATCHLIST",
                payload: item
            });
            toast.success(`Removed ${item.title || item.name} from your watchlist`);
        } else {
            await setDoc(docRef, {
                ...item,
                type: type
            });
            dispatch({
                type: "TOGGLE_WATCHLIST",
                payload: {
                    ...item,
                    type: type
                }
            });
            toast.success(`Added ${item.title || item.name} to your watchlist`);
        }
    }

    return {watchActions};
}

export default WatchActionHook;