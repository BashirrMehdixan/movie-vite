import {Link, useLocation} from "react-router-dom";
import {auth, verifyEmail} from "/src/app/firebase";

const UserNavbar = ({user}) => {
    const location = useLocation();
    return (
        <>
            <ul className={`hidden lg:flex items-center justify-between text-white pb-3`}>
                <li>
                    <ul className={`flex flex-wrap items-center gap-6`}>
                        <li
                            className={`transition ease-linear duration-500 hover:text-[#E50000] py-3 has-[.active]:text-[#E50000]`}>
                            <Link
                                className={`${location.pathname === `/users/${user?.username}` ? 'active' : ''}`}
                                to={`${user?.username}`}>
                                Dashboard
                            </Link>
                        </li>
                        <li
                            className={`transition ease-linear duration-500 hover:text-[#E50000] py-3 has-[.active]:text-[#E50000]`}>
                            <Link
                                className={`${location.pathname.includes(`favorites`) ? `active` : ''}`}
                                to={`${user?.username}/favorites`}>
                                Favorites
                            </Link>
                        </li>
                        <li
                            className={`transition ease-linear duration-500 hover:text-[#E50000] py-3 has-[.active]:text-[#E50000]`}>
                            <Link
                                className={`${location.pathname.includes(`history`) ? `active` : ''}`}
                                to={`${user?.username}/history`}>
                                History
                            </Link>
                        </li>

                        <li
                            className={`transition ease-linear duration-500 hover:text-[#E50000] py-3 has-[.active]:text-[#E50000]`}>
                            <Link
                                className={`${location.pathname.includes(`watchlist`) ? `active` : ''}`}
                                to={`${user?.username}/watchlist`}>
                                Watchlist
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
        </>
    )
}

export default UserNavbar;