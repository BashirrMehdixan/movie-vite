import {useContext} from "react";
// Swiper
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import {MovieContext} from "/src/context/movies/MovieContext";
import BannerComponent from "/src/components/BannerComponent.jsx";


const HomeBanner = () => {
    const {newMovies} = useContext(MovieContext);
    return (
        <>
            <section className={'home-banner'}>
                <div className="h-screen">
                    <Swiper
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}
                        modules={[Navigation]}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false
                        }}
                        className="w-full h-full homeBannerSwiper">
                        {newMovies.map((newMovie, index) => {
                            return (
                                index < 5 &&
                                <SwiperSlide className={'flex items-center justify-center'} key={index}>
                                    <BannerComponent {...newMovie} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <button
                    className="swiper-button-prev text-white disabled:opacity-50">
                </button>
                <button
                    className="swiper-button-next text-white disabled:opacity-50">
                </button>
            </section>
        </>
    )
}

export default HomeBanner;