"use client";

import CircleLight from "@/components/shard/CircleLight";
import { useAppSelector } from "@/store/hooks";
import React, { useEffect, useState } from "react";
import ProductCard from "../../Home/sections/components/ProductCard";
import { RiCreativeCommonsZeroLine } from "react-icons/ri";

const Favorites = () => {
  const { products } = useAppSelector((state) => state.Favorites);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (!products.length) setIsEmpty(true);
    if (products.length) setIsEmpty(false);
  }, [products.length]);

  return (
    <section className="container section">
      <CircleLight type="Yellow" />
      <CircleLight type="Sky" />
      <h2 className="mt-16 sectionTitle">Favorites Page</h2>
      {isEmpty && (
        <div className="flex items-center justify-center h-[50vh] text-4xl text-center">
          <RiCreativeCommonsZeroLine /> Favorites are empty
        </div>
      )}

      {!isEmpty && (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Favorites;
