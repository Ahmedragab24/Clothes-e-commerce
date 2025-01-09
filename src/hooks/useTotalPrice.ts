import { Product } from "@/type";

export const useTotalPrice = (products: Product[]): number => {
  return products.reduce((totalPrice, product) => {
    const discount = product.discount
      ? (product.PricePerQuantity * product.discount) / 100
      : 0;
    return totalPrice + (product.PricePerQuantity || 0) - discount;
  }, 0);
};

export const useTotalNoDiscount = (products: Product[]): number => {
  return products.reduce((totalPrice, product) => {
    return totalPrice + (product.PricePerQuantity || 0);
  }, 0);
};
