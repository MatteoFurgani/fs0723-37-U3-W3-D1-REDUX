import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action) {
      return {
        ...state,
        favorites: [...state.favorites, action.payload], // Aggiunge un'azienda ai preferiti
      };
    },
    removeFavorite(state, action) {
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite !== action.payload
        ), // Rimuove un'azienda dai preferiti
      };
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
