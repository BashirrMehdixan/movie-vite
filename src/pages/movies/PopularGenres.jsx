import {useContext, useEffect, useState} from "react";

// Swiper
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";

// Components
import {DataContext} from "/src/context/DataContext";
import {CategoryComponent} from "/src/components/cards/MovieCards";
import SectionTitle from "/src/components/head/SectionTitle";

const PopularGenres = () => {
    const {getGenres} = useContext(DataContext);
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        getGenres('movie').then(data => setGenres(data))
    }, []);
    return (
        genres &&
        <>
            <section className="py-5">
                <div className="container relative">
                    <div className="flex flex-wrap items-center py-7">
                        <SectionTitle
                            heading={`Popular Top 10 In Genres`}
                        />
                    </div>
                    <div className="cat-swiper">
                        <Swiper
                            navigation={
                                {
                                    prevEl: '.swiper-popular-prev',
                                    nextEl: '.swiper-popular-next',
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

                            className="w-full h-full categorySwiper">
                            {genres.map((genre, index) => {
                                return (
                                    <SwiperSlide
                                        className={`flex items-center justify-center`} key={index}
                                        data-aos={`fade-up`}
                                        data-aos-duration={`3000`}
                                    >
                                        <CategoryComponent item={genre}/>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <div className="hidden lg:block absolute w-[200px] top-[3%] right-[1%]">
                            <div
                                className="w-full flex justify-between items-center bg-[#0F0F0F] py-3 px-4 rounded-2xl">
                                <button
                                    className="swiper-button-prev swiper-popular-prev w-auto relative text-white bg-[#262626] py-5 px-4 top-0 left-0 mt-0 rounded-xl">
                                </button>
                                <button
                                    className="swiper-button-next swiper-popular-next w-auto relative text-white bg-[#262626] py-5 px-4 top-0 left-0 mt-0 rounded-xl">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PopularGenres;