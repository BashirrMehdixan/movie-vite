import {useContext} from "react";
import {Link, Outlet} from "react-router-dom";
import {AuthContext} from "/src/context/auth/AuthContext";
import {auth, verifyEmail} from "/src/app/firebase";

const AuthIndex = () => {
    const {user} = useContext(AuthContext);
    return (
        user &&
        <>
            <section className={"mb-11"}>
                <div className={"bg-[#262626]"}>
                    <div className={"container"}>
                        <div className={"flex flex-wrap items-center gap-16 py-11"}>
                            <div className={"flex items-center"}>
                                <div
                                    className={"w-[100px] h-[100px] rounded-full border-4 border-[#0F0F0F] mr-4"}>
                                    <img
                                        src={user.profile_picture ? user.profile_picture : "/images/hugh.jpg"}
                                        alt={user.username}
                                        title={user.username}
                                        className={"object-fill w-full h-full rounded-full"}
                                    />
                                </div>
                                <div className={"text-white font-medium capitalize my-3"}>
                                    <p className={"text-3xl font-bold"}>{user.username}</p>
                                    <p className={"text-xl"}>{user.subscription} plan</p>
                                </div>
                            </div>
                            <Link
                                to={"/subscriptions"}
                                className={"w-full md:w-auto capitalize bg-[#E50000] px-4 py-3 rounded-lg text-white transition ease-linear duration-500 hover:bg-opacity-70"}>
                                {user.subscription === "free" ? "Subscribe" : "Upgrade"} plan
                            </Link>
                        </div>
                        <ul className={"hidden lg:flex items-center justify-between text-white pb-3"}>
                            <li>
                                <ul className={"flex items-center gap-6 has-[.active]:text-[#E50000]"}>
                                    <li className={"transition ease-linear duration-500 hover:text-[#E50000] py-3"}>
                                        <Link to={`${user.username}`}>
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li className={"transition ease-linear duration-500 hover:text-[#E50000] py-3"}>
                                        <Link to={`${user.username}/favorites`}>
                                            Favorites
                                        </Link>
                                    </li>
                                    <li className={"transition ease-linear duration-500 hover:text-[#E50000] py-3"}>
                                        <Link to={`${user.username}/history`}>
                                            History
                                        </Link>
                                    </li>
                                    <li className={"transition ease-linear duration-500 hover:text-[#E50000] py-3"}>
                                        <Link to={`${user.username}/playlist`}>
                                            Playlist
                                        </Link>
                                    </li>
                                    <li className={"transition ease-linear duration-500 hover:text-[#E50000] py-3"}>
                                        <Link to={`${user.username}/watchlist`}>
                                            Watchlist
                                        </Link>
                                    </li>
                                    <li className={"transition ease-linear duration-500 hover:text-[#E50000] py-3"}>
                                        <Link to={`${user.username}/videos`}>
                                            Videos
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <button
                                    onClick={verifyEmail}
                                    className={`bg-[#E50000] transition ease-linear duration-500 hover:bg-opacity-70 px-6 py-3 rounded-lg ${auth.currentUser && auth.currentUser.emailVerified ? 'hidden' : 'block'}`}>
                                    Verify Email
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <Outlet/>
            </section>
        </>
    )
}

export default AuthIndex;