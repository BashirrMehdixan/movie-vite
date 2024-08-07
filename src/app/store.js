import {configureStore,applyMiddleware} from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import favoriteReducer from "/src/features/favAction";

export const store = configureStore({
    reducer: {
        favorite: favoriteReducer
    },
    // middleware: applyMiddleware(thunk)
})

