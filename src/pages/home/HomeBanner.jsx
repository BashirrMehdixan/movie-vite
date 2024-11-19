import {useContext, useEffect, useState} from "react";
// Swiper
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';

import {DataContext} from "/src/context/DataContext";
import {BannerComponent} from "/src/components/cards/BannerComponent";

const HomeBanner = () => {
    const {fetchData} = useContext(DataContext);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData('trending', 'all', 'day').then(data => setData(data));
    }, [])
    return (
        <>
            <section className={`home-banner`}>
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
                        {data?.map((movie, index) => {
                            return (
                                index < 8 &&
                                <SwiperSlide className={`flex items-center justify-center`} key={index}>
                                    <BannerComponent id={movie.id} item={movie} type={`movies`}/>
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