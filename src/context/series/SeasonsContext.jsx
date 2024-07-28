import {useState, useEffect, createContext} from "react";

export const SeasonsContext = createContext({
    seasons: [],
    episodes: [],
    fetchSeasons: (id) => {
    },
    fetchEpisodes: (id) => {
    }
});

const SeasonsProvider = ({children}) => {
    const [seasons, setSeasons] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const apiKey = '286a82355468525bb9e08f91eac5c6dc';
    const baseUrl = 'https://api.themoviedb.org/3/';

    return (
        <SeasonsContext.Provider value={{seasons, episodes}}>
            {children}
        </SeasonsContext.Provider>
    )
}

export default SeasonsProvider;