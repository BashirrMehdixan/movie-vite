import {useContext, useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

import {DataContext} from "/src/context/DataContext";
import {BannerComponent} from "/src/components/cards/BannerComponent";

const ShowsBanner = () => {
    const {fetchData} = useContext(DataContext);
    const [shows, setShows] = useState([]);
    useEffect(() => {
        fetchData('tv', 'airing_today').then(data => setShows(data));
    }, [])
    return (
        <>
            <div className={`h-screen`}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false
                    }}
                    className={`h-full shows-banner`}
                >
                    {shows.map((show, index) => {
                        return (
                            index < 6 &&
                            <SwiperSlide key={index}>
                                <BannerComponent id={show.id} item={show} type={`shows`}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    )
}
export default ShowsBanner;