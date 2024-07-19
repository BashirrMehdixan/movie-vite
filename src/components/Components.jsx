import {Link} from "react-router-dom";

// Icon
import {FaArrowRight, FaEye} from "react-icons/fa";
import {CiClock1} from "react-icons/ci";

export const CategoryComponent = ({name}) => {
    return (
        <>
            <Link to={`/movies#${name.toLocaleLowerCase()}`}
                  className={'block w-full transition-all duration-300 hover:scale-[.95]'}>
                <div className={"bg-[#1A1A1A] w-full p-2 border border-[#333333] rounded-xl"}>
                    <div className="p-3 overflow-hidden">
                        <img
                            src={"./images/category-img/action.png"}
                            className={'w-full'} alt=""/>
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

export const MovieComponent = ({title, poster_path, release_date, vote_average}) => {
    const imgSize = 'original'
    return (
        <>
            <Link to={`/movies#${name.toLocaleLowerCase()}`}
                  className={'block w-full transition-all duration-300 hover:scale-[.95]'}>
                <div className={"bg-[#1A1A1A] w-full p-2 border border-[#333333] rounded-xl"}>
                    <div className="p-1 h-[350px] overflow-hidden">
                        <img
                            src={`https://image.tmdb.org/t/p/${imgSize}${poster_path}`}
                            className={'w-full h-full rounded-xl'} alt=""/>
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