import {createContext, useState, useEffect} from "react";

export const MovieContext = createContext([]);

const MovieProvider = ({children}) => {
    const api_key = '286a82355468525bb9e08f91eac5c6dc';
    const base_url = 'https://api.themoviedb.org/3/';
    const [movies, setMovies] = useState([]);
    const [newMovies, setNewMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [movieGenres, setMovieGenres] = useState([]);
    const [popularGenres, setPopularGenres] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const [popularRes, newRes, genresRes] = await Promise.all([
                    fetch(`${base_url}movie/popular?api_key=${api_key}&page=1`),
                    fetch(`${base_url}movie/now_playing?api_key=${api_key}&page=1`),
                    fetch(`${base_url}genre/movie/list?api_key=${api_key}`)
                ]);

                const popularData = await popularRes.json();
                const newData = await newRes.json();
                const genresData = await genresRes.json();

                setPopularMovies(popularData.results);
                setNewMovies(newData.results);
                setMovieGenres(genresData.genres);

                setMovies([
                    ...popularData.results,
                    ...newData.results
                ]);

                // Popüler türleri belirle
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

                setPopularGenres(sortedGenres.slice(0, 5)); // İlk 5 popüler tür
            } catch (error) {
                console.error("Error fetching movie data: ", error);
            }
        };

        fetchMovies();
    }, []);
console.log(popularGenres)
    return (
        <MovieContext.Provider value={{movies, newMovies, popularMovies, movieGenres, popularGenres}}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieProvider;