const WatchListReducer = (state, action) => {
    const isMovieExist = state.watchlist.some(movie => movie.id === action.payload.id);
    const isShowExist = state.watchlist.some(shows => shows.id === action.payload.id);
    switch (action.type) {
        case "TOGGLE_WATCHLIST": {
            return {
                ...state,
                watchlist: isMovieExist
                    ? state.watchlist.filter(movie => movie.id !== action.payload.id)
                    : [...state.watchlist, action.payload]
            }
        }
    }
}

export default WatchListReducer;