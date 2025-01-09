import { RootState } from "@/store/store";
import {
  colorsType,
  mainCategoriesType,
  sizesType,
  subcategoriesType,
} from "@/type";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface FilterState {
  MainCategory: mainCategoriesType;
  SubCategory: subcategoriesType;
  Colors: colorsType[];
  Sizes: sizesType[];
}

// Define the initial state using that type
const initialState: FilterState = {
  MainCategory: "All",
  SubCategory: "All",
  Colors: [],
  Sizes: [],
};

export const FilteringSlice = createSlice({
  name: "filtering",
  initialState,
  reducers: {
    FilteringMainCategory: (
      state,
      action: PayloadAction<mainCategoriesType>
    ) => {
      state.MainCategory = action.payload;
    },

    FilteringSubCategory: (state, action: PayloadAction<subcategoriesType>) => {
      state.SubCategory = action.payload;
    },

    FilteringColors: (state, action: PayloadAction<colorsType>) => {
      const color = action.payload;
      state.Colors = state.Colors.includes(color)
        ? state.Colors.filter((c) => c !== color)
        : [...state.Colors, color];
    },

    FilteringSizes: (state, action: PayloadAction<sizesType>) => {
      const size = action.payload;
      state.Sizes = state.Sizes.includes(size)
        ? state.Sizes.filter((s) => s !== size)
        : [...state.Sizes, size];
    },
  },
});

export const {
  FilteringMainCategory,
  FilteringSubCategory,
  FilteringColors,
  FilteringSizes,
} = FilteringSlice.actions;

export const selectFilter = (state: RootState) => state.filtering;

export default FilteringSlice.reducer;
