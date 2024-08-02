import {useContext, useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import {Notification, Search, MenuLineHorizontalHalf, User} from "react-huge-icons/outline";
import {AuthContext} from "/src/context/Context";
import AuthHooks from "/src/hooks/auth/AuthHooks";

import SearchModal from "/src/modals/SearchModal";

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
                className={`relative ${location.pathname.match(/^\/$|movies|series/) ? 'lg:fixed' : ''} w-full z-20 bg-gradient-to-b from-current to-transparent transition-all duration-500`}>
                <div className="container">
                    <div className={"relative flex items-center justify-between py-3"}>
                        <div className={"w-w-1/6"}>
                            <NavLink to={"/"} className={"block w-36 lg:w-48"}>
                                <img src={"/images/logo.png"} className={"w-full"} alt=""/>
                            </NavLink>
                        </div>
                        <div
                            className={`absolute -right-[16px] top-[67px] lg:static lg:w-4/6 scale-x-0 lg:scale-x-100 origin-top-right transition-all duration-500 has-[.opened]:scale-x-100`}>
                            <ul
                                className={`w-[300px] h-[350px] lg:h-auto lg:w-[500px] flex flex-col lg:flex-row lg:items-center justify-between text-white bg-[#0F0F0F] border-[2px] border-[#1F1F1F] p-3 mx-auto lg:rounded-2xl ${openNav ? "opened" : ""}`}>
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
                                    <NavLink to={"/series"} className={"block py-3 px-4 rounded-xl"}>
                                        Series
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
                        </div>
                        <div className="lg:block w-5/6 lg:w-1/6">
                            <ul className="flex items-center justify-end text-white gap-2 lg:gap-3">
                                <li>
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
                                <li className={"block lg:hidden"}>
                                    <button
                                        className="text-white text-4xl"
                                        onClick={() => setOpenNav(!openNav)}>
                                        <MenuLineHorizontalHalf/>
                                    </button>
                                </li>
                                <li className={`relative group block text-white has-[.active]:text-[#E50000]`}>
                                    <NavLink
                                        to={`${location.pathname.includes("user") ? user.username : `/user/${user.username}`}`}
                                        className={`${user.profile_picture ? 'w-[60px] h-[60px] rounded-full flex items-center justify-center border-4 border-[#262626]' : "text-4xl"} transition ease-linear duration-500 hover:text-[#E50000] ${!currentUser ? "hidden" : ""}`}
                                        onClick={() => setOpenNav(!openNav)}>
                                        {user.profile_picture ?
                                            <img
                                                src={user.profile_picture}
                                                alt={user.username}
                                                className={"w-full h-full rounded-full object-fill"}
                                            /> : <User/>}
                                    </NavLink>
                                    <NavLink to={`login`}
                                             className={`text-xl transition ease-linear duration-500 hover:text-[#E50000] ${currentUser ? "hidden" : ""}`}
                                             onClick={() => setOpenNav(!openNav)}>
                                        Login
                                    </NavLink>
                                    {currentUser && (
                                        <>
                                            <ul
                                                className={`absolute w-[max-content] -left-[20px] transition duration-500 origin-top rounded-lg text-white bg-[#262626] p-4 scale-y-0 group-hover:scale-y-100`}>
                                                <li className={`text-lg transition ease-linear duration-500 hover:text-[#E50000] mb-3`}>
                                                    <NavLink
                                                        to={`/user/${user.username}`}

                                                    >
                                                        Dashboard
                                                    </NavLink>
                                                </li>
                                                <li className={`text-lg transition ease-linear duration-500 hover:text-[#E50000]`}>
                                                    <button
                                                        onClick={logOutAction}
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