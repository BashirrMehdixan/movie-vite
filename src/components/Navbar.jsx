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
                className={`${location.pathname.match(/^\/$|movies|shows/) ? 'fixed' : ''} w-full z-20 bg-gradient-to-b from-current to-transparent transition-all duration-500`}>
                <div className="container">
                    <div className={"relative flex items-center justify-between gap-4 py-3"}>
                        <div className={"w-1/6 custom-lg:w-1/3 lg:w-1/6"}>
                            <NavLink to={"/"} className={"block w-36 lg:w-48"}>
                                <img src={"/images/logo.png"} className={"w-full"} alt=""/>
                            </NavLink>
                        </div>
                        <div
                            className={`hidden custom-lg:block custom-lg:w-4/6`}>
                            <nav>
                                <ul
                                    className={`w-[max-content] flex gap-3 items-center justify-between text-white bg-[#0F0F0F] border-[2px] border-[#1F1F1F] p-3 mx-auto rounded-2xl ${openNav ? "opened" : ""}`}>
                                    <li className={"opacity-50 transition-all duration-500 has-[.active]:opacity-100 has-[.active]:bg-[#1A1A1A] hover:bg-[#1A1A1A] hover:opacity-100 rounded-xl"}>
                                        <NavLink to={"/"} className={"block py-3 px-3 rounded-xl"}>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className={"opacity-50 transition-all duration-500 has-[.active]:opacity-100 has-[.active]:bg-[#1A1A1A] hover:bg-[#1A1A1A] hover:opacity-100 rounded-xl"}>
                                        <NavLink to={"/movies"} className={"block py-3 px-4 rounded-xl"}>
                                            Movies
                                        </NavLink>
                                    </li>
                                    <li className={"opacity-50 transition-all duration-500 has-[.active]:opacity-100 has-[.active]:bg-[#1A1A1A] hover:bg-[#1A1A1A] hover:opacity-100 rounded-xl"}>
                                        <NavLink to={"/shows"} className={"block py-3 px-4 rounded-xl"}>
                                            Shows
                                        </NavLink>
                                    </li>
                                    <li className={"opacity-50 transition-all duration-500 has-[.active]:opacity-100 has-[.active]:bg-[#1A1A1A] hover:bg-[#1A1A1A] hover:opacity-100 rounded-xl"}>
                                        <NavLink to={"/support"} className={"block p-3 rounded-xl"}>
                                            Support
                                        </NavLink>
                                    </li>
                                    <li className={"opacity-50 transition-all duration-500 has-[.active]:opacity-100 has-[.active]:bg-[#1A1A1A] hover:bg-[#1A1A1A] hover:opacity-100 rounded-xl"}>
                                        <NavLink to={"/subscriptions"} className={"block p-3 rounded-xl"}>
                                            Subscriptions
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="custom-lg:block w-5/6 custom-lg:w-1/6">
                            <ul className="flex items-center justify-end text-white gap-2 lg:gap-3">
                                <li className={`hidden custom-lg:block `}>
                                    <button
                                        onClick={() => setActiveSearch(!activeSearch)}
                                        className={"block text-2xl lg:text-3xl transition ease-linear duration-500 hover:text-[#E50000]"}
                                    >
                                        <Search/>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={"block text-3xl lg:text-4xl transition ease-linear duration-500 hover:text-[#E50000]"}>
                                        <Notification/>
                                    </button>
                                </li>
                                <li className={"hidden"}>
                                    <button
                                        className="text-white text-4xl"
                                        onClick={() => setOpenNav(!openNav)}>
                                        <MenuLineHorizontalHalf/>
                                    </button>
                                </li>
                                <li className={`relative group block text-white has-[.active]:text-[#E50000]`}>
                                    <button
                                        className={`${user.profile_picture ? 'w-[60px] h-[60px] rounded-full flex items-center justify-center border-4 border-[#262626]' : "text-4xl"} transition ease-linear duration-500 hover:text-[#E50000] ${!currentUser ? "hidden" : ""}`}
                                        onClick={() => setOpenNav(!openNav)}>
                                        {user.profile_picture ?
                                            <img
                                                src={user.profile_picture}
                                                alt={user.username}
                                                className={"w-full h-full rounded-full object-fill"}
                                            /> : <User/>}
                                    </button>
                                    <NavLink to={`/login`}
                                             className={`text-xl transition ease-linear duration-500 hover:text-[#E50000] ${currentUser ? "hidden" : ""}`}
                                             onClick={() => setOpenNav(!openNav)}>
                                        Login
                                    </NavLink>
                                    {currentUser && (
                                        <>
                                            <ul
                                                className={`absolute w-[max-content] -left-[80px] transition duration-500 origin-top rounded-lg text-white bg-[#262626] -translate-x-[25px] translate-y-[8px] pb-4 scale-y-0 group-hover:scale-y-100`}>
                                                <li>
                                                    <NavLink
                                                        to={`/user/${user.username}`}
                                                        className={`flex items-center gap-3 font-bold bg-[#0F0F0F] p-3`}
                                                    >
                                                        <img src={user.profile_picture}
                                                             className={`w-[50px] h-[50px] rounded-full`}
                                                             alt={user.username}/>
                                                        <span
                                                            className={`text-white`}>{user.firstname} {user.lastname}
                                                        </span>
                                                    </NavLink>
                                                </li>
                                                <li className={`text-lg transition ease-linear duration-500 hover:text-[#E50000]`}>
                                                    <NavLink
                                                        to={`/user/${user.username}/favorites`}
                                                        className={"block p-3"}
                                                    >
                                                        Favorites
                                                    </NavLink>
                                                </li>
                                                <li className={`text-lg transition ease-linear duration-500 hover:text-[#E50000]`}>
                                                    <NavLink
                                                        to={`/user/${user.username}/history`}
                                                        className={"block p-3"}
                                                    >
                                                        History
                                                    </NavLink>
                                                </li>
                                                <li className={`text-lg transition ease-linear duration-500 hover:text-[#E50000]`}>
                                                    <NavLink
                                                        to={`/user/${user.username}/playlist`}
                                                        className={"block p-3"}
                                                    >
                                                        Playlist
                                                    </NavLink>
                                                </li>
                                                <li className={`text-lg transition ease-linear duration-500 hover:text-[#E50000]`}>
                                                    <NavLink
                                                        to={`/user/${user.username}/watchlist`}
                                                        className={"block p-3"}
                                                    >
                                                        Watchlist
                                                    </NavLink>
                                                </li>
                                                <li className={`text-lg transition ease-linear duration-500 hover:text-[#E50000]`}>
                                                    <NavLink
                                                        to={`/user/${user.username}/videos`}
                                                        className={"block p-3"}
                                                    >
                                                        Videos
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
                <div
                    className={`w-full block custom-lg:hidden fixed bottom-0 left-0 z-30 text-white bg-[#262626] md:px-4`}>
                    <nav>
                        <ul className={`flex justify-between items-center`}>
                            <li>
                                <NavLink
                                    to={`/`}
                                    className={`flex flex-col items-center gap-1 text-3xl py-3 px-2`}
                                >
                                    <Home/>
                                    {/*<p className={`text-xs`}>*/}
                                    {/*    Home*/}
                                    {/*</p>*/}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/movies`}
                                    className={`flex flex-col items-center gap-1 text-3xl py-3 px-2`}
                                >
                                    <FilmstripCircle/>
                                    {/*<p className={`text-xs`}>Movie</p>*/}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/shows`}
                                    className={`flex flex-col items-center gap-1 text-3xl py-3 px-2`}
                                >
                                    <SmartTv/>
                                    {/*<p className={`text-xs`}>*/}
                                    {/*    Shows*/}
                                    {/*</p>*/}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/support"}
                                    className={`flex flex-col items-center gap-1 text-3xl py-3 px-2`}
                                >
                                    <HeadphonesMicrophone/>
                                    {/*<p className={`text-sm`}>*/}
                                    {/*    Subscriptions*/}
                                    {/*</p>*/}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/subscriptions"}
                                    className={`flex flex-col items-center gap-1 text-3xl py-3 px-2`}
                                >
                                    <BellNotification/>
                                    {/*<p className={`text-sm`}>*/}
                                    {/*    Subscriptions*/}
                                    {/*</p>*/}
                                </NavLink>
                            </li>
                            <li>
                                <button
                                    className={`flex flex-col items-center gap-1 text-3xl py-3 px-2`}
                                    onClick={() => setActiveSearch(!activeSearch)}
                                >
                                    <Search/>
                                    {/*<p className={`text-xs`}>*/}
                                    {/*    Search*/}
                                    {/*</p>*/}
                                </button>
                            </li>
                            {/*<li>*/}
                            {/*    <NavLink*/}
                            {/*        to={`${user.length ? `/user/${user.username}` : "/login"}`}*/}
                            {/*        className={`flex flex-col items-center gap-1 text-3xl py-3 px-2`}*/}
                            {/*    >*/}
                            {/*        <User/>*/}
                            {/*        <p className={`text-xs`}>*/}
                            {/*            {user ? user.username : "Login"}*/}
                            {/*        </p>*/}
                            {/*    </NavLink>*/}
                            {/*</li>*/}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Navbar;