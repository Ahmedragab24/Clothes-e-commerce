import React from "react";
import Hero from "./sections/Hero";
import CategoriesSection from "./sections/CategoriesSection";
import OfferSection from "./sections/OfferSection";
import AdBannerSection from "./sections/BannerSection";
import ProductsSection from "./sections/ProductsSection";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <OfferSection />
      <AdBannerSection />
      <ProductsSection />
    </>
  );
};

export default Home;
