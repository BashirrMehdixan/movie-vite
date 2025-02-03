import {createClient} from "@supabase/supabase-js";
import {toast} from "react-toastify";

const supabase = createClient(import.meta.env.VITE_APP_SUPABASE_URL, import.meta.env.VITE_APP_SUPABASE_KEY);

export const signUp = async (formData) => {
    const {data, error} = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password
    })
    if (error) {
        toast.error(error.message);
        return true;
    }
    toast.success(`Your verification email has been sent to ${formData.email}`);
    return data;
}

export const signIn = async (email, password) => {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    if (error) {
        toast.error(error.message);
        return false;
    }
    toast.success(`Welcome back`);
    return data.session;
}

export const signOut = async () => {
    const {error} = await supabase.auth.signOut()
    if (error) {
        toast.error(error.message);
        return true;
    }

    return true

}
export default supabase;