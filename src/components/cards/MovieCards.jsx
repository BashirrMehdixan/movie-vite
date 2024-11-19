import {Link} from "react-router-dom";

// Icon
import StarRating from "/src/components/StarRating";
import {ClockCircle, Eye} from "react-huge-icons/outline";
import {ArrowRight} from "react-huge-icons/solid";

export const CategoryComponent = ({item}) => {
    return (
        <>
            <Link to={`/movies#${item.name.toLocaleLowerCase()}`}
                  className={`block w-full transition-all duration-300 hover:scale-[.95]`}>
                <div className={`bg-[#1A1A1A] w-full p-2 border border-[#333333] rounded-xl`}>
                    <div className="p-3 overflow-hidden">
                        <img
                            src={`/images/category-img/action.png`}
                            className={`w-full`} alt={item.name}/>
                    </div>
                    <div className="text-white flex items-center justify-between px-3 py-2">
                        <h3 className={`text-xl`}>{item.name}</h3>
                        <span>
                            <ArrowRight className={`text-3xl`}/>
                        </span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export const MovieComponent = ({id, item, type}) => {
    const imgSize = 'original';
    return (
        <>
            <Link to={`/${(item.media_type || type) === 'movie' ? 'movies' : 'shows'}/${id.toString()}`}
                  className={`block w-full transition-all duration-300 hover:scale-[.95]`}>
                <div className={`bg-[#1A1A1A] w-full p-2 border border-[#333333] rounded-xl`}>
                    <div className="p-1 h-[350px] overflow-hidden">
                        <img
                            src={`https://image.tmdb.org/t/p/${imgSize}${item.poster_path}`}
                            className={`w-full h-full rounded-xl`} alt={item.title || item.name}/>
                    </div>
                    <div className={`flex items-center justify-between px-3 py-2 text-[#999999]`}>
                        <h3 className={`flex items-center bg-[#141414] border-2 border-[#262626] px-3 py-2 rounded-lg`}>
                            <span className={`mr-2 text-xl`}>
                                <ClockCircle/>
                            </span>
                            {item.release_date || item.first_air_date}
                        </h3>
                        <div
                            className={`flex items-center bg-[#141414] border-2 border-[#262626] px-3 py-2 rounded-lg`}>
                            <span className={`mr-2`}>
                                <Eye/>
                            </span>
                            {item.vote_average}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export const NewReleasesCard = ({id, item, type}) => {
    const imgSize = 'original'
    return (
        <>
            <Link to={`${id.toString()}`}
                  className={`block w-full transition-all duration-300 hover:scale-[.95]`}>
                <div className={`bg-[#1A1A1A] w-full p-2 border border-[#333333] rounded-xl`}>
                    <div className="p-1 h-[350px] overflow-hidden">
                        <img
                            src={`https://image.tmdb.org/t/p/${imgSize}${item.poster_path}`}
                            className={`w-full h-full rounded-xl`} alt={item.title || item.name}/>
                    </div>
                    {/*<div className="px-3 py-2 ">*/}
                    <h3 className={`bg-[#141414] text-center text-[#999999] border-2 border-[#262626] px-3 py-2 rounded-2xl mt-4`}>
                        Released at <span
                        className={`ml-1 text-white`}>{item.release_date || item.first_air_date}</span>
                    </h3>
                </div>
            </Link>
        </>
    )
}

export const MustWatchCard = ({id, item, type}) => {
    const imgSize = 'original'
    return (
        <>
            <Link to={`/movies/${id.toString()}`}
                  className={`block w-full transition-all duration-300 hover:scale-[.95]`}>
                <div className={`bg-[#1A1A1A] w-full p-2 border border-[#333333] rounded-xl`}>
                    <div className="p-1 h-[350px] overflow-hidden">
                        <img
                            src={`https://image.tmdb.org/t/p/${imgSize}${item.poster_path || item.backdrop_path}`}
                            className={`w-full h-full rounded-xl`} alt={item.title || item.name}/>
                    </div>
                    <div className="flex flex-wrap items-center justify-between px-3 py-2 text-[#999999]">
                        <h3 className={`flex items-center bg-[#141414] border-2 border-[#262626] px-3 py-2 rounded-lg mb-2`}>
                            <span className={`mr-2 text-xl`}>
                                <ClockCircle/>
                            </span>
                            {item.release_date || item.first_air_date}
                        </h3>
                        <div
                            className={`flex items-center bg-[#141414] border-2 border-[#262626] px-3 py-2 rounded-lg`}>
                            <StarRating rating={item.vote_average}/>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export const HistoryCard = ({id, item, type}) => {
    const imgSize = 'original'
    return (
        <>
            <div className={`w-full mb-7`}>
                <div
                    className={`block w-full lg:h-[150px] overflow-hidden group`}>
                    <Link to={`/${type === 'movies' ? 'movies' : 'shows'}/${item.id.toString()}`}>
                        <img
                            src={`https://image.tmdb.org/t/p/${imgSize}${item.backdrop_path || item.poster_path}`}
                            className={`w-full h-full object-fill rounded-md transition ease-linear duration-300 group-hover:scale-110`}
                            alt={item.title || item.name}
                        />
                    </Link>
                </div>
                <Link
                    className={`block h-[35px] text-white opacity-65 transition ease-linear duration-300 hover:opacity-100 pt-2`}
                    to={`/${type === 'movies' ? 'movies' : 'shows'}/${item.id.toString()}`}>
                    {item.name || item.title}
                </Link>
                <div
                    className={`${!location.pathname.includes(`watchlist`) ? `hidden` : `flex`} justify-between items-center text-sm mt-1 text-[#999999]`}>
                    <p>
                        {item.vote_count} views
                    </p>
                    <p>
                        1 years ago
                    </p>
                </div>
            </div>
        </>
    )
}

export default HistoryCard;