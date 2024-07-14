import {NavLink} from "react-router-dom";
import {useEffect} from "react";

const Navbar = () => {
    useEffect(() => {
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                header.classList.add('bg-[#0F0F0F]');
            } else {
                header.classList.remove('bg-[#0F0F0F]');
            }
        })
    })
    return (
        <>
            <header
                className={`fixed w-full z-20 bg-gradient-to-b from-current to-transparent transition-all duration-500`}>
                <div className="container">
                    <div className={"flex items-center justify-between py-5"}>
                        <div className={"w-1/6"}>
                            <NavLink to={"/"} className={"block w-48"}>
                                <img src={"./images/logo.png"} className={"w-full"} alt=""/>
                            </NavLink>
                        </div>
                        <div className="w-4/6">
                            <ul className="w-[500px] flex items-center justify-between text-white bg-[#0F0F0F] border-[2px] border-[#1F1F1F] p-3 mx-auto rounded-2xl">
                                <li className={"opacity-50 transition-all duration-500 has-[.active]:opacity-100 has-[.active]:bg-[#1A1A1A] hover:bg-[#1A1A1A] hover:opacity-100 rounded-xl"}>
                                    <NavLink to={"/"} className={"block py-3 px-3 rounded-xl"}>
                                        Home
                                    </NavLink>
                                </li>
                                <li className={"opacity-50 transition-all duration-500 has-[.active]:opacity-100 has-[.active]:bg-[#1A1A1A] hover:bg-[#1A1A1A] hover:opacity-100 rounded-xl"}>
                                    <NavLink to={"movies"} className={"block py-3 px-4 rounded-xl"}>
                                        Movies
                                    </NavLink>
                                </li>
                                <li className={"opacity-50 transition-all duration-500 has-[.active]:opacity-100 has-[.active]:bg-[#1A1A1A] hover:bg-[#1A1A1A] hover:opacity-100 rounded-xl"}>
                                    <NavLink to={"shows"} className={"block py-3 px-4 rounded-xl"}>
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
                        </div>
                        <div className="w-1/6">
                            <ul className="flex items-center justify-end gap-8">
                                <li>
                                    <button>
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M29.75 29.75L22.388 22.388M22.388 22.388C24.3108 20.4653 25.5 17.809 25.5 14.875C25.5 9.00697 20.743 4.25 14.875 4.25C9.00697 4.25 4.25 9.00697 4.25 14.875C4.25 20.743 9.00697 25.5 14.875 25.5C17.809 25.5 20.4653 24.3108 22.388 22.388Z"
                                                stroke="white" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M21.0472 24.1991C23.7312 23.8807 26.3193 23.2497 28.7741 22.3435C26.7386 20.0841 25.4997 17.093 25.4997 13.8125V12.8197C25.4999 12.7965 25.5 12.7732 25.5 12.75C25.5 8.05558 21.6944 4.25 17 4.25C12.3056 4.25 8.5 8.05558 8.5 12.75L8.49972 13.8125C8.49972 17.093 7.2608 20.0841 5.22534 22.3435C7.68032 23.2498 10.2686 23.8808 12.9528 24.1992M21.0472 24.1991C19.72 24.3565 18.3693 24.4375 16.9997 24.4375C15.6303 24.4375 14.2798 24.3565 12.9528 24.1992M21.0472 24.1991C21.1789 24.6091 21.25 25.0462 21.25 25.5C21.25 27.8472 19.3472 29.75 17 29.75C14.6528 29.75 12.75 27.8472 12.75 25.5C12.75 25.0463 12.8211 24.6091 12.9528 24.1992"
                                                stroke="white" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                    </button>
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