import React from "react";
import Hero from "./sections/Hero";
import CategoriesSection from "./sections/CategoriesSection";
import SpecialSection from "./sections/SpecialSection";
import AdBannerSection from "./sections/BannerSection";
import ProductsSection from "./sections/ProductsSection";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <SpecialSection />
      <AdBannerSection />
      <ProductsSection />
    </>
  );
};

export default Home;
