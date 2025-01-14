import { RootState } from "@/store/store";
import { Product } from "@/type";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface FavoritesProductsState {
  products: Product[];
}

// Helper function to get initial cart from localStorage
const getInitialFavorites = (): Product[] => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("Favorites") ?? "[]");
  }
  return [];
};

// Define the initial state using that type
const initialState: FavoritesProductsState = {
  products: getInitialFavorites(),
};

export const FavoritesSlice = createSlice({
  name: "Favorites",
  initialState,
  reducers: {
    // Add product to Favorites
    AddingToFavorites: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
      localStorage.setItem("Favorites", JSON.stringify(state.products));
    },

    // Remove product from Favorites by ID
    RemovingToFavorites: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("Favorites", JSON.stringify(state.products));
    },

    // Clear entire Favorites
    ClearingFavorites: (state) => {
      state.products = [];
      localStorage.removeItem("Favorites");
    },
  },
});

export const { AddingToFavorites, RemovingToFavorites, ClearingFavorites } =
  FavoritesSlice.actions;

export const selectCart = (state: RootState) => state.Favorites.products;

export default FavoritesSlice.reducer;
