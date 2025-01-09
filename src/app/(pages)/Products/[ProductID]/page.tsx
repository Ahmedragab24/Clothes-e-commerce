"use client";

import { useParams } from "next/navigation";
import React from "react";

const ProductPage = () => {
  const { ProductID } = useParams();

  return (
    <section className="section">
      <div>ProductID Is {ProductID}</div>
    </section>
  );
};

export default ProductPage;
