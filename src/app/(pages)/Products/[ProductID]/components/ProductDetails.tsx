"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateProductQuantity } from "@/store/Features/ShoppingCart/ShoppingCart";
import { Product } from "@/type";
import { products } from "@/constants";
import { toast } from "@/hooks/use-toast";
import AddToCartBtn from "@/components/auth/AddToCardBtn";
import Price from "./Price";
import ImageGallery from "./ImageGallery";

const MAX_QUANTITY = 15;
const MIN_QUANTITY = 1;

const ProductDetails = () => {
  const { ProductID } = useParams();
  const [productDetails, setProductDetails] = useState<Product | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);
  const dispatch = useAppDispatch();

  const productsShoppingCart = useAppSelector(
    (state) => state.shoppingCart.products
  );

  useEffect(() => {
    const product = products.find((p) => p.id === Number(ProductID));
    if (product) {
      setProductDetails(product);
      setQuantity(1);
      setPrice(product?.PricePerQuantity);
    }
  }, [ProductID]);

  const productInCart = productsShoppingCart.find(
    (p) => p.id === Number(ProductID)
  );

  if (!productDetails) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-semibold text-red-500">
          Product not found
        </h1>
      </div>
    );
  }

  const handleIncrement = () => {
    if (
      productInCart &&
      productInCart.userQuantity &&
      productInCart.userQuantity < MAX_QUANTITY
    ) {
      dispatch(
        updateProductQuantity({
          id: productInCart.id,
          quantity: productInCart.userQuantity + 1,
          price: productInCart.price * (productInCart.userQuantity + 1),
        })
      );
    } else if (!productInCart && quantity < MAX_QUANTITY) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      setPrice(productDetails.PricePerQuantity * newQuantity);
    } else {
      toast({
        title: "Operation failure",
        description: `You have reached the maximum quantity of ${MAX_QUANTITY}.`,
        variant: "destructive",
      });
    }
  };

  const handleDecrement = () => {
    if (
      productInCart &&
      productInCart.userQuantity &&
      productInCart.userQuantity > MIN_QUANTITY
    ) {
      dispatch(
        updateProductQuantity({
          id: productInCart.id,
          quantity: productInCart.userQuantity - 1,
          price: productInCart.price * (productInCart.userQuantity - 1),
        })
      );
    } else if (!productInCart && quantity > MIN_QUANTITY) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setPrice(productDetails.PricePerQuantity * newQuantity);
    } else {
      toast({
        title: "Operation failure",
        description: `You cannot have less than ${MIN_QUANTITY} item in the cart.`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <ImageGallery productDetails={productDetails} />

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{productDetails.name}</h1>
          {/* Price */}
          <Price
            productInCart={productInCart}
            productDetails={productDetails}
            price={price}
          />

          {/* Description */}
          <p className="text-gray-600">{productDetails.description}</p>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <span className="font-semibold">Quantity:</span>
            <Button variant="outline" size="icon" onClick={handleDecrement}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="font-semibold">
              {productInCart ? productInCart.userQuantity : quantity}
            </span>
            <Button variant="outline" size="icon" onClick={handleIncrement}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Add to Cart Button */}

          <AddToCartBtn product={productDetails} typeBtn="Button" />

          {/* Features */}
          {productDetails.features?.length > 0 && (
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">Features</h2>
                <ul className="list-disc list-inside space-y-1">
                  {productDetails.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Specifications */}
          {productDetails.specifications && (
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">Specifications</h2>
                <div className="space-y-2">
                  {Object.entries(productDetails.specifications).map(
                    ([key, value], index) => (
                      <div key={index} className="flex justify-between">
                        <span className="font-medium">{key}:</span>
                        <span>{value}</span>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
