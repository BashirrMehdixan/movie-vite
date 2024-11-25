import {useContext, useEffect, useState} from "react";
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import CastCards from "/src/components/cards/CastCards";
import {DataContext} from "/src/context/DataContext";

const CastComponent = ({id, type}) => {
   const {fetchData} = useContext(DataContext);
   const [casts, setCasts]= useState([]);
    useEffect(() => {
        if (id) {
            fetchData(type, id, 'credits').then(res => setCasts(res.cast));
        }
    }, []);
    return (
        casts.length && (
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
                    {casts?.map((cast, index) => {
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