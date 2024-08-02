const FavoriteReducer = (state, action) => {
    const isMovieExist = state.favoriteMovies.some(movie => movie.id === action.payload.id);
    const isSeriesExist = state.favoriteSeries.some(series => series.id === action.payload.id);

    switch (action.type) {
        case "SET_FAVOURITE_MOVIES":
            return {
                ...state,
                favoriteMovies: action.payload
            };
        case "SET_FAVOURITE_SERIES":
            return {
                ...state,
                favoriteSeries: action.payload
            };
        case "TOGGLE_FAVOURITE_MOVIE":
            return {
                ...state,
                favoriteMovies: isMovieExist
                    ? state.favoriteMovies.filter(movie => movie.id !== action.payload.id)
                    : [...state.favoriteMovies, action.payload]
            };
        case "TOGGLE_FAVOURITE_SERIE":
            return {
                ...state,
                favoriteSeries: isSeriesExist
                    ? state.favoriteSeries.filter(series => series.id !== action.payload.id)
                    : [...state.favoriteSeries, action.payload]
            };
        default:
            return state;
    }
};

export default FavoriteReducer;