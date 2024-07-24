import {Link} from "react-router-dom";

// Icon
import {FaArrowRight, FaEye} from "react-icons/fa";
import {CiClock1} from "react-icons/ci";

import StarRating from "/src/components/StarRating";

export const CategoryComponent = ({name}) => {
    return (
        <>
            <Link to={`/movies#${name.toLocaleLowerCase()}`}
                  className={'block w-full transition-all duration-300 hover:scale-[.95]'}>
                <div className={"bg-[#1A1A1A] w-full p-2 border border-[#333333] rounded-xl"}>
                    <div className="p-3 overflow-hidden">
                        <img
                            src={"./images/category-img/action.png"}
                            className={'w-full'} alt={name}/>
                    </div>
                    <div className="text-white flex items-center justify-between px-3 py-2">
                        <h3 className={"text-xl"}>{name}</h3>
                        <span>
                            <FaArrowRight/>
                        </span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export const MovieComponent = ({id, title, poster_path, release_date, vote_average}) => {
    const imgSize = 'original'
    return (
        <>
            <Link to={`/movies/${id.toString()}`}
                  className={'block w-full transition-all duration-300 hover:scale-[.95]'}>
                <div className={"bg-[#1A1A1A] w-full p-2 border border-[#333333] rounded-xl"}>
                    <div className="p-1 h-[350px] overflow-hidden">
                        <img
                            src={`https://image.tmdb.org/t/p/${imgSize}${poster_path}`}
                            className={'w-full h-full rounded-xl'} alt={title}/>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 text-[#999999]">
                        <h3 className={"flex items-center bg-[#141414] border-2 border-[#262626] px-3 py-2 rounded-lg"}>
                            <span className={"mr-2 text-xl"}>
                                <CiClock1/>
                            </span>
                            {release_date}
                        </h3>
                        <div
                            className={"flex items-center bg-[#141414] border-2 border-[#262626] px-3 py-2 rounded-lg"}>
                            <span className={"mr-2"}>
                                <FaEye/>
                            </span>
                            {vote_average}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export const NewReleasesCard = ({id, title, poster_path, release_date}) => {
    const imgSize = 'original'
    return (
        <>
            <Link to={`/movies/${id.toString()}`}
                  className={'block w-full transition-all duration-300 hover:scale-[.95]'}>
                <div className={"bg-[#1A1A1A] w-full p-2 border border-[#333333] rounded-xl"}>
                    <div className="p-1 h-[350px] overflow-hidden">
                        <img
                            src={`https://image.tmdb.org/t/p/${imgSize}${poster_path}`}
                            className={'w-full h-full rounded-xl'} alt={title}/>
                    </div>
                    {/*<div className="px-3 py-2 ">*/}
                    <h3 className={"bg-[#141414] text-center text-[#999999] border-2 border-[#262626] px-3 py-2 rounded-2xl mt-4"}>
                        Released at <span className={"ml-1 text-white"}>{release_date}</span>
                    </h3>
                    {/*</div>*/}
                </div>
            </Link>
        </>
    )
}

export const MustWatchCard = ({id, title, poster_path, release_date, vote_average}) => {
    const imgSize = 'original'
    return (
        <>
            <Link to={`/movies/${id.toString()}`}
                  className={'block w-full transition-all duration-300 hover:scale-[.95]'}>
                <div className={"bg-[#1A1A1A] w-full p-2 border border-[#333333] rounded-xl"}>
                    <div className="p-1 h-[350px] overflow-hidden">
                        <img
                            src={`https://image.tmdb.org/t/p/${imgSize}${poster_path}`}
                            className={'w-full h-full rounded-xl'} alt={title}/>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 text-[#999999]">
                        <h3 className={"flex items-center bg-[#141414] border-2 border-[#262626] px-3 py-2 rounded-lg"}>
                            <span className={"mr-2 text-xl"}>
                                <CiClock1/>
                            </span>
                            {release_date}
                        </h3>
                        <div
                            className={"flex items-center bg-[#141414] border-2 border-[#262626] px-3 py-2 rounded-lg"}>
                            <StarRating rating={vote_average}/>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}