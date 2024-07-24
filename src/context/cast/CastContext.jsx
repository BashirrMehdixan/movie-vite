import {useState, useEffect, createContext} from "react";

export const CastContext = createContext({
    movieCasts: [],
    showCasts: [],
    fetchMovieCast: (movieId) => {
    },
    fetchShowCast: (showId) => {
    }
});

const CastContextProvider = ({children}) => {
    const [movieCasts, setMovieCasts] = useState([]);
    const [showCasts, setShowCasts] = useState([]);

    const apiKey = '286a82355468525bb9e08f91eac5c6dc';
    const apiUrl = 'https://api.themoviedb.org/3/'

    const fetchMovieCast = async (movieId) => {

        try {
            fetch(`${apiUrl}movie/${movieId}/credits?api_key=${apiKey}&language=en-US`)
                .then(response => response.json())
                .then(data => setMovieCasts(data.cast));
        } catch (error) {
            console.error(error);
        }
    };

    const fetchShowCast = async (showId) => {
        const apiKey = '286a82355468525bb9e08f91eac5c6dc';
        const showUrl = `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=${apiKey}&language=en-US`;

        try {
            fetch(`${apiUrl}tv/${showId}/credits?api_key=${apiKey}&language=en-US`)
                .then(response => response.json())
                .then(data => setMovieCasts(data.cast));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <CastContext.Provider value={{movieCasts, showCasts, fetchMovieCast, fetchShowCast}}>
            {children}
        </CastContext.Provider>
    );
};

export default CastContextProvider;