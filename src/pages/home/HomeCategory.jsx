import {useContext} from "react";
// Swiper
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SectionTitle from "/src/components/SectionTitle";
import {CategoryComponent} from "/src/components/Components";
import {MovieContext} from "/src/context/movies/MovieContext.jsx";

const HomeCategory = () => {
    const {movieGenres} = useContext(MovieContext);
    return (
        movieGenres &&
        <>
            <section className={'home-category pt-32 pb-10'}>
                <div className={'relative container'}>
                    <div className="flex items-center justify-between">
                        <div className="w-full lg:w-3/4">
                            <SectionTitle
                                heading={'Explore our wide variety of categories'}
                                inner={'Whether you\'re looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new'}
                            />
                        </div>
                    </div>

                    <div className="home-categories py-5">
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

                            className="w-full h-full homeCategorySwiper">
                            {movieGenres.map((genre, index) => {
                                return (
                                    <SwiperSlide className={'flex items-center justify-center'} key={index}>
                                        <CategoryComponent {...genre} />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                    <div className="hidden lg:block absolute w-[200px] top-[5%] right-[1%]">
                        <div className="w-full flex justify-between items-center bg-[#1A1A1A] py-3 px-4 rounded-2xl">
                            <button
                                className="swiper-button-prev swiper-cat-prev w-auto relative text-white bg-[#262626] py-5 px-4 top-0 left-0 mt-0 rounded-xl">
                            </button>
                            <button
                                className="swiper-button-next swiper-cat-next w-auto relative text-white bg-[#262626] py-5 px-4 top-0 left-0 mt-0 rounded-xl">
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeCategory;