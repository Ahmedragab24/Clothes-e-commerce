import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

interface IProps {
  title: string;
  description: string;
  image: string;
  price: number;
}

const CardFeatured = ({ title, description, image, price }: IProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <div>
        <div className="relative flex justify-center w-full mb-4 overflow-hidden rounded-lg h-72">
          <Image
            loading="lazy"
            width={400}
            height={500}
            src={image}
            alt={title}
            className="w-[80%] object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold text-secondary">${price}</p>
        <button className="flex items-center px-4 py-2 space-x-2 text-white transition-colors duration-200 rounded-full bg-primary hover:bg-primary/80">
          <ShoppingCart size={16} />
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  );
};

export default CardFeatured;
