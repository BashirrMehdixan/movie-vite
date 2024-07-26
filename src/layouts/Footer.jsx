import {Link} from "react-router-dom";
import {FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="bg-[#0F0F0F]">
                    <div className="container">
                        <div className="flex flex-wrap justify-between text-white py-16 border-b border-[#262626]">
                            <div className="w-full md:w-1/2 lg:w-1/6 mb-6 lg:mb-0">
                                <h3 className="text-xl font-medium mb-8">
                                    Home
                                </h3>
                                <ul>
                                    <li className={"mb-3"}>
                                        <Link
                                            to={"/#categories"}
                                            className={"transition-all duration-300 text-lg font-normal opacity-45 hover:opacity-100"}>
                                            Categories
                                        </Link>
                                    </li>
                                    <li className={"mb-3"}>
                                        <Link
                                            to={"/#devices"}
                                            className={"transition-all duration-300 text-lg font-normal opacity-45 hover:opacity-100"}>
                                            Devices
                                        </Link>
                                    </li>
                                    <li className={"mb-3"}>
                                        <Link
                                            to={"/#pricing"}
                                            className={"transition-all duration-300 text-lg font-normal opacity-45 hover:opacity-100"}>
                                            Pricing
                                        </Link>
                                    </li>
                                    <li className={"mb-3"}>
                                        <Link
                                            to={"/#faq"}
                                            className={"transition-all duration-300 text-lg font-normal opacity-45 hover:opacity-100"}>
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/6 mb-6 lg:mb-0">
                                <h3 className="text-xl font-medium mb-8">
                                    Movies
                                </h3>
                                <ul>
                                    <li className={"mb-3"}>
                                        <Link
                                            to={"/movies#genres"}
                                            className={"transition-all duration-300 text-lg font-normal opacity-45 hover:opacity-100"}>
                                            Genres
                                        </Link>
                                    </li>
                                    <li className={"mb-3"}>
                                        <Link
                                            to={"/movies#trending"}
                                            className={"transition-all duration-300 text-lg font-normal opacity-45 hover:opacity-100"}>
                                            Trending
                                        </Link>
                                    </li>
                                    <li className={"mb-3"}>
                                        <Link
                                            to={"/movies#newReleases"}
                                            className={"transition-all duration-300 text-lg font-normal opacity-45 hover:opacity-100"}>
                                            New releases
                                        </Link>
                                    </li>
                                    <li className={"mb-3"}>
                                        <Link
                                            to={"/movies#popular"}
                                            className={"transition-all duration-300 text-lg font-normal opacity-45 hover:opacity-100"}>
                                            Popular
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/6 mb-6 lg:mb-0">
                                <h3 className="text-xl font-medium mb-8">
                                    Shows
                                </h3>
                                <ul>
                                    <li className={"mb-3"}>
                                        <Link
                                            to={"/shows#genres"}
                                            className={"transition-all duration-300 text-lg font-normal opacity-45 hover:opacity-100"}>
                                            Genres
                                        </Link>
                                    </li>
                                    <li className={"mb-3"}>
                                        <Link
                                            to={"/shows#trending"}
                                            className={"transition-all duration-300 text-lg font-normal opacity-45 hover:opacity-100"}>
                                            Trending
                                        </Link>
                                    </li>
                                    <li className={"mb-3"}>
                                        <Link
                                            to={"/shows#newReleases"}
                                            className={"transition-all duration-300 text-lg font-normal opacity-45 hover:opacity-100"}>
                                            New releases
                                        </Link>
                                    </li>
                                    <li className={"mb-3"}>
                                        <Link
                                            to={"/shows#popular"}
                                            className={"transition-all duration-300 text-lg font-normal opacity-45 hover:opacity-100"}>
                                            Popular
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/6 mb-6 lg:mb-0">
                                <h3 className="text-xl font-medium mb-8">
                                    Support
                                </h3>
                                <ul>
                                    <li className={"mb-3"}>
                                        <Link
                                            to={"/support"}
                                            className={"transition-all duration-300 text-lg font-normal opacity-45 hover:opacity-100"}>
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/6 mb-6 lg:mb-0">
                                <h3 className="text-xl font-medium mb-8">
                                    Subscription
                                </h3>
                                <ul>
                                    <li className={"mb-3"}>
                                        <Link
                                            to={"/subscription#plans"}
                                            className={"transition-all duration-300 text-lg font-normal opacity-45 hover:opacity-100"}>
                                            Plans
                                        </Link>
                                    </li>
                                    <li className={"mb-3"}>
                                        <Link
                                            to={"/subscription#features"}
                                            className={"transition-all duration-300 text-lg font-normal opacity-45 hover:opacity-100"}>
                                            Features
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/6 mb-6 lg:mb-0">
                                <h3 className="text-xl font-medium mb-8">
                                    Connect With Us
                                </h3>
                                <ul className={"flex items-center gap-4"}>
                                    <li className={"bg-[#1A1A1A] border border-[#262626] rounded-xl"}>
                                        <Link
                                            to={"https://facebook.com"}
                                            className={"block h-full w-full p-4 transition-all duration-300 text-xl font-normal opacity-45 hover:opacity-100"}>
                                            <FaFacebook/>
                                        </Link>
                                    </li>
                                    <li className={"bg-[#1A1A1A] border border-[#262626] rounded-xl"}>
                                        <Link
                                            to={"https://facebook.com"}
                                            className={"block h-full w-full p-4 transition-all duration-300 text-xl font-normal opacity-45 hover:opacity-100"}>
                                            <FaTwitter/>
                                        </Link>
                                    </li>
                                    <li className={"bg-[#1A1A1A] border border-[#262626] rounded-xl"}>
                                        <Link
                                            to={"https://facebook.com"}
                                            className={"block h-full w-full p-4 transition-all duration-300 text-xl font-normal opacity-45 hover:opacity-100"}>
                                            <FaLinkedin/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center text-white opacity-45 py-5">
                            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                                <p className="opacity-45">
                                    @2024 Bashirr, All Rights Reserved
                                </p>
                            </div>
                            <div className="w-full md:w-1/2">
                                <ul className="flex items-center md:justify-end">
                                    <li className={"font-thin border-r pr-3"}>
                                        <Link to={"/"}>Terms of Use</Link>
                                    </li>
                                    <li className={"font-thin border-r px-3"}>
                                        <Link to={"/"}>Privacy Policy</Link>
                                    </li>
                                    <li className={"font-thin pl-3"}>
                                        <Link to={"/"}>Cookie Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;