import {useContext} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

import {SeriesContext} from "/src/context/series/SeriesContext";
import {BannerComponent} from "/src/components/BannerComponent";

const SeriesBanner = () => {
    const {series} = useContext(SeriesContext);
    return (
        series &&
        <>
            <div className={"h-screen"}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                    }}
                    className={"h-full series-banner"}
                >
                    {series.map((serie, index) => {
                        return (
                            index < 6 &&
                            <SwiperSlide key={index}>
                                <BannerComponent {...serie}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    )
}
export default SeriesBanner;