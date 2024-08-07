import {useContext, useEffect, useState} from "react";
// Swiper
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';

import {MoviesContext} from "/src/context/movies/MoviesContext";
import {BannerComponent} from "/src/components/cards/BannerComponent";

const HomeBanner = () => {
    const {movies} = useContext(MoviesContext);
    return (
        <>
            <section className={'home-banner'}>
                <div className="h-screen">
                    <Swiper
                        navigation={{
                            prevEl: '.swiper-banner-prev',
                            nextEl: '.swiper-banner-next',
                        }}
                        modules={[Navigation, Autoplay]}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false
                        }}
                        loop={true}
                        className="w-full h-full homeBannerSwiper">
                        {movies?.map((movie, index) => {
                            return (
                                index < 8 &&
                                <SwiperSlide className={'flex items-center justify-center'} key={index}>
                                    <BannerComponent id={movie.id} item={movie} type={"movies"}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <button
                    className="swiper-button-prev swiper-banner-prev text-white disabled:opacity-50">
                </button>
                <button
                    className="swiper-button-next swiper-banner-next text-white disabled:opacity-50">
                </button>
            </section>
        </>
    )
}

export default HomeBanner;