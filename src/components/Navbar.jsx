import {useContext, useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import {
    Notification,
    Search,
    MenuLineHorizontalHalf,
    User,
    Home,
    FilmstripCircle,
    SmartTv, BellNotification, Queue, HeadphonesMicrophone
} from "react-huge-icons/outline";
import {AuthContext} from "/src/context/Context";
import {AuthHooks} from "/src/hooks/Hooks";

import SearchModal from "/src/modals/SearchModal";
import {EffectCube} from "swiper/modules";

const Navbar = () => {
    const {currentUser, user} = useContext(AuthContext);
    const location = useLocation();
    const {logOutAction} = AuthHooks();
    const [openNav, setOpenNav] = useState(false);
    const [activeSearch, setActiveSearch] = useState(false);
    useEffect(() => {
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                header.classList.add('bg-[#0F0F0F]');
            } else {
                header.classList.remove('bg-[#0F0F0F]');
            }
        })
    }, []);

    useEffect(() => {
        setOpenNav(false);
        setActiveSearch(false);

    }, [location.pathname]);
    return (
        <>
            <SearchModal activeModal={activeSearch} closeAction={setActiveSearch}/>
            <header
                className={`${location.pathname.match(/^\/$|movies|shows/) ? 'fixed' : ``} w-full z-20 bg-gradient-to-b from-current to-transparent transition-all duration-500`}>
                <div className="container">
                    <div className={`relative flex items-center justify-between gap-4 py-3`}>
                        <div className={`w-1/6 lg:w-1/6`}>
                            <NavLink to={`/`} className={`block w-36 lg:w-48`}>
                                <img src={`/images/logo.png`} className={`w-full`} alt=""/>
                            </NavLink>
                        </div>
                        <div
                            className={`absolute top-[65px] lg:static w-full lg:w-4/6 transition ease-linear duration-500 origin-top lg:scale-y-100 z-10 ${openNav ? `scale-y-100` : `scale-y-0`}`}>
                            < nav>
                                <ul
                                    className={`w-full lg:w-[max-content] flex flex-col lg:flex-row gap-3 lg:items-center justify-between text-white bg-[#0F0F0F] border-[2px] border-[#1F1F1F] mx-auto rounded-2xl p-3`}>
                                    <li className={`relative lg:hidden opacity-50 transition-all duration-500 has-[.active]:opacity-100 has-[.active]:bg-[#1A1A1A] hover:bg-[#1A1A1A] hover:opacity-100 rounded-xl`}>
                                        {Object.keys(user).length ? (
                                                <>
                                                    <button
                                                        className={`block p-3 rounded-xl`}
                                                    >
                                                        {(user.firstname.length && user.lastname.length) ? user?.firstname + " " + user?.lastname : user.username}
                                                    </button>
                                                    <ul className={`w-full transition duration-300 origin-top scale-y-100`}>
                                                        <li className={`pl-3`}>
                                                            <NavLink to={`/users/${user.username}`}
                                                                     className={`block p-3 rounded-xl`}>
                                                                Dashboard
                                                            </NavLink>
                                                        </li>
                                                        <li className={`pl-3`}>
                                                            <button
                                                                onClick={logOutAction}
                                                                className={`block p-3 rounded-xl`}>
                                                                Log out
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </>
                                            )
                                            : (
                                                <NavLink to={`/login`} className={`block p-3 rounded-xl`}>
                                                    Login
                                                </NavLink>
                                            )
                                        }

                                    </li>
                                    <li className={`opacity-50 transition-all duration-500 has-[.active]:opacity-100 has-[.active]:bg-[#1A1A1A] hover:bg-[#1A1A1A] hover:opacity-100 rounded-xl`}>
                                        <NavLink to={`/`} className={`block p-3 rounded-xl`}>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className={`opacity-50 transition-all duration-500 has-[.active]:opacity-100 has-[.active]:bg-[#1A1A1A] hover:bg-[#1A1A1A] hover:opacity-100 rounded-xl`}>
                                        <NavLink to={`/movies`} className={`block py-3 px-4 rounded-xl`}>
                                            Movies
                                        </NavLink>
                                    </li>
                                    <li className={`opacity-50 transition-all duration-500 has-[.active]:opacity-100 has-[.active]:bg-[#1A1A1A] hover:bg-[#1A1A1A] hover:opacity-100 rounded-xl`}>
                                        <NavLink to={`/shows`} className={`block py-3 px-4 rounded-xl`}>
                                            Shows
                                        </NavLink>
                                    </li>
                                    <li className={`opacity-50 transition-all duration-500 has-[.active]:opacity-100 has-[.active]:bg-[#1A1A1A] hover:bg-[#1A1A1A] hover:opacity-100 rounded-xl`}>
                                        <NavLink to={`/support`} className={`block p-3 rounded-xl`}>
                                            Support
                                        </NavLink>
                                    </li>
                                    <li className={`opacity-50 transition-all duration-500 has-[.active]:opacity-100 has-[.active]:bg-[#1A1A1A] hover:bg-[#1A1A1A] hover:opacity-100 rounded-xl`}>
                                        <NavLink to={`/subscriptions`} className={`block p-3 rounded-xl`}>
                                            Subscriptions
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="lg:block w-5/6 lg:w-1/6">
                            <ul className="flex items-center justify-end text-white gap-2 lg:gap-3">
                                <li className={`block `}>
                                    <button
                                        onClick={() => setActiveSearch(!activeSearch)}
                                        className={`block text-2xl lg:text-3xl transition ease-linear duration-500 hover:text-[#E50000]`}
                                    >
                                        <Search/>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`block text-3xl lg:text-4xl transition ease-linear duration-500 hover:text-[#E50000]`}>
                                        <Notification/>
                                    </button>
                                </li>
                                <li className={`lg:hidden`}>
                                    <button
                                        className="text-white text-4xl"
                                        onClick={() => setOpenNav(!openNav)}>
                                        <MenuLineHorizontalHalf/>
                                    </button>
                                </li>
                                <li className={`relative group hidden lg:block text-white has-[.active]:text-[#E50000]`}>
                                    <button
                                        className={`w-[55px] h-[55px] rounded-full ${currentUser ? `flex` : `hidden`} items-center justify-center border-[3px] border-[#262626] transition ease-linear duration-500 hover:text-[#E50000]`}
                                        onClick={() => setOpenNav(!openNav)}>
                                        {user.profile_picture ?
                                            <img
                                                src={user.profile_picture}
                                                alt={user.username}
                                                className={`w-full h-full rounded-full object-fill`}
                                            /> :
                                            <img
                                                src={`/images/hugh.jpg`}
                                                alt={user.username}
                                                className={`w-full h-full rounded-full object-fill`}
                                            />
                                        }
                                    </button>
                                    <NavLink to={`/login`}
                                             className={`text-xl transition ease-linear duration-500 hover:text-[#E50000] ${currentUser ? `hidden` : ``}`}
                                             onClick={() => setOpenNav(!openNav)}>
                                        Login
                                    </NavLink>
                                    {currentUser && (
                                        <>
                                            <ul
                                                className={`absolute w-[240px] -left-[150px] transition duration-500 origin-top rounded-lg text-white bg-[#262626] -translate-x-[25px] translate-y-[8px] pb-4 z-10 scale-y-0 group-hover:scale-y-100`}>
                                                <li>
                                                    <NavLink
                                                        to={`/users/${user.username}`}
                                                        className={`flex items-center gap-3 font-bold bg-[#0F0F0F] p-3`}
                                                    >
                                                        {
                                                            user.profile_picture ?
                                                                <img src={user.profile_picture}
                                                                     className={`w-[50px] h-[50px] rounded-full`}
                                                                     alt={user.username}/> :
                                                                <img src={`/images/hugh.jpg`}
                                                                     className={`w-[50px] h-[50px] rounded-full`}
                                                                     alt={user.username}/>
                                                        }
                                                        {(user?.firstname && user?.lastname) ?
                                                            <span
                                                                className={`text-white`}>{user?.firstname} {user?.lastname}
                                                        </span> :
                                                            <span
                                                                className={`text-white`}>{user.username}
                                                        </span>
                                                        }
                                                    </NavLink>
                                                </li>
                                                <li className={`text-lg transition ease-linear duration-500 hover:text-[#E50000]`}>
                                                    <NavLink
                                                        to={`/users/${user.username}/favorites`}
                                                        className={`block p-3`}
                                                    >
                                                        Favorites
                                                    </NavLink>
                                                </li>
                                                <li className={`text-lg transition ease-linear duration-500 hover:text-[#E50000]`}>
                                                    <NavLink
                                                        to={`/users/${user.username}/history`}
                                                        className={`block p-3`}
                                                    >
                                                        History
                                                    </NavLink>
                                                </li>
                                                <li className={`text-lg transition ease-linear duration-500 hover:text-[#E50000]`}>
                                                    <NavLink
                                                        to={`/users/${user.username}/watchlist`}
                                                        className={`block p-3`}
                                                    >
                                                        Watchlist
                                                    </NavLink>
                                                </li>
                                                <li className={`text-lg transition ease-linear duration-500 hover:text-[#E50000]`}>
                                                    <button
                                                        onClick={logOutAction}
                                                        className={`block p-3`}
                                                    >
                                                        Logout
                                                    </button>
                                                </li>
                                            </ul>
                                        </>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Navbar;