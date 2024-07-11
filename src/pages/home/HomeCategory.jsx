import {useContext} from "react";
// Swiper
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import SectionTitle from "/src/components/SectionTitle";
import {CategoryComponent} from "/src/components/Components";
import {MovieContext} from "/src/context/movies/MovieContext.jsx";

const HomeCategory = () => {
    const {movieGenres} = useContext(MovieContext);
    return (
        <>
            <section className={'relative py-32'}>
                <div className={'container'}>
                    <div className="flex items-center justify-between">
                        <div className="w-3/4">
                            <SectionTitle
                                heading={'Explore our wide variety of categories'}
                                inner={'Whether you\'re looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new'}
                            />
                        </div>
                        <div className="w-1/4">

                        </div>
                    </div>

                    <div className="home-categories py-5">
                        <Swiper
                            navigation={
                                {
                                    prevEl: '.swiper-banner-prev',
                                    nextEl: '.swiper-banner-next',
                                }}
                            modules={[Navigation]}
                            slidesPerView={1}
                            spaceBetween={30}
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

                            className="w-full h-full mySwiper">
                            {movieGenres.map((genre, index) => {
                                return (
                                    <SwiperSlide className={'flex items-center justify-center'} key={index}>
                                        <CategoryComponent {...genre} />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeCategory;