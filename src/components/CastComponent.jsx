import {useContext, useEffect} from "react";
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import CastCards from "/src/components/CastCards";
import {CastContext} from "/src/context/cast/CastContext";

const CastComponent = ({id, type}) => {
    const {movieCasts, fetchMovieCast, fetchSeriesCast, seriesCasts} = useContext(CastContext);
    useEffect(() => {
        if (id) {
            if (type === "movie") {
                fetchMovieCast(id);
            } else {
                fetchSeriesCast(id);
            }
        }
    }, []);
    const moviesCastsExists = movieCasts && movieCasts.length > 0;
    const seriesCastsExists = seriesCasts && seriesCasts.length > 0;
    return (
        (moviesCastsExists || seriesCastsExists) && (
            <>
                <Swiper
                    slidesPerView={2}
                    breakpoints={{
                        640: {
                            slidesPerView: 4
                        },
                        768: {
                            slidesPerView: 6
                        },
                        1024: {
                            slidesPerView: 8
                        }
                    }}
                    modules={[Navigation, Pagination]}
                    navigation={{
                        prevEl: '.swiper-cast-prev', nextEl: '.swiper-cast-next',
                    }}
                    pagination={{
                        el: '.swiper-pagination', clickable: true
                    }}
                >
                    {moviesCastsExists && movieCasts.map((cast, index) => {
                        return (<SwiperSlide key={index}>
                            <CastCards {...cast}/>
                        </SwiperSlide>)
                    })}
                    {seriesCastsExists && seriesCasts.map((cast, index) => {
                        return (<SwiperSlide key={index}>
                            <CastCards {...cast}/>
                        </SwiperSlide>)
                    })}
                </Swiper>
            </>
        )
    )
}

export default CastComponent;