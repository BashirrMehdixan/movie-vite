import SectionTitle from "./SectionTitle.jsx";
import {MovieComponent} from "./MovieCards.jsx";
import {Swiper, SwiperSlide} from "swiper/react";

const FavoriteComponent = ({title, favorites, emptyMessage}) => {
    return (
        <>
            <SectionTitle heading={title}/>
            {favorites.length ? (
                <>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2
                            },
                            992: {
                                slidesPerView: 4
                            }
                        }
                        }
                        className="py-5 md:px-8"
                    >
                        {favorites.map((favorite, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <MovieComponent id={favorite.id} item={favorite} type={favorite.type}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </>
            ) : (
                <>
                    <div className={"text-white text-3xl text-center py-6"}>
                        {emptyMessage}
                    </div>
                </>
            )}
        </>
    )
}
export default FavoriteComponent;