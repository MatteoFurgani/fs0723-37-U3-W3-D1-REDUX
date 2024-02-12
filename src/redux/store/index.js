import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../reducers";
import favoritesReducer from "../reducers/favoritesSlice";

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    favorites: favoritesReducer,
  },
});

export default store;
