import {useContext, useState} from "react";
import toast from "react-hot-toast";
import {signUp} from "/src/store/firebase";
import {AuthContext} from "/src/context/auth/AuthContext";

const Register = () => {
    const {dispatch} = useContext(AuthContext);
    const [data, setData] = useState({});
    const [gender, setGender] = useState("Gender");
    const [openSelect, setOpenSelect] = useState(false);
    const dataHandler = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        })
    }
    const signUpAction = async (e) => {
        e.preventDefault();
        if (data.password === data.confirmPassword) {
            try {

                const user = await signUp(data.email, data.password);
                if(user) {
                    dispatch({type: "SIGN_UP", payload: user});
                    toast.success(`Hello ${data.username}, Welcome our family`)
                }
            } catch (e) {
                toast.error(e.message);
            }
        } else {
            toast.error("Passwords do not match");
        }
    }
    return (
        <>
            <div className={"h-[calc(80vh-.75rem)]"}>
                <div className="container h-full">
                    <form onSubmit={signUpAction}
                          className={"h-full flex flex-wrap justify-center items-center text-white"}>
                        <div
                            className="w-1/3 h-full flex flex-wrap pt-5 pb-2 px-6 border border-[#262626] rounded-lg">
                            <div className="w-full">
                                <div className="mb-3">
                                    <label htmlFor="username">
                                        <span>Username</span>
                                        <input
                                            type="text"
                                            className={"w-full text-white bg-[#262626] p-3 rounded-md border-0 focus:outline-0 mt-1"}
                                            id={"username"}
                                            onChange={(e) => dataHandler(e)}
                                        />
                                    </label>
                                </div>
                            </div>
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
                                <div className={"mb-3"}>
                                    <label htmlFor="confirmPassword">
                                        <span>Confirm Password</span>
                                        <input
                                            type="password"
                                            id={"confirmPassword"}
                                            onChange={(e) => dataHandler(e)}
                                            className={"w-full text-white bg-[#262626] p-3 rounded-md border-0 focus:outline-0 mt-1"}/>
                                    </label>
                                </div>
                            </div>
                            <div className="w-1/2 pr-3">
                                <div
                                    onClick={() => setOpenSelect(!openSelect)}
                                    className={`relative w-full bg-[#262626] cursor-pointer border-2 border-[#262626] p-3 transition duration-500 focus:border-[#E50000] rounded-md mt-1 mb-3`}>
                                    <span className={"cursor-pointer"}>{gender}</span>
                                    <ul
                                        className={`absolute w-full left-0 top-[50px] bg-[#262626] transition duration-300 origin-top rounded-lg ${!openSelect ? "scale-y-0" : "scale-y-100"}`}>
                                        <li className={"cursor-default p-3 opacity-45"}>
                                            Gender
                                        </li>
                                        <li className={"cursor-pointer p-3"}
                                            onClick={(e) => setGender(e.target.innerText)}>
                                            Male
                                        </li>
                                        <li className={"cursor-pointer p-3"}
                                            onClick={(e) => setGender(e.target.innerText)}>
                                            Female
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <input
                                    type="date"
                                    onChange={(e) => dataHandler(e)}
                                    className={"w-full text-white bg-[#262626] p-3 focus:outline-0 rounded-md mt-1 mb-3"}
                                    id="date"/>
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

export default Register;