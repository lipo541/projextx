import { configureStore } from "@reduxjs/toolkit"; 
import categoriesReducer from "./categories";
// import yourMiddleware from './yourMiddleware';

const Store = configureStore({
    reducer: {
        categories: categoriesReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(yourMiddleware),
})

export default Store;
