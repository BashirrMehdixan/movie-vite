import {useState, useEffect, createContext} from "react";
import axios from "axios";

export const SeasonsContext = createContext({
    seasons: [],
    episodes: [],
    fetchSeasons: (id) => {
    },
    fetchEpisodes: (id, season) => {
    }
});

const SeasonsProvider = ({children}) => {
    const [seasons, setSeasons] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const apiKey = '286a82355468525bb9e08f91eac5c6dc';
    const apiUrl = 'https://api.themoviedb.org/3/';

    const fetchSeasons = (id) => {
        try {
            axios.get(`${apiUrl}tv/${id}?api_key=${apiKey}&language=en-US`)
                .then(result => setSeasons(result.data.seasons));
        } catch (e) {
            console.log(e.message);
        }
    }
    const fetchEpisodes = async (id, seasonCount) => {
        try {
            const allEpisodes = [];
            for (let i = 1; i < seasonCount; i++) {
                const {data} = await axios.get(
                    `${apiUrl}tv/${id}/season/${i}?api_key=${apiKey}&language=en-US`
                );
                allEpisodes.push(...data.episodes);
            }
            setEpisodes(allEpisodes);
        } catch (error) {
            console.error("Error fetching episodes:", error);
        }
    };
    return (
        <SeasonsContext.Provider value={{seasons, episodes, fetchSeasons, fetchEpisodes}}>
            {children}
        </SeasonsContext.Provider>
    )
}

export default SeasonsProvider;