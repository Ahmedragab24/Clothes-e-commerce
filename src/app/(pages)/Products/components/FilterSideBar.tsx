"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  colors,
  sizes,
  SubcategoriesAll,
  SubcategoriesMan,
  SubcategoriesWomen,
} from "@/constants";
import { colorsType, sizesType, subcategoriesType } from "@/type";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import {
  FilteringColors,
  FilteringMainCategory,
  FilteringSizes,
  FilteringSubCategory,
} from "@/store/Features/FilteringProducts/Filtering";

const FilterSidebar = () => {
  const [SubCategories, setSubCategories] = useState<subcategoriesType[]>();
  const MainCategory = useAppSelector(
    (state: RootState) => state.filtering.MainCategory
  );
  const SubCategory = useAppSelector(
    (state: RootState) => state.filtering.SubCategory
  );
  const Colors = useAppSelector((state: RootState) => state.filtering.Colors);
  const Sizes = useAppSelector((state: RootState) => state.filtering.Sizes);
  const dispatch = useAppDispatch();

  const toggleColor = (color: colorsType) => {
    dispatch(FilteringColors(color));
  };

  const toggleSize = (size: sizesType) => {
    dispatch(FilteringSizes(size));
  };

  useEffect(() => {
    if (MainCategory === "All") setSubCategories(SubcategoriesAll);
    if (MainCategory === "Man") setSubCategories(SubcategoriesMan);
    if (MainCategory === "Woman") setSubCategories(SubcategoriesWomen);
  }, [MainCategory]);

  return (
    <motion.aside
      className="w-full lg:w-64 bg-white p-6 rounded-lg shadow-md"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-6">Filters</h2>

      <div className="flex gap-3">
        <Button onClick={() => dispatch(FilteringMainCategory("All"))}>
          All
        </Button>
        <Button onClick={() => dispatch(FilteringMainCategory("Man"))}>
          Men
        </Button>
        <Button onClick={() => dispatch(FilteringMainCategory("Woman"))}>
          Women
        </Button>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Category</h3>
        <ul>
          {SubCategories?.map((category) => (
            <li key={category} className="mb-2">
              <button
                className={`w-full text-left py-1 px-2 rounded-md transition-colors duration-200 ${
                  SubCategory === category
                    ? "bg-primary text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => dispatch(FilteringSubCategory(category))}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Color</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color: colorsType) => (
            <button
              key={color}
              className={`w-8 h-8 rounded-full border-2 ${
                Colors.includes(color) ? "border-primary" : "border-gray-300"
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
              onClick={() => toggleColor(color)}
              aria-label={`Select ${color} color`}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className={`py-1 px-3 rounded-md border ${
                Sizes.includes(size)
                  ? "bg-primary text-white border-primary"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => toggleSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </motion.aside>
  );
};

export default FilterSidebar;
