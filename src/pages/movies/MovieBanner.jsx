import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

import {MoviesContext} from "/src/context/movies/MoviesContext";
import {useContext} from "react";

import {BannerComponent} from "/src/components/cards/BannerComponent";

const MovieBanner = () => {
    const {movies} = useContext(MoviesContext);
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
                        delay: 6000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    className="w-full h-full homeBannerSwiper">
                    {movies.map((movie, index) => {
                        return (
                            index < 5 &&
                            <SwiperSlide className={`flex items-center justify-center`} key={index}>
                                <BannerComponent id={movie.id} item={movie} type={`movies`}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </section>
        </>
    )
}

export default MovieBanner;