export const formatPrice = (price: number) => `$${price.toFixed(2)}`;

export const calculateDiscountedPrice = (price: number, discount: number) => {
  return price - (price * discount) / 100;
};
