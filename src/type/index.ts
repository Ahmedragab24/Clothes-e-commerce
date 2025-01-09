export type Product = {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
  PricePerQuantity: number;
  color?: string;
  size: sizesType[];
  category: {
    mainCategory: mainCategoriesType;
    subCategory: subcategoriesType;
  };
  discount?: number;
  quantity?: number;
  userQuantity?: number;
};

export type mainCategoriesType = "Man" | "Woman" | "child";

export type subcategoriesType =
  | "All"
  | "Blazers"
  | "Trousers"
  | "Shirts"
  | "Knitwear"
  | "Shoes"
  | "Accessories";

export type colorsType =
  | "Black"
  | "Navy"
  | "Grey"
  | "White"
  | "Beige"
  | "Brown";

export type sizesType = "XS" | "S" | "M" | "L" | "XL" | "XXL";

// export type UserShoppingCart = {
//   products: Product[];
//   quantity?: number;
// };
