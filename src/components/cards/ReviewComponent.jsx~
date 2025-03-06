import {useContext, useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import {DataContext} from "/src/context/DataContext";
import ReviewCard from "/src/components/cards/ReviewCard";

const ReviewComponent = ({id, type}) => {
    const {fetchData} = useContext(DataContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (id) {
            fetchData(type, id, 'reviews').then(data => setReviews(data.results));
        }
    }, []);

    return (
        reviews.length ? (
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
                className={`my-5`}
            >
                {reviews.map((review, index) => (
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
    )
}

export default ReviewComponent;