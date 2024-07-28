import {useContext, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import {ReviewContext} from "/src/context/reviews/ReviewContext";
import ReviewCard from "/src/components/ReviewCard";

const ReviewComponent = ({id}) => {

    const {moviesReview, fetchMovieReview} = useContext(ReviewContext);
    useEffect(() => {
        if (id) {
            fetchMovieReview(id);
        }
    }, []);
    return (
        <>
            <Swiper
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                navigation={{
                    prevEl: '.swiper-review-prev', nextEl: '.swiper-review-next',
                }}
                pagination={{
                    el: '.swiper-pagination', clickable: true
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2, spaceBetween: 20
                    },
                }}
                className={"mt-5"}
            >
                {moviesReview.map((review, index) => {
                    return (<SwiperSlide key={index}>
                        <ReviewCard {...review} />
                    </SwiperSlide>)
                })}
            </Swiper>
        </>
    )
}

export default ReviewComponent;