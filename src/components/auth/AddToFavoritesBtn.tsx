import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Product } from "@/type";
import { RootState } from "@/store/store";
import { toast } from "@/hooks/use-toast";
import { RiHeartAddLine, RiHeartFill } from "react-icons/ri";
import {
  AddingToFavorites,
  RemovingToFavorites,
} from "@/store/Features/FavoritesProducts/Favorites";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IProps {
  product: Product;
}

const AddToCartBtn = ({ product }: IProps) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state: RootState) => state.Favorites);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productExists = products.some((item) => item.id === product.id);
    setIsInCart(productExists);
  }, [products, product.id]);

  const handleAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    if (isInCart) {
      dispatch(RemovingToFavorites(product.id));
      toast({
        title: "Product removed",
        description: `"${product.name}" has been removed from your Favorites.`,
        variant: "destructive",
      });
    } else {
      dispatch(AddingToFavorites(product));
      toast({
        title: "Product added",
        description: `"${product.name}" has been added to your Favorites.`,
        variant: "default",
      });
    }
  };

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size={"icon"}
              className={`absolute z-10 flex items-center justify-center w-10 h-10 transition-transform transform rounded-full shadow-lg top-16 right-4 group-hover:scale-110 ${
                isInCart
                  ? "bg-secondary text-white hover:bg-destructive"
                  : "bg-white text-black"
              }`}
              aria-label="Add to Cart"
              onClick={handleAddToCart}
            >
              {isInCart ? (
                <RiHeartFill size={24} className="text-primary" />
              ) : (
                <RiHeartAddLine className="relative" size={24} />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isInCart ? "Remove to Favorites" : "Add to Favorites"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default AddToCartBtn;
