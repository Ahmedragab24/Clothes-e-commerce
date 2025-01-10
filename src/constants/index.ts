import { colorsType, Product, sizesType, subcategoriesType } from "@/type";
import {
  RiFacebookBoxFill,
  RiWhatsappFill,
  RiInstagramFill,
  RiTwitterFill,
} from "react-icons/ri";

export const NavLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Man Category",
    url: "/man",
  },
  {
    title: "Women Category",
    url: "/women",
  },
];

export const slides = [
  {
    id: "slide1",
    src: "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736292971/Gray_Minimalist_New_Collection_Banner_1_yhc9no.jpg",
    alt: "Slide 1",
    title: "Welcome to",
    suTitle: "Vezura!",
    description:
      "We are here to bring you the latest fashion trends and the most beautiful designs that match your refined taste. At Vezura, we believe that clothing is more than just an outfit; it's a way to express your personality and style. Enjoy an unparalleled shopping experience with a wide range of fashion for men, women, and children, where you'll find everything you need to make your day special and more stylish.",
    offer: "up to 50% off",
    btn: "Shop Now",
    link: "/#products",
    socialLink: [
      RiFacebookBoxFill,
      RiWhatsappFill,
      RiInstagramFill,
      RiTwitterFill,
    ],
  },
  {
    id: "slide2",
    src: "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736468978/Gray_Minimalist_New_Collection_Banner_3_bgkrbq.jpg",
    alt: "Slide 2",
    suTitle: "Special offer",
    description:
      "There is a collection of children's clothing with high quality, modern designs and reasonable prices.",
    offer: "up to 50% off",
    btn: "Shop Now",
    link: "/#",
    socialLink: [
      RiFacebookBoxFill,
      RiWhatsappFill,
      RiInstagramFill,
      RiTwitterFill,
    ],
  },
  {
    id: "slide3",
    src: "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736472950/Gray_Minimalist_New_Collection_Banner_4_nt8c43.jpg",
    alt: "Slide 3",
    suTitle: "Special offer",
    description:
      "The best offers and discounts on shoes (men's - women's - children's), Here you will find everything you are looking for and what suits you with the best quality and best prices",
    offer: "up to 40% off",
    btn: "Shop Now",
    link: "/#",
    socialLink: [
      RiFacebookBoxFill,
      RiWhatsappFill,
      RiInstagramFill,
      RiTwitterFill,
    ],
  },
];

export const categories = [
  {
    name: "Men",
    image:
      "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736130911/Man_fevxt4.png",
    link: "/men",
  },
  {
    name: "Women",
    image:
      "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736130910/Woman_yuahob.png",
    link: "/women",
  },
  {
    name: "Children",
    image:
      "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736130909/Boy_bqwkgq.png",
    link: "/children",
  },
];

// export const offers = [
//   {
//     id: 1,
//     title: "Premium Headphones",
//     description: "Immersive sound experience with noise cancellation",
//     image:
//       "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736143479/%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_800_x_704_%D8%A8%D9%8A%D9%83%D8%B3%D9%84_eycfld.png",
//     price: 199.99,
//   },
//   {
//     id: 2,
//     title: "Smart Watch",
//     description: "Track your fitness and stay connected on the go",
//     image:
//       "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736143475/%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_800_x_704_%D8%A8%D9%8A%D9%83%D8%B3%D9%84_4_wnqglb.png",
//     price: 149.99,
//   },
//   {
//     id: 3,
//     title: "4K Ultra HD TV",
//     description: "Stunning picture quality for your home entertainment",
//     image:
//       "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736143477/%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_800_x_704_%D8%A8%D9%8A%D9%83%D8%B3%D9%84_2_mpvnfx.png",
//     price: 799.99,
//   },
//   {
//     id: 4,
//     title: "Wireless Earbuds",
//     description: "Crystal clear audio in a compact, wireless design",
//     image:
//       "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736143476/%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_800_x_704_%D8%A8%D9%8A%D9%83%D8%B3%D9%84_1_ddqt4v.png",
//     price: 129.99,
//   },
//   {
//     id: 5,
//     title: "Gaming Console",
//     description: "Next-gen gaming with stunning graphics and fast load times",
//     image:
//       "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736143476/%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_800_x_704_%D8%A8%D9%8A%D9%83%D8%B3%D9%84_3_cydztb.png",
//     price: 499.99,
//   },
// ];

