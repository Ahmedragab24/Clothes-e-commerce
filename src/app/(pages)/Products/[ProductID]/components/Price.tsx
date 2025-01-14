import {
  calculateDiscountedPrice,
  formatPrice,
} from "@/hooks/UseDiscountPrice";
import { Product } from "@/type";
import React from "react";

interface IProps {
  productInCart: Product | undefined;
  productDetails: Product;
  price: number;
}

const Price = ({ productDetails, productInCart, price }: IProps) => {
  return (
    <div className="flex items-center gap-3">
      {productInCart ? (
        productInCart.discount ? (
          <>
            <p className="font-semibold text-red-500 text-xl drop-shadow-md">
              {formatPrice(
                calculateDiscountedPrice(
                  productInCart.PricePerQuantity,
                  productInCart.discount
                )
              )}
            </p>
            <p className="text-md line-through text-muted-foreground">
              {formatPrice(productInCart.PricePerQuantity)}
            </p>
            <div className="px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full top-2 left-2">
              {productInCart.discount}% OFF
            </div>
          </>
        ) : (
          <p className="font-semibold text-xl text-foreground drop-shadow-md">
            {formatPrice(productInCart.PricePerQuantity)}
          </p>
        )
      ) : productDetails.discount ? (
        <>
          <p className="font-semibold text-red-500 text-xl drop-shadow-md">
            {formatPrice(
              calculateDiscountedPrice(price, productDetails.discount)
            )}
          </p>
          <p className="text-md line-through text-muted-foreground">
            {formatPrice(price)}
          </p>
          <div className="px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full top-2 left-2">
            {productDetails.discount}% OFF
          </div>
        </>
      ) : (
        <p className="font-semibold text-xl text-foreground drop-shadow-md">
          {formatPrice(price)}
        </p>
      )}
    </div>
  );
};

export default Price;
