import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    favoriteMovies: [],
    favoriteShows: []
}

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        setFavoriteMovies: (state, action) => {
            state.favoriteMovies = action.payload
        },
        setFavoriteShows: (state, action) => {
            state.favoriteShows = action.payload
        },
        toggleFavoriteMovie: (state, action) => {
            const index = state.favoriteMovies.findIndex(movie => movie.id === action.payload.id);
            if (index >= 0) {
                state.favoriteMovies.splice(index, 1);
            } else {
                state.favoriteMovies.push(action.payload);
            }
        },
        toggleFavoriteShow: (state, action) => {
            const index = state.favoriteShows.findIndex(show => show.id === action.payload.id);
            if (index >= 0) {
                state.favoriteShows.splice(index, 1);
            } else {
                state.favoriteShows.push(action.payload);
            }
        }
    }
})

export const {setFavoriteMovies, setFavoriteShows, toggleFavoriteMovie, toggleFavoriteShow} = favoriteSlice.actions
export default favoriteSlice.reducer