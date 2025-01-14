import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Product } from "@/type";
import { RiStarFill } from "react-icons/ri";
import AddToCartBtn from "@/components/auth/AddToCardBtn";
import Link from "next/link";
import {
  calculateDiscountedPrice,
  formatPrice,
} from "@/hooks/UseDiscountPrice";

interface IProps {
  SpacialProduct: Product;
}

const CardFeatured = ({ SpacialProduct }: IProps) => {
  const { id, name, description, price, imageSrc, imageAlt, discount } =
    SpacialProduct;

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
      className="card group"
    >
      <Link href={`/Products/${id}`}>
        <div className="relative flex justify-center w-full h-56 mb-4 overflow-hidden rounded-lg">
          <Image
            loading="lazy"
            width={400}
            height={500}
            src={imageSrc}
            alt={imageAlt}
            className="w-[70%] object-cover transition-transform duration-300 group-hover:scale-110"
          />

          <div className="absolute left-0">
            <RiStarFill className="text-primary" size={35} />
          </div>
        </div>
        <h3 className="mb-2 text-xl font-semibold">{name}</h3>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </Link>
      <div className="flex items-center justify-between">
        {discount ? (
          <div className="flex items-center gap-1">
            <p className="text-xl font-semibold text-destructive drop-shadow-md">
              {formatPrice(calculateDiscountedPrice(price, discount))}
            </p>
            <p className="text-sm line-through text-muted-foreground">
              {formatPrice(price)}
            </p>
          </div>
        ) : (
          <p className="text-xl font-semibold text-destructive drop-shadow-md">
            {formatPrice(price)}
          </p>
        )}

        <AddToCartBtn typeBtn="Button" product={SpacialProduct} />
      </div>
    </motion.div>
  );
};

export default CardFeatured;
