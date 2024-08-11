import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// Icons
import { Like, Speaker, SpeakerMute } from "react-huge-icons/outline";
import { Plus, TrackPlay } from "react-huge-icons/solid";
// Context
import { Actions } from "/src/hooks/Hooks";

export const BannerComponent = ({ id, item, type }) => {
    const imgSize = 'original';
    const { favAction } = Actions();
    const [mute, setMute] = useState(false);
    const location = useLocation();

    return (
        <>
            <div className={`relative h-full w-full flex justify-center items-end`}>
                <div className="absolute w-full h-full bg-black bg-opacity-45 z-10 top-0 left-0"></div>
                <div className="absolute w-full h-full" data-aos={`fade-up`} data-aos-duration={`3000`}>
                    <img
                        src={`https://image.tmdb.org/t/p/${imgSize}${item.backdrop_path}`}
                        className={`w-full h-full object-cover lg:object-fill`} alt={item.title || item.name}
                    />
                </div>
                <div className="relative z-10 w-full bg-gradient-to-t from-current to-transparent">
                    <div className={`w-full md:w-3/4 text-white text-center py-6 mx-auto`}>
                        <div className="container">
                            <h2 className="text-4xl lg:text-7xl font-medium tracking-[5px]" data-aos={`fade-up`}
                                data-aos-duration={`3000`}>
                                {item.title || item.name}
                            </h2>
                            <p className="text-sm md:text-base opacity-45 py-5" data-aos={`fade-up`}
                                data-aos-duration={`3000`}>
                                {item.overview}
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <Link to={`/${type === "movies" ? "movies" : `  shows`}/${item.id.toString()}`}
                                    className={`inline-flex items-center justify-center bg-[#E50000] px-7 py-4 space-x-2 rounded-lg capitalize transition-all duration-500 hover:bg-opacity-60`}
                                    data-aos={`fade-up`} data-aos-duration={`3000`}>
                                    <span>
                                        <TrackPlay className={`text-3xl`} />
                                    </span>
                                    <span>
                                        {location.pathname !== `/` ? `Play Now` : `Start watching now`}
                                </span>
                                </Link>
                                {
                                    location.pathname !== "/" &&
                                    <div className={`flex items-center justify-center w-full lg:w-auto gap-4`}>
                                        <button
                                            className="bg-[#0F0F0F] border-2 border-[#262626] px-5 py-4 rounded-xl text-white">
                                            <Plus className={`transition duration-500 hover:text-[#E50000] text-3xl`} />
                                        </button>
                                        <button
                                            className="bg-[#0F0F0F] border-2 border-[#262626] px-5 py-4 rounded-xl text-white hover:text-[#E50000]"
                                            onClick={() => favAction(item, type)}>
                                            <Like
                                                className={`text-3xl transition duration-300`} />
                                        </button>
                                        <button
                                            className="bg-[#0F0F0F] border-2 border-[#262626] p-5 rounded-xl text-white"
                                            onClick={() => setMute(!mute)}>
                                            {mute ? <SpeakerMute className={`text-3xl text-[#E50000]`} /> :
                                                <Speaker
                                                    className={`text-3xl transition duration-300 hover:text-[#E50000]`} />}
                                        </button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};