import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

import {MovieContext} from "/src/context/movies/MovieContext";
import {useContext} from "react";

import {BannerComponent} from "/src/components/BannerComponent";

const MovieBanner = () => {
    const {movies} = useContext(MovieContext);
    return (
        movies &&
        <>
            <section className="h-screen">
                <Swiper
                    navigation={{
                        prevEl: '.swiper-banner-prev',
                        nextEl: '.swiper-banner-next',
                    }}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    className="w-full h-full homeBannerSwiper">
                    {movies.map((movie, index) => {
                        return (
                            index < 5 &&
                            <SwiperSlide className={'flex items-center justify-center'} key={index}>
                                <BannerComponent {...movie}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </section>
        </>
    )
}

export default MovieBanner;