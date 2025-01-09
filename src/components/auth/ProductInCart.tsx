import React from "react";
import {
  RiAddCircleLine,
  RiCloseCircleLine,
  RiIndeterminateCircleLine,
} from "react-icons/ri";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";
import { formatPrice, calculateDiscountedPrice } from "@/hooks/DiscountPrice";
import { Button } from "../ui/button";
import Link from "next/link";
import { RemovingToCart } from "@/store/Features/ShoppingCart/ShoppingCart";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { toast } from "@/hooks/use-toast";
import { updateProductQuantity } from "@/store/Features/ShoppingCart/ShoppingCart";

interface IProps {
  setOpenCart: (isOpen: boolean) => void;
}

const ProductInCart = ({ setOpenCart }: IProps) => {
  const { products } = useAppSelector((state: RootState) => state.shoppingCart);
  const dispatch = useAppDispatch();

  //   Handler Button
  const handleIncrement = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (product && product.userQuantity && product.userQuantity < 15) {
      const newQuantity = product.userQuantity + 1;

      dispatch(
        updateProductQuantity({
          id: productId,
          quantity: newQuantity,
          price: product.price * newQuantity,
        })
      );
    } else {
      toast({
        title: "Operation failure",
        description:
          "You have reached the maximum quantity of the product, which is 15.",
        variant: "destructive",
      });
    }
  };

  const handleDecrement = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (product && product.userQuantity && product.userQuantity > 1) {
      const newQuantity = product.userQuantity - 1;

      dispatch(
        updateProductQuantity({
          id: productId,
          quantity: newQuantity,
          price: product.price * newQuantity,
        })
      );
    } else {
      toast({
        title: "Operation failure",
        description: "You cannot have less than 1 item in the cart.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteProduct = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(RemovingToCart(id));
  };

  return (
    <ScrollArea className="w-full h-screen mt-3">
      <div className="flex flex-col gap-6 p-2">
        {products.length < 1 && (
          <div className="h-[50vh]  text-center flex flex-col justify-center items-center gap-4">
            <p className="max-w-[80%]">
              There are no products added to the shopping cart.
            </p>
            <Link href={"/Products"}>
              <Button onClick={() => setOpenCart(false)}>Shop Now</Button>
            </Link>
          </div>
        )}

        {products?.map((product) => (
          <div key={product.id} className="flex items-center gap-4">
            <Link
              href={`/Products/${product.id}`}
              className="relative duration-300 shadow-sm group rounded-xl hover:shadow-lg"
              onClick={() => setOpenCart(false)}
            >
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                width={200}
                height={200}
                loading="lazy"
                className="duration-300 border rounded-xl w-36 border-primary bg-secondary/10 group-hover:scale-105"
              />

              <RiCloseCircleLine
                className="absolute cursor-pointer top-2 right-2 text-destructive hover:text-red-800 hover:scale-110 hover:drop-shadow-lg"
                onClick={(e) => handleDeleteProduct(e, product.id)}
              />

              <div className="absolute flex justify-center w-6 h-6 rounded-full -top-1 -left-1 bg-primary">
                {product.userQuantity}
              </div>
            </Link>

            <div className="flex flex-col gap-2">
              <h3>{product.name}</h3>

              <div className="flex items-center gap-3">
                {product.discount ? (
                  <>
                    <p className="font-semibold text-red-500 text-md drop-shadow-md">
                      {formatPrice(
                        calculateDiscountedPrice(
                          product.PricePerQuantity,
                          product.discount
                        )
                      )}
                    </p>
                    <p className="text-sm line-through text-muted-foreground">
                      {formatPrice(product.PricePerQuantity)}
                    </p>
                  </>
                ) : (
                  <p className="font-semibold text-md text-foreground drop-shadow-md">
                    {formatPrice(product.PricePerQuantity)}
                  </p>
                )}
              </div>

              <div className="flex">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full group"
                  onClick={() => handleDecrement(product.id)}
                >
                  <RiIndeterminateCircleLine className="!w-5 !h-5 text-primary cursor-pointer group-hover:scale-110" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full group"
                  onClick={() => handleIncrement(product.id)}
                >
                  <RiAddCircleLine className="!w-5 !h-5 text-secondary cursor-pointer group-hover:scale-110" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ProductInCart;
