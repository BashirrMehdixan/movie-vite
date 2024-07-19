import {useContext} from "react";
import SectionTitle from "/src/components/SectionTitle";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import {MovieContext} from "/src/context/movies/MovieContext";
import {CategoryComponent} from "/src/components/Components";

const MovieGenres = () => {
    const {movieGenres} = useContext(MovieContext);
    return (
        movieGenres &&
        <>
            <section className="my-20">
                <div className="container">
                    <div className="relative border-2 border-[#262626] rounded-lg p-8">
                        <h4
                            className="absolute max-w-[max-content] bg-[#E50000] px-8 py-4 cursor-pointer text-white rounded-xl -top-[30px] left-[40px]">
                            Movies
                        </h4>
                        <div className="flex flex-wrap items-center px-2 py-5">
                            <SectionTitle heading={"Our Genres"} inner={""}/>
                        </div>
                        <div className="cat-swiper">
                            <Swiper
                                navigation={
                                    {
                                        prevEl: '.swiper-cat-prev',
                                        nextEl: '.swiper-cat-next',
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

                                className="w-full h-full categorySwiper">
                                {movieGenres.map((genre, index) => {
                                    return (
                                        <SwiperSlide
                                            className={'flex items-center justify-center'} key={index}
                                            data-aos={"fade-up"}
                                            data-aos-duration={"3000"}
                                        >
                                            <CategoryComponent {...genre} />
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                            <div className="hidden lg:block absolute w-[200px] top-[5%] right-[1%]">
                                <div
                                    className="w-full flex justify-between items-center bg-[#0F0F0F] py-3 px-4 rounded-2xl">
                                    <button
                                        className="swiper-button-prev swiper-cat-prev w-auto relative text-white bg-[#262626] py-5 px-4 top-0 left-0 mt-0 rounded-xl">
                                    </button>
                                    <button
                                        className="swiper-button-next swiper-cat-next w-auto relative text-white bg-[#262626] py-5 px-4 top-0 left-0 mt-0 rounded-xl">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MovieGenres;