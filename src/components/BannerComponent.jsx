import {Link, useLocation} from "react-router-dom";
// Icons
import {FaPlay, FaPlus} from "react-icons/fa";

export const BannerComponent = ({id, backdrop_path, original_title, overview, title}) => {
    const imgSize = 'original';
    const location = useLocation();
    return (
        <>
            <div className={`relative h-full w-full flex justify-center items-end`}>
                <div className="absolute w-full h-full bg-black bg-opacity-45 z-10 top-0 left-0"></div>
                <div className="absolute w-full h-full"
                     data-aos={"fade-up"}
                     data-aos-duration={"3000"}>
                    <img
                        src={`https://image.tmdb.org/t/p/${imgSize}${backdrop_path}`}
                        className={'w-full h-full object-cover lg:object-fill'} alt={original_title}
                    />
                </div>
                <div className="relative z-10 w-full bg-gradient-to-t from-current to-transparent">
                    <div
                        className={'w-full md:w-3/4 text-white text-center py-6 mx-auto'}>
                        <h2
                            className="text-4xl lg:text-7xl font-medium tracking-[5px]"
                            data-aos={"fade-up"}
                            data-aos-duration={"3000"}>
                            {title}
                        </h2>
                        <p className="text-sm md:text-base opacity-45 py-5"
                           data-aos={"fade-up"}
                           data-aos-duration={"3000"}>
                            {overview}
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link to={`movies/${id.toString()}`}
                                  className={'inline-flex items-center justify-center bg-[#E50000] px-7 py-4 space-x-2 rounded-lg capitalize transition-all duration-500 hover:bg-opacity-60'}
                                  data-aos={"fade-up"}
                                  data-aos-duration={"3000"}
                            >
                                <span>
                                    <FaPlay/>
                                </span>
                                <span>
                                    {location.pathname !== "/" ? "Play Now" : "Start watching now"}
                                </span>
                            </Link>
                            {
                                location.pathname !== "/" &&
                                <div className={"flex items-center justify-center w-full lg:w-auto gap-4"}>
                                    <button
                                        className="text-xl bg-[#0F0F0F] border-2 border-[#262626] p-5 rounded-xl text-white">
                                        <FaPlus/>
                                    </button>
                                    <button
                                        className="text-xl bg-[#0F0F0F] border-2 border-[#262626] p-5 rounded-xl text-white">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.63257 10.25C7.43892 10.25 8.16648 9.80416 8.6641 9.16967C9.43726 8.18384 10.4117 7.3634 11.5255 6.77021C12.2477 6.38563 12.8743 5.81428 13.1781 5.05464C13.3908 4.5231 13.5 3.95587 13.5 3.38338V2.75C13.5 2.33579 13.8358 2 14.25 2C15.4926 2 16.5 3.00736 16.5 4.25C16.5 5.40163 16.2404 6.49263 15.7766 7.46771C15.511 8.02604 15.8836 8.75 16.5019 8.75M16.5019 8.75H19.6277C20.6544 8.75 21.5733 9.44399 21.682 10.4649C21.7269 10.8871 21.75 11.3158 21.75 11.75C21.75 14.5976 20.7581 17.2136 19.101 19.2712C18.7134 19.7525 18.1142 20 17.4962 20H13.4802C12.9966 20 12.5161 19.922 12.0572 19.7691L8.94278 18.7309C8.48393 18.578 8.00342 18.5 7.51975 18.5H5.90421M16.5019 8.75H14.25M5.90421 18.5C5.98702 18.7046 6.07713 18.9054 6.17423 19.1022C6.37137 19.5017 6.0962 20 5.65067 20H4.74289C3.85418 20 3.02991 19.482 2.77056 18.632C2.43208 17.5226 2.25 16.3451 2.25 15.125C2.25 13.5725 2.54481 12.0889 3.08149 10.7271C3.38655 9.95303 4.16733 9.5 4.99936 9.5H6.05212C6.52404 9.5 6.7973 10.0559 6.5523 10.4593C5.72588 11.8198 5.25 13.4168 5.25 15.125C5.25 16.3185 5.48232 17.4578 5.90421 18.5Z"
                                                stroke="white" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                    <button
                                        className="text-xl bg-[#0F0F0F] border-2 border-[#262626] p-5 rounded-xl text-white">
                                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.114 3.63603C21.6287 7.15075 21.6287 12.8492 18.114 16.364M15.4626 6.28777C17.5129 8.33802 17.5129 11.6621 15.4626 13.7124M5.75 6.25005L10.4697 1.53038C10.9421 1.0579 11.75 1.39253 11.75 2.06071V17.9394C11.75 18.6076 10.9421 18.9422 10.4697 18.4697L5.75 13.75H3.50905C2.62971 13.75 1.8059 13.2436 1.57237 12.3958C1.36224 11.633 1.25 10.8296 1.25 10C1.25 9.17046 1.36224 8.36709 1.57237 7.60429C1.8059 6.75652 2.62971 6.25005 3.50905 6.25005H5.75Z"
                                                stroke="white" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>

                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}