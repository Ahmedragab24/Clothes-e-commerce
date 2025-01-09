import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { RiShoppingBag4Line } from "react-icons/ri";
import ShoppingCartSheet from "@/components/auth/ShoppingCartSheet";

const ShoppingCard = () => {
  const { products } = useAppSelector((state: RootState) => state.shoppingCart);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    setProductCount(products.length);
  }, [products]);

  return (
    <ShoppingCartSheet>
      <Button
        variant={"ghost"}
        size="icon"
        className="relative text-black"
        aria-label={`Shopping cart with ${productCount} items`}
      >
        <RiShoppingBag4Line className="w-6 h-6 navIcon" />
        {productCount > 0 && (
          <span className="absolute flex items-center justify-center w-4 h-4 text-xs font-bold rounded-full -top-1 -right-1 bg-primary text-primary-foreground">
            {productCount > 99 ? "99+" : productCount}
          </span>
        )}
      </Button>
    </ShoppingCartSheet>
  );
};

export default ShoppingCard;
