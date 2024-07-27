import {createContext, useState, useEffect} from "react";

export const MoviesContext = createContext([]);

const MoviesProvider = ({children}) => {
    const api_key = '286a82355468525bb9e08f91eac5c6dc';
    const base_url = 'https://api.themoviedb.org/3/';
    const [movies, setMovies] = useState([]);
    const [newMovies, setNewMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [upComing, setUpcoming] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [movieGenres, setMovieGenres] = useState([]);
    const [popularGenres, setPopularGenres] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const [popularRes, ratedRes, upComingRes, newRes, genresRes] = await Promise.all([
                    fetch(`${base_url}movie/popular?api_key=${api_key}&page=1`),
                    fetch(`${base_url}movie/top_rated?api_key=${api_key}&page=1`),
                    fetch(`${base_url}movie/upcoming?api_key=${api_key}&page=1`),
                    fetch(`${base_url}movie/now_playing?api_key=${api_key}&page=1`),
                    fetch(`${base_url}genre/movie/list?api_key=${api_key}`)
                ]);

                const [popularData, newData, upComingData, ratedData, genresData] = await Promise.all([
                    popularRes.json(),
                    newRes.json(),
                    upComingRes.json(),
                    ratedRes.json(),
                    genresRes.json()
                ]);

                setPopularMovies(popularData.results);
                setNewMovies(newData.results);
                setUpcoming(upComingData.results);
                setTopRated(ratedData.results);

                const allMovies = [
                    ...newData.results,
                    ...popularData.results,
                    ...upComingData.results,
                    ...ratedData.results
                ];

                const uniqueMovies = Array.from(new Set(allMovies.map(movie => movie.id)))
                    .map(id => allMovies.find(movie => movie.id === id));
                setMovies(uniqueMovies);

                const genreCounts = {};
                popularData.results.forEach(movie => {
                    movie.genre_ids.forEach(genreId => {
                        genreCounts[genreId] = (genreCounts[genreId] || 0) + 1;
                    });
                });

                const sortedGenres = Object.keys(genreCounts)
                    .sort((a, b) => genreCounts[b] - genreCounts[a])
                    .map(id => ({
                        id: parseInt(id),
                        name: genresData.genres.find(genre => genre.id === parseInt(id)).name,
                        count: genreCounts[id]
                    }));
                setMovieGenres(genresData.genres);
                setPopularGenres(sortedGenres.slice(0, 10));
            } catch (error) {
                console.error("Error fetching movie data: ", error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <MoviesContext.Provider
            value={{movies, newMovies, popularMovies, upComing, movieGenres, popularGenres, topRated}}>
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesProvider;