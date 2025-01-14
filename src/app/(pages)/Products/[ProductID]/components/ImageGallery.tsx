import { Product } from "@/type";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface IProps {
  productDetails: Product;
}

const ImageGallery = ({ productDetails }: IProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    if (productDetails.imagesGroup?.length) {
      setCurrentImageIndex((i) => (i + 1) % productDetails.imagesGroup.length);
    }
  };

  const prevImage = () => {
    if (productDetails.imagesGroup?.length) {
      setCurrentImageIndex(
        (i) =>
          (i - 1 + productDetails.imagesGroup.length) %
          productDetails.imagesGroup.length
      );
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-square">
        {productDetails.imagesGroup?.[currentImageIndex] ? (
          <Image
            src={productDetails.imagesGroup[currentImageIndex]}
            alt={productDetails.imageAlt || "Product Image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
            className="object-cover rounded-lg border-2 shadow-sm"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
            <span>No Image Available</span>
          </div>
        )}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2"
          onClick={prevImage}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex space-x-2">
        {productDetails.imagesGroup?.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden ${
              index === currentImageIndex ? "ring-2 ring-primary" : ""
            }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={80}
              height={80}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
