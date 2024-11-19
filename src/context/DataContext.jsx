import {createContext, useState} from "react";
import axios from "axios";
import instance from "/src/api/api";

export const DataContext = createContext([]);

const DataContextProvider = ({children}) => {
    const baseURL = import.meta.env.VITE_APP_BASE_API_URL;
    const api_key = import.meta.env.VITE_APP_API_KEY;

    // Movies and Tv fetching
    const fetchData = async (endpoint, type, trend = null) => {
        try {
            let response;
            if (trend) {
                response = await axios.get(`${baseURL}${endpoint}/${type}/${trend}?api_key=${api_key}`);
            } else {
                response = await axios.get(`${baseURL}${endpoint}/${type}?api_key=${api_key}`);
            }
            return response.data.results;

        } catch (e) {
            console.error("Error fetching movie data: ", e);
        }
    }

    // Detail fetching
    const getDetail = async (endpoint, id) => {
        const response = await axios.get(`${baseURL}${endpoint}/${id}?api_key=${api_key}`);
        return response.data
    }

    // Genres
    const getGenres = async (endpoint) => {
        const response = await axios.get(`${baseURL}genre/${endpoint}/list?api_key=${api_key}`);
        return response.data.genres;
    }

    // Search
    const fetchSearch = async (keyword) => {
        try {
            const response = await axios.get(`${baseURL}search/multi?query=${keyword}&api_key=${api_key}`);
            return response.data.results;
        } catch (e) {
            console.error("Error fetching movie data: ", e);
        }
    }

    // Episodes
    const getEpisodes = async (id, season_count, season) => {
        let allEpisodes = [];
        for (let i = 1; i <= season_count; i++) {
            const response = await axios.get(`${baseURL}tv/${id}/season/${i}?api_key=${api_key}`);
            allEpisodes = [...allEpisodes, ...response.data.episodes];
        }
        return allEpisodes.filter(episode => episode.season_number === season.season_number);
    }
    return (
        <DataContext.Provider value={{fetchData, fetchSearch, getDetail, getGenres, getEpisodes}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider