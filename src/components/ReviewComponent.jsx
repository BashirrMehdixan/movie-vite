import {useContext, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import {ReviewContext} from "/src/context/reviews/ReviewContext";
import ReviewCard from "/src/components/ReviewCard";

const ReviewComponent = ({id, type}) => {
    const {moviesReview, fetchMovieReview, seriesReview, fetchSeriesReview} = useContext(ReviewContext);

    useEffect(() => {
        if (id) {
            if (type === "movie") {
                fetchMovieReview(id);
            } else {
                fetchSeriesReview(id);
            }
        }
    }, []);

    const moviesReviewExists = moviesReview && moviesReview.length > 0;
    const seriesReviewExists = seriesReview && seriesReview.length > 0;

    return (
        (moviesReviewExists || seriesReviewExists) ? (
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
                className={"my-5"}
            >
                {moviesReviewExists && moviesReview.map((review, index) => (
                    <SwiperSlide key={index}>
                        <ReviewCard {...review} />
                    </SwiperSlide>
                ))}
                {seriesReviewExists && seriesReview.map((review, index) => (
                    <SwiperSlide key={index}>
                        <ReviewCard {...review} />
                    </SwiperSlide>
                ))}
            </Swiper>
        ) : (
            <div className="text-white text-3xl text-center pb-5">
                No reviews yet
            </div>
        )
    );
}

export default ReviewComponent;