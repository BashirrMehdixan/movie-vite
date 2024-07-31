import {useContext} from "react";
import {AuthContext} from "/src/context/auth/AuthContext";
import {Link, NavLink} from "react-router-dom";
import SectionTitle from "../../components/SectionTitle.jsx";

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <>
            <div className="container">
                <div className="flex items-center justify-between pt-9 pb-5">
                    <SectionTitle heading={"Account and security"}/>
                    <Link
                        className={"bg-[#E50000] transition ease-linear duration-500 hover:bg-opacity-70 px-6 py-3 rounded-lg text-white"}
                        to={"edit"}>Edit</Link>
                </div>
                <div className={"bg-[#262626] rounded-md py-4"}>
                    <div className={""}>
                        <div className="w-full mb-3 px-5">
                            <div
                                className="flex items-center justify-between text-white py-6 border-b border-opacity-45">
                                <div className={"flex items-center gap-2"}>
                                    <p className={"text-xl font-semibold"}>Firstname: </p>
                                    <p className={"capitalize"}>
                                        {user.firstname}
                                    </p>
                                </div>
                                <button
                                    className={"text-lg font-medium"}
                                >Change</button>
                            </div>
                            <div
                                className="flex items-center justify-between text-white py-6 border-b border-opacity-45">
                                <div className={"flex items-center gap-2"}>
                                    <p className={"text-xl font-semibold"}>Lastname: </p>
                                    <p className={"capitalize"}>
                                        {user.lastname}
                                    </p>
                                </div>
                                <button
                                    className={"text-lg font-medium"}
                                >Change</button>
                            </div>
                            <div
                                className="flex items-center justify-between text-white py-6 border-b border-opacity-45">
                                <div className={"flex items-center gap-2"}>
                                    <p className={"text-xl font-semibold"}>Gender: </p>
                                    <p className={"capitalize"}>
                                        {user.gender}
                                    </p>
                                </div>
                                <button
                                    className={"text-lg font-medium"}
                                >Change</button>
                            </div>
                            <div
                                className="flex items-center justify-between text-white py-6 border-b border-opacity-45">
                                <div className={"flex items-center gap-2"}>
                                    <p className={"text-xl font-semibold"}>Date of birth: </p>
                                    <p className={"capitalize"}>
                                        {user.birthday}
                                    </p>
                                </div>
                                <button
                                    className={"text-lg font-medium"}
                                >Change</button>
                            </div>
                            <div
                                className="flex items-center justify-between text-white py-6 border-b border-opacity-45">
                                <div className={"flex items-center gap-2"}>
                                    <p className={"text-xl font-semibold"}>Username: </p>
                                    <p>
                                        {user.username}
                                    </p>
                                </div>
                                <button
                                    className={"text-lg font-medium"}
                                >Change</button>
                            </div>
                            <div
                                className="flex items-center justify-between text-white py-6 border-b border-opacity-45">
                                <div className={"flex items-center gap-2"}>
                                    <p className={"text-xl font-semibold"}>Email: </p>
                                    <p>
                                        {user.email}
                                    </p>
                                </div>
                                <button
                                    className={"text-lg font-medium"}
                                >Change</button>
                            </div>
                            <div
                                className="flex items-center justify-between text-white py-6 border-b border-opacity-45">
                                <div className={"flex items-center gap-2"}>
                                    <p className={"text-xl font-semibold"}>Password: </p>
                                    <p>
                                        ********
                                    </p>
                                </div>
                                <button
                                    className={"text-lg font-medium"}
                                >Change</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;