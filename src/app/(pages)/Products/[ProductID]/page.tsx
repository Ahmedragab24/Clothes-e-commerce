import React from "react";
import ProductDetails from "./components/ProductDetails";
import CircleLight from "@/components/shard/CircleLight";

const ProductPage = () => {
  return (
    <section className="section">
      <CircleLight type="Yellow" />
      <CircleLight type="Sky" />
      <ProductDetails />
    </section>
  );
};

export default ProductPage;
