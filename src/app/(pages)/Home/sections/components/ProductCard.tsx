"use client";

import React from "react";
import type { Product as ProductType } from "@/type";
import Image from "next/image";
import {
  calculateDiscountedPrice,
  formatPrice,
} from "@/hooks/UseDiscountPrice";
import { Metadata } from "next";
import AddToCardBtn from "@/components/auth/AddToCardBtn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "product",
  description: "Generated by create next app",
};

interface IProps {
  product: ProductType;
}

const ProductCard = ({ product }: IProps) => {
  return (
    <Link
      href={`/Products/${product.id}`}
      key={product.id}
      className="relative group"
    >
      <div className="relative card_Product">
        <Image
          width={400}
          height={400}
          alt={product.imageAlt}
          src={product.imageSrc}
          loading="lazy"
          className="image_product"
        />

        {product.discount && (
          <div className="absolute z-10 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full top-2 left-2">
            {product.discount}% OFF
          </div>
        )}

        {/* Circular Add to Cart Button */}
        <div className="">
          <AddToCardBtn typeBtn="Icon" product={product} />
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <div>
          <h3 className="text-lg text-muted-foreground">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mt-1 text-sm text-white">
            <h4 className="inline-block px-2 py-1 font-medium rounded-full bg-black/15 drop-shadow-md">
              {product.category.mainCategory}
            </h4>
            <h4 className="inline-block px-2 py-1 font-medium rounded-full bg-black/15 drop-shadow-md">
              {product.category.subCategory[1]}
            </h4>
          </div>
        </div>
        <div className="flex items-center mt-2">
          {product.discount ? (
            <>
              <p className="text-lg font-semibold text-red-500 drop-shadow-md">
                {formatPrice(
                  calculateDiscountedPrice(product.price, product.discount)
                )}
              </p>
              <p className="ml-2 text-sm line-through text-muted-foreground">
                {formatPrice(product.price)}
              </p>
            </>
          ) : (
            <p className="text-lg font-semibold text-foreground drop-shadow-md">
              {formatPrice(product.price)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
