import {useEffect, useContext} from "react";
import {useParams} from "react-router-dom";

// Swiper modules
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
// Icons
import {FaPlus} from "react-icons/fa";

// Context
import {MovieContext} from "/src/context/movies/MovieContext";
import {CastContext} from "/src/context/cast/CastContext";
import {ReviewContext} from "/src/context/reviews/ReviewContext";
import {BannerComponent} from "/src/components/BannerComponent";
import CastCards from "/src/components/CastCards";
import ReviewCard from "/src/components/ReviewCard";

const MovieDetail = () => {
    const {id} = useParams();
    const {movies} = useContext(MovieContext);
    const {movieCasts, fetchMovieCast} = useContext(CastContext);
    const movie = movies.find(movieItem => movieItem.id.toString() === id.toString());
    const {moviesReview, fetchMovieReview} = useContext(ReviewContext);
    useEffect(() => {
        if (id) {
            fetchMovieCast(id);
            fetchMovieReview(id)
        }
    }, []);
    console.log(moviesReview)
    return (
        movie &&
        <>
            <section>
                <div className="h-screen">
                    <BannerComponent {...movie}/>
                </div>
            </section>
            <div className="my-5">
                <div className="container">
                    <div className="flex flex-wrap gap-2">
                        <div className="w-full lg:w-[79%]">
                            <div
                                className="bg-[#1A1A1A] border-2 border-[#262626] text-white px-5 py-10 rounded-lg mb-5">
                                <h4
                                    className="text-2xl font-medium opacity-45">
                                    Description
                                </h4>
                                <p
                                    className="text-lg pt-3">
                                    A fiery young man clashes with an unflinching forest officer in a south Indian
                                    village where spirituality, fate and folklore rule the lands.
                                </p>
                            </div>
                            <div
                                className="relative bg-[#1A1A1A] border-2 border-[#262626] text-white px-5 py-10 rounded-lg mb-5">
                                <h4 className="text-2xl font-medium opacity-45">
                                    Description
                                </h4>
                                <div className="cat-swiper pt-8">
                                    <Swiper
                                        slidesPerView={4}
                                        breakpoints={
                                            {
                                                768: {
                                                    slidesPerView: 6
                                                },
                                                1024: {
                                                    slidesPerView: 9
                                                }
                                            }
                                        }
                                        modules={[Navigation, Pagination]}
                                        navigation={{
                                            prevEl: '.swiper-cast-prev',
                                            nextEl: '.swiper-cast-next',
                                        }}
                                        pagination={{
                                            el: '.swiper-pagination',
                                            clickable: true
                                        }}
                                    >
                                        {movieCasts.map((cast, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <CastCards {...cast}/>
                                                </SwiperSlide>
                                            )
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
                                        <FaPlus/>
                                        <span>Add your review</span>
                                    </button>
                                </div>
                                <Swiper
                                    slidesPerView={1}
                                    modules={[Navigation, Pagination]}
                                    navigation={{
                                        prevEl: '.swiper-review-prev',
                                        nextEl: '.swiper-review-next',
                                    }}
                                    pagination={{
                                        el: '.swiper-pagination',
                                        clickable: true
                                    }}
                                    breakpoints={
                                        {
                                            768: {
                                                slidesPerView: 2,
                                                spaceBetween: 20
                                            },
                                        }
                                    }
                                    className={"mt-5"}
                                >
                                    {moviesReview.map((review, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <ReviewCard {...review} />
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                        <div className="w-full lg:w-[20%]">
                            <div className="bg-[#1A1A1A] text-white px-5 py-10 rounded-lg">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetail;