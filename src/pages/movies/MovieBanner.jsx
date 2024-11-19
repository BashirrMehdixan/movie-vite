import {useContext, useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {DataContext} from "/src/context/DataContext";

import {BannerComponent} from "/src/components/cards/BannerComponent";

const MovieBanner = () => {
    const [data, setData] = useState([]);
    const {fetchData} = useContext(DataContext);
    useEffect(() => {
        fetchData('movie', 'now_playing').then(data => setData(data));
    }, [])
    return (
        data &&
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
                    {data.map((movie, index) => {
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