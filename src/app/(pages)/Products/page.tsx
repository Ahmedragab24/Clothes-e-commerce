"use client";

import React, { useMemo } from "react";
import FilterSidebar from "./components/FilterSideBar";
import ProductGrid from "./components/ProductsGrid";
import { products } from "@/constants";
import { useAppSelector } from "@/store/hooks";

const ProductsPage = () => {
  const { MainCategory, SubCategory, Colors, Sizes } = useAppSelector(
    (state) => state.filtering
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (
        MainCategory !== "All" &&
        product.category.mainCategory !== MainCategory
      ) {
        return false;
      }

      if (
        SubCategory !== "All" &&
        !product.category.subCategory.includes(SubCategory)
      ) {
        return false;
      }

      if (
        Colors.length > 0 &&
        !Colors.some((color) => product.color?.includes(color))
      ) {
        return false;
      }

      if (
        Sizes.length > 0 &&
        !Sizes.some((size) => product.size.includes(size))
      ) {
        return false;
      }

      return true;
    });
  }, [MainCategory, SubCategory, Colors, Sizes]);

  return (
    <div className="container section">
      <h1 className="mt-5 !mb-2 sectionTitle">Our Collection</h1>
      <div className="flex flex-col gap-8 lg:flex-row">
        <FilterSidebar />
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
