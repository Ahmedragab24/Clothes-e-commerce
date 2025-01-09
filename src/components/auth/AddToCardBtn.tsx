import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { BiCartAdd } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  AddingToCart,
  RemovingToCart,
} from "@/store/Features/ShoppingCart/ShoppingCart";
import { Product } from "@/type";
import { RootState } from "@/store/store";
import { CheckCheck } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface IProps {
  product: Product;
}

const AddToCartBtn = ({ product }: IProps) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state: RootState) => state.shoppingCart);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productExists = products.some((item) => item.id === product.id);
    setIsInCart(productExists);
  }, [products, product.id]);

  const handleAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    if (isInCart) {
      dispatch(RemovingToCart(product.id));
      toast({
        title: "Product removed",
        description: `"${product.name}" has been removed from your cart.`,
        variant: "destructive",
      });
    } else {
      dispatch(AddingToCart(product));
      toast({
        title: "Product added",
        description: `"${product.name}" has been added to your cart.`,
        variant: "default",
      });
    }
  };

  return (
    <Button
      className={`absolute z-10 flex items-center justify-center w-10 h-10 transition-transform transform rounded-full shadow-lg top-2 right-4 group-hover:scale-110 ${
        isInCart
          ? "bg-primary text-white hover:bg-red-500"
          : "bg-white text-black"
      }`}
      aria-label="Add to Cart"
      onClick={handleAddToCart}
    >
      {isInCart ? <CheckCheck size={24} /> : <BiCartAdd size={24} />}
    </Button>
  );
};

export default AddToCartBtn;
