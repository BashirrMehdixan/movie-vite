const FavouriteReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_FAVOURITE_MOVIES":
            return {
                ...state,
                favouriteMovies: [...state.favouriteMovies, action.payload]
            }
        case "REMOVE_FROM_FAVOURITE_MOVIES":
            return {
                ...state,
                favouriteMovies: state.favouriteMovies.filter(movie => movie.id !== action.payload)
            }
        case "ADD_TO_FAVOURITE_SERIES":
            return {
                ...state,
                favouriteSeries: [...state.favouriteSeries, action.payload]
            }
        case "REMOVE_FROM_FAVOURITE_SERIES":
            return {
                ...state,
                favouriteSeries: state.favouriteSeries.filter(series => series.id !== action.payload)
            }
        default:
            return state
    }
}

export default FavouriteReducer;