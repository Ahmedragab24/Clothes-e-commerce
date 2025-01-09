import { RootState } from "@/store/store";
import { Product } from "@/type";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ShoppingCartState {
  products: Product[];
}

// Helper function to get initial cart from localStorage
const getInitialCart = (): Product[] => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("AddCart") ?? "[]");
  }
  return [];
};

// Define the initial state using that type
const initialState: ShoppingCartState = {
  products: getInitialCart(),
};

export const ShoppingCartSlice = createSlice({
  name: "ShoppingCart",
  initialState,
  reducers: {
    // Add product to cart
    AddingToCart: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
      localStorage.setItem("AddCart", JSON.stringify(state.products));
    },

    // Remove product from cart by ID
    RemovingToCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("AddCart", JSON.stringify(state.products));
    },

    // Clear entire cart
    ClearingCart: (state) => {
      state.products = [];
      localStorage.removeItem("AddCart");
    },

    // UpdateQuantity For UserProduct
    updateProductQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number; price: number }>
    ) => {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (product) {
        product.userQuantity = action.payload.quantity;
        product.PricePerQuantity = action.payload.price;

        localStorage.setItem("AddCart", JSON.stringify(state.products));
      }
    },
  },
});

export const {
  AddingToCart,
  RemovingToCart,
  ClearingCart,
  updateProductQuantity,
} = ShoppingCartSlice.actions;

export const selectCart = (state: RootState) => state.shoppingCart.products;

export default ShoppingCartSlice.reducer;
