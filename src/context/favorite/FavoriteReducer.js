const FavoriteReducer = (state, action) => {
    const isMovieExist = state.favoriteMovies.some(movie => movie.id === action.payload.id);
    const isShowExist = state.favoriteShows.some(shows => shows.id === action.payload.id);

    switch (action.type) {
        case "SET_FAVORITE_MOVIES":
            return {
                ...state,
                favoriteMovies: action.payload
            };
        case "SET_FAVORITE_SHOWS":
            return {
                ...state,
                favoriteShows: action.payload
            };
        case "TOGGLE_FAVORITE_MOVIE":
            return {
                ...state,
                favoriteMovies: isMovieExist
                    ? state.favoriteMovies.filter(movie => movie.id !== action.payload.id)
                    : [...state.favoriteMovies, action.payload]
            };
        case "TOGGLE_FAVORITE_SHOW":
            return {
                ...state,
                favoriteShows: isShowExist
                    ? state.favoriteShows.filter(series => series.id !== action.payload.id)
                    : [...state.favoriteShows, action.payload]
            };
        default:
            return state;
    }
};

export default FavoriteReducer;