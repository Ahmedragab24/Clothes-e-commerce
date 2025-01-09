import React from "react";
import CircleLight from "@/components/shard/CircleLight";
import Categories from "./components/Categories";

const CategoriesSection = () => {
  return (
    <div className="relative overflow-hidden">
      <CircleLight type="Yellow" />
      <CircleLight type="Sky" />
      <section className="section">
        <Categories />
      </section>
    </div>
  );
};

export default CategoriesSection;
