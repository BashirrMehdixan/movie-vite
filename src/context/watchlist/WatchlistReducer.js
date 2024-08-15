const WatchListReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_WATCHLIST": {
            if (Array.isArray(action.payload)) {
                return {
                    ...state,
                    watchlist: action.payload
                };
            }

            const isExist = state.watchlist.some(item => item.id === action.payload.id);

            return {
                ...state,
                watchlist: isExist
                    ? state.watchlist.filter(item => item.id !== action.payload.id)
                    : [...state.watchlist, action.payload]
            };
        }
        default:
            return state;
    }
};

export default WatchListReducer;
