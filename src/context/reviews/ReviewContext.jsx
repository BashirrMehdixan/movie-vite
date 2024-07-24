import {useState, createContext} from "react";

export const ReviewContext = createContext({
    moviesReview: [],
    seriesReview: [],
    fetchMovieReview: (movieId) => {

    },
    fetchShowReview: (showId) => {

    }
});

const ReviewProvider = ({children}) => {
    const [moviesReview, setMoviesReview] = useState([]);
    const [seriesReview, setSeriesReview] = useState([]);
    const apiKey = '286a82355468525bb9e08f91eac5c6dc';
    const movieUrl = 'https://api.themoviedb.org/3/';
    const fetchMovieReview = (movieId) => {
        try {
            fetch(`${movieUrl}movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`)
                .then(res => res.json())
                .then(data => setMoviesReview(data.results))
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <ReviewContext.Provider value={{moviesReview, fetchMovieReview}}>
            {children}
        </ReviewContext.Provider>
    )
}

export default ReviewProvider;