import {useState, createContext} from "react";
import axios from "axios";

export const ReviewContext = createContext({
    reviews: [],
    fetchMovieReview: (movieId) => {

    }
});

const ReviewProvider = ({children}) => {
    const [reviews, setReviews] = useState([]);
    const apiUrl = import.meta.env.VITE_APP_BASE_API_URL;
    const apiKey = import.meta.env.VITE_APP_API_KEY;
    const getReviews = async (id, type) => {
        try {
            if (type === "movie") {
                await axios.get(`${apiUrl}movie/${id}/reviews?api_key=${apiKey}&language=en-US`)
                    .then(data => setReviews(data.data.results))
            } else if (type === "shows") {
                await axios.get(`${apiUrl}tv/${id}/credits?api_key=${apiKey}&language=en-US`)
                    .then(data => setReviews(data.data.results))
            }
            return reviews;
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <ReviewContext.Provider value={{reviews, getReviews}}>
            {children}
        </ReviewContext.Provider>
    )
}

export default ReviewProvider;