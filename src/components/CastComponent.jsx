import {useContext, useEffect} from "react";
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import CastCards from "/src/components/CastCards";
import {CastContext} from "/src/context/cast/CastContext";

const CastComponent = ({id}) => {
    const {movieCasts, fetchMovieCast} = useContext(CastContext);
    useEffect(() => {
        if (id) {
            fetchMovieCast(id);
        }
    }, []);
    return (
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
                {movieCasts.map((cast, index) => {
                    return (<SwiperSlide key={index}>
                        <CastCards {...cast}/>
                    </SwiperSlide>)
                })}
            </Swiper>
        </>
    )
}

export default CastComponent;