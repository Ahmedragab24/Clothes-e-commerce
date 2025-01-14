"use client";

import { categories } from "@/constants";
import { FilteringMainCategory } from "@/store/Features/FilteringProducts/Filtering";
import { useAppDispatch } from "@/store/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  const dispatch = useAppDispatch();

  return (
    <section className="container px-4 py-16 mx-auto">
      <h2 className="sectionTitle">Our Collections</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            href={"/Products"}
            key={category.name}
            className="group"
            onClick={() => dispatch(FilteringMainCategory(category.name))}
          >
            <motion.div
              className="relative flex justify-center overflow-hidden rounded-lg shadow-lg "
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                loading="lazy"
                src={category.image}
                alt={category.name}
                width={500}
                height={700}
                className="object-cover w-[70%] h-auto transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="mb-2 text-2xl font-semibold">{category.name}</h3>
                <span className="inline-block px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full bg-primary text-secondary drop-shadow-lg group-hover:bg-secondary group-hover:text-primary">
                  Shop Now
                </span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
