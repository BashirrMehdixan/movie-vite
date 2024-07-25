import {createContext, useState, useEffect} from "react";

export const MovieContext = createContext([]);

const MovieProvider = ({children}) => {
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
                const [popularRes, newRes, upComingRes, ratedRes, genresRes] = await Promise.all([
                    fetch(`${base_url}movie/popular?api_key=${api_key}&page=1`),
                    fetch(`${base_url}movie/top_rated?api_key=${api_key}&page=1`),
                    fetch(`${base_url}movie/now_playing?api_key=${api_key}&page=1`),
                    fetch(`${base_url}movie/now_playing?api_key=${api_key}&page=2`),
                    fetch(`${base_url}genre/movie/list?api_key=${api_key}`)
                ]);

                const popularData = await popularRes.json();
                const newData = await newRes.json();
                const upComingData = await upComingRes.json();
                const ratedData = await ratedRes.json();
                const genresData = await genresRes.json();
// console.log(ratedData)
                setUpcoming(upComingData.results);
                setPopularMovies(popularData.results);
                setNewMovies(newData.results);
                setMovieGenres(genresData.genres);
                setTopRated(ratedData.results);

                setMovies([
                    ...upComingData.results,
                    ...popularData.results,
                    ...ratedData.results,
                    ...newData.results
                ]);


                const genreCounts = {};
                popularData.results.forEach(movie => {
                    movie.genre_ids.forEach(genreId => {
                        if (genreCounts[genreId]) {
                            genreCounts[genreId]++;
                        } else {
                            genreCounts[genreId] = 1;
                        }
                    });
                });

                const sortedGenres = Object.keys(genreCounts)
                    .sort((a, b) => genreCounts[b] - genreCounts[a])
                    .map(id => ({
                        id: parseInt(id),
                        name: genresData.genres.find(genre => genre.id === parseInt(id)).name,
                        count: genreCounts[id]
                    }));

                setPopularGenres(sortedGenres.slice(0, 10));
            } catch (error) {
                console.error("Error fetching movie data: ", error);
            }
        };

        fetchMovies();
    }, []);
    return (
        <MovieContext.Provider
            value={{movies, newMovies, popularMovies, upComing, movieGenres, popularGenres, topRated}}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieProvider;