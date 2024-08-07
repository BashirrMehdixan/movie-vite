import {useContext} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

import {ShowsContext} from "/src/context/shows/ShowsContext";
import {BannerComponent} from "/src/components/cards/BannerComponent";

const ShowsBanner = () => {
    const {shows} = useContext(ShowsContext);
    return (
        <>
            <div className={"h-screen"}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false
                    }}
                    className={"h-full shows-banner"}
                >
                    {shows.map((show, index) => {
                        return (
                            index < 6 &&
                            <SwiperSlide key={index}>
                                <BannerComponent id={show.id} item={show} type={"shows"}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    )
}
export default ShowsBanner;