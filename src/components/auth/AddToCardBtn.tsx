import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  AddingToCart,
  RemovingToCart,
} from "@/store/Features/ShoppingCart/ShoppingCart";
import { Product } from "@/type";
import { RootState } from "@/store/store";
import { CheckCheck } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { RiShoppingBag4Fill, RiShoppingBag4Line } from "react-icons/ri";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IProps {
  product: Product;
  typeBtn: "Icon" | "Button";
}

const AddToCartBtn = ({ product, typeBtn }: IProps) => {
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
    <>
      {typeBtn == "Icon" && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size={"icon"}
                className={`absolute z-10 flex items-center justify-center w-10 h-10 transition-transform transform rounded-full shadow-lg top-2 right-4 group-hover:scale-110 ${
                  isInCart
                    ? "bg-secondary text-white hover:bg-destructive"
                    : "bg-white text-black"
                }`}
                aria-label="Add to Cart"
                onClick={handleAddToCart}
              >
                {isInCart ? (
                  <RiShoppingBag4Fill size={24} className="text-primary" />
                ) : (
                  <RiShoppingBag4Line className="relative" size={24} />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {isInCart ? "Remove to Shopping Bag" : "Add to Shopping Bag"}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      {typeBtn == "Button" && (
        <Button
          variant={`${isInCart ? "secondary" : "default"}`}
          onClick={handleAddToCart}
          className="gap-1 px-2"
        >
          {isInCart ? (
            <CheckCheck size={16} />
          ) : (
            <RiShoppingBag4Line size={16} />
          )}
          <span>{isInCart ? "in shopping bag" : "Add to Bag"}</span>
        </Button>
      )}
    </>
  );
};

export default AddToCartBtn;
