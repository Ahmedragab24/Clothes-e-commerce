export type Product = {
  id: number;
  name: string;
  description?: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  imagesGroup: string[];
  price: number;
  PricePerQuantity: number;
  color?: colorsType[];
  size: sizesType[];
  features: string[];
  specifications?: Record<string, string>;
  category: {
    mainCategory: mainCategoriesType;
    subCategory: subcategoriesType[];
  };
  discount?: number;
  quantity?: number;
  userQuantity?: number;
  special?: boolean;
  newProduct?: boolean;
};

export type categoriesType = {
  name: mainCategoriesType;
  image: string;
  link: string;
};

export type mainCategoriesType = "All" | "Man" | "Woman" | "Child";

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
  | "Brown"
  | "Red"
  | "Blue"
  | "Orange"
  | "Yellow"
  | "Green"
  | "Sky";

export type sizesType = "XS" | "S" | "M" | "L" | "XL" | "XXL";

// export type UserShoppingCart = {
//   products: Product[];
//   quantity?: number;
// };
