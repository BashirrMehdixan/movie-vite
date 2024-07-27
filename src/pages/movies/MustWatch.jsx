import {useContext} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";

import SectionTitle from "/src/components/SectionTitle";
import {MustWatchCard} from "/src/components/MovieCards";
import {MoviesContext} from "/src/context/movies/MoviesContext";

// import
const MustWatch = () => {
    const {topRated} = useContext(MoviesContext);
    return (
        <>
            <section className="pt-5">
                <div className="relative container">
                    <div className="flex flex-wrap items-center py-7">
                        <SectionTitle
                            heading={"Must Watch"}
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
                                    1024: {
                                        slidesPerView: 4
                                    }
                                }
                            }
                            className="w-full h-full categorySwiper"
                        >
                            {topRated.map((movie, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <MustWatchCard {...movie} />
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