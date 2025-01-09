import React, { ReactNode, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiShoppingBag4Line } from "react-icons/ri";
import ProductInCart from "./ProductInCart";
import { Button } from "../ui/button";
import { useTotalNoDiscount, useTotalPrice } from "@/hooks/useTotalPrice";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";

interface IProps {
  children: ReactNode;
}

const ShoppingCartSheet = ({ children }: IProps) => {
  const [OpenCart, setOpenCart] = useState(false);
  const { products } = useAppSelector((state) => state.shoppingCart);
  const total = useTotalPrice(products);
  const provision = useTotalNoDiscount(products) - total;

  return (
    <Sheet open={OpenCart} onOpenChange={setOpenCart}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-xl font-semibold text-primary drop-shadow-md">
            shopping bag <RiShoppingBag4Line className="text-secondary" />
          </SheetTitle>
          <SheetDescription className="text-muted-foreground">
            These are your products Complete the purchase process
            <Link href={"#"}>
              <Button variant={"link"} className="!text-lg">
                Buy your purchases now
              </Button>
            </Link>
          </SheetDescription>
        </SheetHeader>

        <ProductInCart setOpenCart={setOpenCart} />

        {total > 0 && (
          <SheetFooter className="absolute bottom-0 left-0 w-full border-t-2 bg-background rounded-t-md">
            <div className="flex justify-between w-full px-6 py-2">
              <h1 className="flex gap-1 text-black text-md">
                Total Price:
                <span className="font-semibold text-red-500">${total}</span>
              </h1>
              {provision > 0 && (
                <h1 className="flex gap-1 text-black text-md">
                  Provided:
                  <span className="font-semibold text-red-500">
                    ${provision}
                  </span>
                </h1>
              )}
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartSheet;
