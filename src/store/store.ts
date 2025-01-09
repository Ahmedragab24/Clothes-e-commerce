import { configureStore } from "@reduxjs/toolkit";
import FilteringReducer from "./Features/FilteringProducts/Filtering";
import ShoppingCartReducer from "./Features/ShoppingCart/ShoppingCart";

export const store = configureStore({
  reducer: {
    filtering: FilteringReducer,
    shoppingCart: ShoppingCartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
