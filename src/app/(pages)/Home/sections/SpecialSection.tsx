"use client";

import React from "react";
import { products } from "@/constants";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import CardFeatured from "./components/CardFeatured";
import { Product } from "@/type";

const SpecialSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const SpecialProducts = products.filter(
    (product: Product) => product.special === true
  );

  React.useEffect(() => {
    if (api) {
      setCount(api.scrollSnapList().length);
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    }
  }, [api]);

  return (
    <section className="sectionBg" id="SpecialProducts">
      <div className="container mx-auto">
        <h2 className="sectionTitle !text-foreground">Featured Products</h2>

        {SpecialProducts.length > 0 ? (
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
                playOnInit: true,
              }),
            ]}
            setApi={setApi}
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="flex pb-16">
              {SpecialProducts.map((Products) => (
                <CarouselItem key={Products.id}>
                  <CardFeatured SpacialProduct={Products} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
          <p className="py-8 text-center text-muted-foreground">
            No featured products available.
          </p>
        )}

        <div className="py-2 text-sm text-center text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div>
    </section>
  );
};

export default SpecialSection;
