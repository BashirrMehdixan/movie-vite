import {useEffect, useContext} from "react";
import {Link, useParams} from "react-router-dom";

// Swiper modules
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
// Icons
import {HiOutlineLanguage} from "react-icons/hi2";
import {Calendar, Apps, Star, PlusThin} from "react-huge-icons/outline";

// Context
import {MoviesContext} from "/src/context/movies/MoviesContext";
import {CastContext} from "/src/context/cast/CastContext";
// Components
import {ReviewContext} from "/src/context/reviews/ReviewContext";
import {BannerComponent} from "/src/components/BannerComponent";
import CastCards from "/src/components/CastCards";
import ReviewCard from "/src/components/ReviewCard";
import StarRating from "/src/components/StarRating";

const MovieDetail = () => {
    const {id} = useParams();
    const {movies, movieGenres} = useContext(MoviesContext);
    const {movieCasts, fetchMovieCast} = useContext(CastContext);
    const movie = movies.find(movieItem => movieItem.id.toString() === id.toString());
    const {moviesReview, fetchMovieReview} = useContext(ReviewContext);
    const genres = movie && movie.genre_ids.map(genreId => movieGenres.find(genre => genre.id === genreId));
    console.log(movie)
    useEffect(() => {
        if (id) {
            fetchMovieCast(id);
            fetchMovieReview(id)
        }
    }, []);
    return (movie && <>
        <section>
            <div className="h-screen">
                <BannerComponent {...movie}/>
            </div>
        </section>
        <div className="my-5">
            <div className="container">
                <div className="flex flex-wrap gap-2">
                    <div className="w-full lg:w-[70%]">
                        <div
                            className="bg-[#1A1A1A] border-2 border-[#262626] text-white px-5 py-10 rounded-lg mb-5">
                            <h4
                                className="text-2xl font-medium opacity-45">
                                Description
                            </h4>
                            <p
                                className="text-lg pt-3">
                                {movie.overview}
                            </p>
                        </div>
                        <div
                            className="relative bg-[#1A1A1A] border-2 border-[#262626] text-white px-5 py-10 rounded-lg mb-5">
                            <h4 className="text-2xl font-medium opacity-45">
                                Cast
                            </h4>
                            <div className="cat-swiper pt-8">
                                <Swiper
                                    slidesPerView={2}
                                    spaceBetween={80}
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 6
                                        }, 1024: {
                                            slidesPerView: 8
                                        }
                                    }}
                                    modules={[Navigation, Pagination]}
                                    navigation={{
                                        prevEl: '.swiper-cast-prev', nextEl: '.swiper-cast-next',
                                    }}
                                    pagination={{
                                        el: '.swiper-pagination', clickable: true
                                    }}
                                >
                                    {movieCasts.map((cast, index) => {
                                        return (<SwiperSlide key={index}>
                                            <CastCards {...cast}/>
                                        </SwiperSlide>)
                                    })}
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="bg-[#1A1A1A] border-2 border-[#262626] text-white px-5 py-10 rounded-lg mb-5">
                            <div className="flex items-center justify-between">
                                <h4 className="text-2xl font-medium opacity-45">
                                    Reviews
                                </h4>
                                <button
                                    className="flex items-center gap-1 bg-[#1A1A1A] text-sm capitalize px-2 py-4 border-2 border-[#262626] rounded-xl">
                                    <PlusThin className={"text-2xl"}/>
                                    <span>Add your review</span>
                                </button>
                            </div>
                            <Swiper
                                slidesPerView={1}
                                modules={[Navigation, Pagination]}
                                navigation={{
                                    prevEl: '.swiper-review-prev', nextEl: '.swiper-review-next',
                                }}
                                pagination={{
                                    el: '.swiper-pagination', clickable: true
                                }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2, spaceBetween: 20
                                    },
                                }}
                                className={"mt-5"}
                            >
                                {moviesReview.map((review, index) => {
                                    return (<SwiperSlide key={index}>
                                        <ReviewCard {...review} />
                                    </SwiperSlide>)
                                })}
                            </Swiper>
                        </div>
                    </div>
                    <div className="w-full lg:w-[calc(30%-8px)]">
                        <div className="bg-[#1A1A1A] text-white px-5 py-10 rounded-lg">
                            <div className="mb-5">
                                <div className="flex items-center text-xl opacity-45 mb-1">
                                    <Calendar className={"mr-2"}/>
                                    Released Year
                                </div>
                                <div className={"text-lg opacity-100 pt-2"}>
                                    {movie.release_date.substring(0, 4)}
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="flex items-center text-xl opacity-45 mb-1">
                                    <HiOutlineLanguage className={"mr-2"}/>
                                    Available Language
                                </div>
                                <div className={"text-lg opacity-100 pt-2"}>
                                    <div className="flex flex-wrap items-center">
                                        <div className="max-w-[max-content] bg-[#0F0F0F] px-5 py-2 rounded-lg">
                                            {movie.original_language.toUpperCase()}
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
                                        <StarRating rating={movie.vote_average}/>
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
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default MovieDetail;