"use client";

import React from "react";
import { offers } from "@/constants";
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

const OfferSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="sectionBg">
      <div className="container mx-auto">
        <h2 className="sectionTitle !text-foreground">Featured Products</h2>

        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          setApi={setApi}
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="flex justify-center pb-16">
            {offers.map(({ id, title, description, image, price }) => (
              <CarouselItem key={id}>
                <CardFeatured
                  title={title}
                  description={description}
                  image={image}
                  price={price}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="py-2 text-sm text-center text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
