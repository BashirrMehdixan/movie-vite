import {useEffect, useState, createContext} from "react";
import axios from "axios";

export const SeriesContext = createContext([]);

const SeriesProvider = ({children}) => {
    const api_key = '286a82355468525bb9e08f91eac5c6dc';
    const base_url = 'https://api.themoviedb.org/3/';
    const [tvShows, setTVShows] = useState([]);
    const [series, setSeries] = useState([]);
    const [newSeries, setNewSeries] = useState([]);
    const [popularSeries, setPopularSeries] = useState([]);
    const [topRatedSeries, setTopRatedSeries] = useState([]);
    const [seriesGenres, setSeriesGenres] = useState([]);
    const [popularSeriesGenres, setPopularSeriesGenres] = useState([]);

    useEffect(() => {
        const fetchAllTVShows = async () => {
            let allShows = [];
            let page = 1;
            const totalPages = 500;

            try {
                for (page = 1; page <= totalPages; page++) {
                    const response = await axios.get(`${base_url}discover/tv`, {
                        params: {
                            api_key,
                            page
                        }
                    });
                    allShows = [...allShows, ...response.data.results, ...series];
                }
            } catch (error) {
                console.error("Error fetching TV shows:", error);
            }
        };
        fetchAllTVShows();
        const fetchSeries = async () => {
            try {
                const [newRes, popularRes, ratedRes, genresRes] = await Promise.all([
                    fetch(`${base_url}tv/on_the_air?api_key=${api_key}&page=1`),
                    fetch(`${base_url}tv/popular?api_key=${api_key}&page=1`),
                    fetch(`${base_url}tv/top_rated?api_key=${api_key}&page=1`),
                    fetch(`${base_url}genre/tv/list?api_key=${api_key}`)
                ]);

                const [newData, popularData, ratedData, genresData] = await Promise.all([
                    newRes.json(),
                    popularRes.json(),
                    ratedRes.json(),
                    genresRes.json()
                ]);
                setNewSeries(newData.results);
                setPopularSeries(popularData.results);
                setTopRatedSeries(ratedData.results);

                const allSeries = [
                    ...newData.results,
                    ...popularData.results,
                    ...ratedData.results
                ];

                const uniqueSeries = Array.from(new Set(allSeries.map(series => series.id)))
                    .map(id => allSeries.find(movie => movie.id === id));
                setSeries(uniqueSeries);

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
                setSeriesGenres(genresData.genres);
                setPopularSeriesGenres(sortedGenres.slice(0, 10));
            } catch (error) {
                console.error("Error fetching series data: ", error);
            }
        };
        fetchSeries();
    }, []);

    return (
        <SeriesContext.Provider value={{
            series,
            newSeries,
            popularSeries,
            seriesGenres,
            popularSeriesGenres,
            topRatedSeries,
            tvShows,
        }}>
            {children}
        </SeriesContext.Provider>
    );
};

export default SeriesProvider;