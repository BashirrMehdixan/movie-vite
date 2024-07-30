import {useState, useContext} from "react";
import toast from "react-hot-toast";
import {AuthContext} from "/src/context/auth/AuthContext";
import {login, auth} from "/src/store/firebase";

const Login = () => {
    const {dispatch} = useContext(AuthContext);
    const [data, setData] = useState({});
    const dataHandler = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        })
    }

    const loginAction = async (e) => {
        e.preventDefault();
        try {
            const user = await login(data.email, data.password);
            if (user) {
                dispatch({type: "LOGIN", payload: user});
                toast.success("Welcome back")
                // return
            }
            return user
        } catch (e) {
            toast.error(e.message);
        }
    }
    return (
        <>
            <div className={"h-[calc(80vh-.75rem)]"}>
                <div className="container h-full">
                    <form onSubmit={loginAction}
                          className={"h-full flex flex-wrap justify-center items-center text-white"}>
                        <div
                            className="w-full lg:w-1/3 pt-4 pb-2 px-6 border border-[#262626] rounded-lg">
                            <div className="w-full">
                                <div className="mb-3">
                                    <label htmlFor="email">
                                        <span>Email</span>
                                        <input
                                            type="text"
                                            className={"w-full text-white bg-[#262626] p-3 rounded-md border-0 focus:outline-0 mt-1"}
                                            id={"email"}
                                            onChange={(e) => dataHandler(e)}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className={"mb-3"}>
                                    <label htmlFor="password">
                                        <span>Password</span>
                                        <input
                                            type="password"
                                            id={"password"}
                                            onChange={(e) => dataHandler(e)}
                                            className={"w-full text-white bg-[#262626] p-3 rounded-md border-0 focus:outline-0 mt-1"}/>
                                    </label>
                                </div>
                            </div>
                            <div className="w-full">
                                <button
                                    type="submit"
                                    className={"bg-[#E50000] px-8 py-4 rounded-lg mb-3"}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;