export const ads = [
  {
    id: 1,
    title: "Summer Collection",
    description: "Get 30% off on all summer wear",
    image:
      "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736181951/Black_and_Yellow_Modern_Cyber_Monday_Banner_jjuep1.jpg",
    link: "/summer-collection",
  },
  {
    id: 2,
    title: "New Arrivals",
    description: "Check out our latest fashion trends",
    image:
      "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736181955/Black_and_Yellow_Modern_Cyber_Monday_Banner_1_ohlp27.jpg",
    link: "/new-arrivals",
  },
  {
    id: 3,
    title: "Limited Time Offer",
    description: "Buy one, get one 50% off on selected items",
    image:
      "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736181949/Black_and_Yellow_Modern_Cyber_Monday_Banner_2_ltjkkd.jpg",
    link: "/special-offers",
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Basic Tee",
    description:
      "Sdvsae ljqekfjqlkjefqklfhkqlj flkqjdf qfjekfb qkwjfqblkjfqbwlkfjbqlkfjekjfqbfjkwjbfbf   ewjbf kewjf qkjbfq wkejfbqekjf",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736143479/%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_800_x_704_%D8%A8%D9%8A%D9%83%D8%B3%D9%84_eycfld.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 35,
    PricePerQuantity: 35,
    color: ["Black", "White"],
    size: ["M", "L", "XL"],
    category: {
      mainCategory: "Child",
      subCategory: ["All", "Blazers"],
    },
    discount: 10,
    userQuantity: 1,
    special: true,
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736143475/%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_800_x_704_%D8%A8%D9%8A%D9%83%D8%B3%D9%84_4_wnqglb.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 255,
    PricePerQuantity: 255,
    color: ["Red", "Blue", "Grey"],
    size: ["S", "M", "L", "XXL"],
    category: {
      mainCategory: "Man",
      subCategory: ["All", "Shoes"],
    },
    userQuantity: 1,
    newProduct: true,
    special: true,
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736143477/%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_800_x_704_%D8%A8%D9%8A%D9%83%D8%B3%D9%84_2_mpvnfx.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 255,
    PricePerQuantity: 255,
    color: ["Beige", "Navy", "White", "Red"],
    size: ["S", "M", "L", "XXL"],
    category: {
      mainCategory: "Child",
      subCategory: ["All", "Accessories"],
    },
    discount: 25,
    userQuantity: 1,
    special: true,
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736143476/%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_800_x_704_%D8%A8%D9%8A%D9%83%D8%B3%D9%84_3_cydztb.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 255,
    PricePerQuantity: 255,
    color: ["Red"],
    size: ["S", "M", "L", "XXL"],
    category: {
      mainCategory: "Woman",
      subCategory: ["All", "Shirts"],
    },
    discount: 25,
    userQuantity: 1,
    special: true,
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736143479/%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_800_x_704_%D8%A8%D9%8A%D9%83%D8%B3%D9%84_eycfld.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 35,
    PricePerQuantity: 35,
    color: ["Black"],
    size: ["S", "M", "L", "XXL"],
    category: {
      mainCategory: "Man",
      subCategory: ["All", "Knitwear"],
    },
    discount: 10,
    userQuantity: 1,
  },
  {
    id: 6,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736143475/%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_800_x_704_%D8%A8%D9%8A%D9%83%D8%B3%D9%84_4_wnqglb.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 255,
    PricePerQuantity: 255,
    color: ["Red"],
    size: ["S", "M", "L", "XXL"],
    category: {
      mainCategory: "Man",
      subCategory: ["All", "Trousers"],
    },
    userQuantity: 1,
    newProduct: true,
    special: true,
  },
  {
    id: 7,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736143477/%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_800_x_704_%D8%A8%D9%8A%D9%83%D8%B3%D9%84_2_mpvnfx.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 255,
    PricePerQuantity: 255,
    color: ["Red"],
    size: ["S", "M", "L", "XXL"],
    category: {
      mainCategory: "Woman",
      subCategory: ["All", "Shirts"],
    },
    discount: 25,
    userQuantity: 1,
  },
  {
    id: 8,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dk4yvlwr0/image/upload/v1736143476/%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_800_x_704_%D8%A8%D9%8A%D9%83%D8%B3%D9%84_3_cydztb.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 255,
    PricePerQuantity: 255,
    color: ["Red"],
    size: ["S", "M", "L", "XXL"],
    category: {
      mainCategory: "Man",
      subCategory: ["All", "Blazers"],
    },
    discount: 25,
    userQuantity: 1,
    newProduct: true,
  },
];

export const SubcategoriesAll: subcategoriesType[] = [
  "All",
  "Blazers",
  "Trousers",
  "Shirts",
  "Knitwear",
  "Shoes",
  "Accessories",
];

export const SubcategoriesMan: subcategoriesType[] = [
  "All",
  "Blazers",
  "Shirts",
  "Knitwear",
  "Shoes",
];

export const SubcategoriesWomen: subcategoriesType[] = [
  "All",
  "Blazers",
  "Trousers",
  "Shirts",
  "Knitwear",
  "Shoes",
  "Accessories",
];

export const SubcategoriesChild: subcategoriesType[] = [
  "All",
  "Blazers",
  "Trousers",
  "Shirts",
  "Knitwear",
  "Shoes",
  "Accessories",
];

export const colors: colorsType[] = [
  "Black",
  "White",
  "Grey",
  "Navy",
  "Beige",
  "Brown",
  "Blue",
  "Orange",
  "Green",
  "Yellow",
  "Sky",
  "Red",
];

export const sizes: sizesType[] = ["XS", "S", "M", "L", "XL", "XXL"];

// export const UserProducts = {
//   ...products,
//   quantity: 1,
// };
