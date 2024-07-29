import {useState, createContext} from "react";

export const ReviewContext = createContext({
    moviesReview: [],
    seriesReview: [],
    fetchMovieReview: (movieId) => {

    },
    fetchSeriesReview: (showId) => {

    }
});

const ReviewProvider = ({children}) => {
    const [moviesReview, setMoviesReview] = useState([]);
    const [seriesReview, setSeriesReview] = useState([]);
    const apiKey = '286a82355468525bb9e08f91eac5c6dc';
    const apiUrl = 'https://api.themoviedb.org/3/';
    const fetchMovieReview = (movieId) => {
        try {
            fetch(`${apiUrl}movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`)
                .then(res => res.json())
                .then(data => setMoviesReview(data.results))
        } catch (e) {
            console.log(e);
        }
    }

    const fetchSeriesReview = (showId) => {
        try {
            fetch(`${apiUrl}tv/${showId}/reviews?api_key=${apiKey}&language=en-US`)
                .then(res => res.json())
                .then(data => setSeriesReview(data.results))
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <ReviewContext.Provider value={{moviesReview, fetchMovieReview, seriesReview, fetchSeriesReview}}>
            {children}
        </ReviewContext.Provider>
    )
}

export default ReviewProvider;