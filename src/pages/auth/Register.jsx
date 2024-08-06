import {useState} from "react";
import AuthHooks from "/src/hooks/auth/AuthHooks";

const Register = () => {
    const {signUpAction, dataHandler, data, gender, setGender} = AuthHooks();
    const [openSelect, setOpenSelect] = useState(false);
    return (
        <>
            <div className={"h-screen bg-[url(/images/login-bg.jpg)] bg-cover bg-center"}>
                <div className="absolute w-full h-full bg-[#0F0F0F] bg-opacity-65 z-10"></div>
                <div className="container h-full">
                    <form onSubmit={(e) => signUpAction(e, data, gender)}
                          className={"h-full flex flex-wrap justify-center items-center text-white"}>
                        <div
                            className="relative w-full lg:w-1/3 flex flex-wrap pt-4 pb-2 px-6 bg-[#0F0F0F] bg-opacity-80 border border-[#262626] rounded-lg z-20">
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