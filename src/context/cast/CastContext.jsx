import {useState, useEffect, createContext} from "react";
import axios from "axios";

export const CastContext = createContext({
    casts: [],
    getCasts: (type, id) => {
    },
});

const CastsProvider = ({children}) => {
    const [casts, setCasts] = useState([]);

    const apiUrl = import.meta.env.VITE_APP_BASE_API_URL;
    const apiKey = import.meta.env.VITE_APP_API_KEY;
    const getCasts = async (id, type) => {
        try {
            if (type === "movie") {
                const castsRes = await axios.get(`${apiUrl}movie/${id}/credits?api_key=${apiKey}&language=en-US`)
                    .then(data => setCasts(data.data.cast))
            } else {
                const castsRes = await axios.get(`${apiUrl}tv/${id}/credits?api_key=${apiKey}&language=en-US`)
                    .then(data => setCasts(data.data.cast));
            }
        } catch (error) {
            console.error(error);
        }
        return casts;
    }

    return (
        <CastContext.Provider value={{casts, getCasts}}>
            {children}
        </CastContext.Provider>
    );
};

export default CastsProvider;