"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Product as ProductType } from "@/type";
import ProductCard from "../../Home/sections/components/ProductCard";

interface ProductGridProps {
  products: ProductType[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [sortBy, setSortBy] = useState("featured");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "priceLowToHigh") return a.price - b.price;
    if (sortBy === "priceHighToLow") return b.price - a.price;
    return 0; // 'featured' sorting
  });

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <p className="text-lg text-muted-foreground">
          {products.length} products
        </p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="featured">Featured</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      </div>
      <motion.div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
    </div>
  );
};

export default ProductGrid;
