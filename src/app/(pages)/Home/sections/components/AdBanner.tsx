"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ads } from "@/constants";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const AdBanner = () => {
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAd((prevAd) => (prevAd + 1) % ads.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextAd = () => {
    setCurrentAd((prevAd) => (prevAd + 1) % ads.length);
  };

  const prevAd = () => {
    setCurrentAd((prevAd) => (prevAd - 1 + ads.length) % ads.length);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentAd}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative inset-0"
      >
        <Image
          src={ads[currentAd].image}
          alt={ads[currentAd].title}
          width={1400}
          height={400}
          className="object-cover w-full h-auto"
          priority
        />
        <div className="absolute inset-0 bg-black/50 bg-opacity-40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {ads[currentAd].title}
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8"
          >
            {ads[currentAd].description}
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-200 transition-colors"
            >
              <a href={ads[currentAd].link}>Shop Now</a>
            </Button>
          </motion.div>
        </div>

        <button
          onClick={prevAd}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          aria-label="Previous ad"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        <button
          onClick={nextAd}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          aria-label="Next ad"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
        <div className="absolute - bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {ads.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentAd(index)}
              className={`w-3 h-3 rounded-full ${
                currentAd === index ? "bg-white" : "bg-gray-400"
              } transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
              aria-label={`Go to ad ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AdBanner;
