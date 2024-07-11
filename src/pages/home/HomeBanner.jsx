import {useContext} from "react";
// Swiper
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import {MovieContext} from "/src/context/movies/MovieContext";
import BannerComponent from "/src/components/BannerComponent.jsx";

// Icons
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";


const HomeBanner = () => {
    const {newMovies} = useContext(MovieContext);
    return (
        <>
            <section className={'home-banner'}>
                <div className="h-screen">
                    <Swiper
                        navigation={
                            {
                                prevEl: '.swiper-banner-prev',
                                nextEl: '.swiper-banner-next',
                            }}
                        modules={[Navigation, Autoplay]}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false
                        }}
                        className="w-full h-full mySwiper">
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
                    className="swiper-button-prev swiper-banner-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-30 text-6xl text-white disabled:opacity-0">
                    <IoIosArrowBack/>
                </button>
                <button
                    className="swiper-button-next swiper-banner-next absolute top-1/2 right-4 transform -translate-y-1/2 z-30 text-6xl text-white disabled:opacity-0">
                    <IoIosArrowForward/>
                </button>
            </section>
        </>
    )
}

export default HomeBanner;