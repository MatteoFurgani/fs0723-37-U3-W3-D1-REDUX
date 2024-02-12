// import { configureStore } from "@reduxjs/toolkit";
// import jobsReducer from "../reducers";

// const store = configureStore({
//   reducer: {
//     jobs: jobsReducer,
//   },
// });

// export default store;

// redux/store.js
// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../reducers";
import favoritesReducer from "../reducers/favoritesSlice";

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    favorites: favoritesReducer, // Aggiunge il reducer dei preferiti allo store
  },
});

export default store;
