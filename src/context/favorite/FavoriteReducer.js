const FavoriteReducer = (state, action) => {
    const movieExists = state.favoriteMovies.some(movie => movie.id === action.payload.id);
    const serieExists = state.favoriteSeries.some(series => series.id === action.payload.id);
    switch (action.type) {
        case "TOGGLE_FAVOURITE_MOVIE":
            return {
                ...state,
                favoriteMovies: movieExists
                    ? state.favoriteMovies.filter(movie => movie.id !== action.payload.id)
                    : [...state.favoriteMovies, action.payload]
            };
        case "TOGGLE_FAVOURITE_SERIE":
            return {
                ...state,
                favoriteSeries: serieExists
                    ? state.favoriteSeries.filter(series => series.id !== action.payload.id)
                    : [...state.favoriteSeries, action.payload]
            };
        default:
            return state;
    }
};

export default FavoriteReducer;