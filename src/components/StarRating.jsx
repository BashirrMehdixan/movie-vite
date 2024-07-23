import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating / 2);
    const halfStar = rating % 2 !== 0;
    const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} className="text-[#E50000]" />);
    }

    // Half star
    if (halfStar) {
        stars.push(<FaStar key="half" className="text-[#E50000]" />);
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaStar key={`empty-${i}`} className="text-[#999999]" />);
    }

    return <div className="flex">{stars}</div>;
}

export default StarRating;
