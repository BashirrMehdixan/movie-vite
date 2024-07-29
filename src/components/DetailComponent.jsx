import {Link} from "react-router-dom";
import {Apps, Calendar, Star, GlobeEarth} from "react-huge-icons/outline";

// Components
import StarRating from "/src/components/StarRating";


const DetailComponent = ({item, itemGenres}) => {
    const genres = item && item.genre_ids.map(genreId => itemGenres.find(genre => genre.id === genreId));

    return (
        <>
            <div className="bg-[#1A1A1A] text-white px-5 py-10 rounded-lg">
                <div className="mb-5">
                    <div className="flex items-center text-xl opacity-45 mb-1">
                        <Calendar className={"mr-2"}/>
                        Released Year
                    </div>
                    <div className={"text-lg opacity-100 pt-2"}>
                        {item.first_air_date ? item.first_air_date.substring(0, 4) : item.release_date.substring(0, 4)}
                    </div>
                </div>
                <div className="mb-5">
                    <div className="flex items-center text-xl opacity-45 mb-1">
                        <GlobeEarth className={"mr-2"}/>
                        Available Language
                    </div>
                    <div className={"text-lg opacity-100 pt-2"}>
                        <div className="flex flex-wrap items-center">
                            <div className="max-w-[max-content] bg-[#0F0F0F] px-5 py-2 rounded-lg">
                                {item.original_language.toUpperCase()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <div className="flex items-center text-xl opacity-45 mb-1">
                        <Star className={"mr-2"}/>
                        Rating
                    </div>
                    <div className={"text-lg opacity-100 pt-2"}>
                        <div className="bg-[#0F0F0F] max-w-[max-content] rounded-lg px-6 py-4">
                            <p className={"font-medium mb-1"}>IMDb</p>
                            <StarRating rating={item.vote_average}/>
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <div className="flex items-center text-xl opacity-45 mb-1">
                        <Apps className={"mr-2"}/>
                        Genres
                    </div>
                    <div className={"text-lg opacity-100"}>
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            {genres.map((genre, index) => {
                                return (
                                    <div className={"max-w-[max-content] text-base bg-[#0F0F0F] rounded-lg"}
                                         key={index}>
                                        <Link to={`/genre/${genre.id}`}
                                              className={"block h-full w-full p-3"}>
                                            {genre.name}
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DetailComponent