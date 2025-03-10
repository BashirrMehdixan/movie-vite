import {useContext, useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";

import SectionTitle from "/src/components/head/SectionTitle";
import {MustWatchCard} from "/src/components/cards/MovieCards";
import {DataContext} from "/src/context/DataContext";

// import
const MustWatch = () => {
    const {fetchData} = useContext(DataContext);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetchData('movie', 'top_rated').then(data => setMovies(data.results));
    }, []);
    return (
        <>
            <section className="pt-5">
                <div className="relative container">
                    <div className="flex flex-wrap items-center py-7">
                        <SectionTitle
                            heading={`Must Watch`}
                        />
                    </div>
                    <div className="cat-swiper py-5">
                        <Swiper
                            navigation={
                                {
                                    prevEl: '.swiper-releases-prev',
                                    nextEl: '.swiper-releases-next',
                                }}
                            modules={[Navigation, Pagination]}
                            slidesPerView={1}
                            spaceBetween={30}
                            pagination={
                                {
                                    el: '.swiper-pagination',
                                    clickable: true
                                }
                            }
                            loop={true}
                            breakpoints={
                                {
                                    768: {
                                        slidesPerView: 2
                                    },
                                    984: {
                                        slidesPerView: 3
                                    }
                                    ,
                                    1240: {
                                        slidesPerView: 4
                                    }
                                }
                            }
                            className="w-full h-full categorySwiper"
                        >
                            {movies?.map((movie, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <MustWatchCard id={movie.id} item={movie} type={`movies`}/>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <div className="hidden lg:block absolute w-[200px] top-[4%] right-[1%]">
                            <div
                                className="w-full flex justify-between items-center bg-[#0F0F0F] py-3 px-4 rounded-2xl">
                                <button
                                    className="swiper-button-prev swiper-releases-prev w-auto relative text-white bg-[#262626] py-5 px-4 top-0 left-0 mt-0 rounded-xl">
                                </button>
                                <button
                                    className="swiper-button-next swiper-releases-next w-auto relative text-white bg-[#262626] py-5 px-4 top-0 left-0 mt-0 rounded-xl">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MustWatch;