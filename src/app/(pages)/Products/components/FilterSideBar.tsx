"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  colors,
  sizes,
  SubcategoriesAll,
  SubcategoriesChild,
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
    if (MainCategory === "Child") setSubCategories(SubcategoriesChild);
    if (MainCategory === "Man") setSubCategories(SubcategoriesMan);
    if (MainCategory === "Woman") setSubCategories(SubcategoriesWomen);
  }, [MainCategory]);

  return (
    <motion.aside
      className="w-full p-4 bg-white border rounded-lg shadow-md lg:w-64"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-6 text-2xl font-semibold">Filters</h2>

      <div className="flex flex-col gap-4">
        <div className="flex gap-3">
          <Button
            variant={`${MainCategory === "Man" ? "default" : "outline"}`}
            onClick={() => dispatch(FilteringMainCategory("Man"))}
          >
            Men
          </Button>
          <Button
            variant={`${MainCategory === "Woman" ? "default" : "outline"}`}
            onClick={() => dispatch(FilteringMainCategory("Woman"))}
          >
            Women
          </Button>
          <Button
            variant={`${MainCategory === "Child" ? "default" : "outline"}`}
            onClick={() => dispatch(FilteringMainCategory("Child"))}
          >
            Child
          </Button>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-medium">Category</h3>
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

        <div>
          <h3 className="mb-3 text-lg font-medium">Color</h3>
          <div className="flex flex-wrap gap-2">
            {colors.map((color: colorsType) => (
              <button
                key={color}
                className={`w-8 h-8 rounded-full border-4 ${
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
          <h3 className="text-lg font-medium">Size</h3>
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
      </div>
    </motion.aside>
  );
};

export default FilterSidebar;
