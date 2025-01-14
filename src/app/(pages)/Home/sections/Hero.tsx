"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { slides } from "@/constants";
import type { Swiper as SwiperType } from "swiper";
import type { NavigationOptions } from "swiper/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<SwiperType>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    if (swiperRef.current) {
      const navigation = swiperRef.current.params
        .navigation as NavigationOptions;
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  useEffect(() => {
    // Check initial screen size
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Change breakpoint as needed
    };

    handleResize(); // Call on mount to set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative">
      {/* BUTTONS */}
      <Button ref={prevRef} className="Btn-swiper left-4">
        ❮
      </Button>
      <Button ref={nextRef} className="Btn-swiper right-4">
        ❯
      </Button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet">${
              index + 1
            }</span>`;
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="w-full h-screen"
        spaceBetween={20}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative overflow-hidden">
            <Image
              width={1440}
              height={700}
              src={isLargeScreen ? slide.largeScreen : slide.smallScreen}
              alt={slide.alt}
              priority={index === 0 && false}
              loading="lazy"
              className={`w-full object-cover h-screen mySwiper ${
                index === 0 && "md:object-[25%]"
              }`}
            />

            <div
              className={`absolute top-[15%] left-11 md:!top-[50%] md:left-16 md:transform md:translate-y-[-50%] flex flex-col gap-2 md:gap-4 ${
                index === 1 &&
                "md:max-w-[60%] md:!top-[50%] md:!left-[50%] md:transform md:translate-x-[-50%] md:translate-y-[-50%] md:items-center md:text-center"
              }`}
            >
              <div
                className={`flex items-center gap-2 ${
                  index === 1 && "md:!flex-col !gap-0"
                }`}
              >
                <h3 className="text-lg md:text-2xl">{slide.title}</h3>
                <h1 className="text-xl font-semibold md:text-3xl text-foreground md:text-secondary drop-shadow-lg">
                  {slide.suTitle}
                </h1>
              </div>
              <p className="md:max-w-md xl:max-w-xl text-sm md:text-lg text-muted-foreground drop-shadow-lg">
                {slide.description}
              </p>
              <h2 className="text-lg font-semibold text-red-500 md:text-3xl md:text-red-600">
                {slide.offer}
              </h2>
              <Link href={slide.link}>
                <Button
                  variant={"secondary"}
                  className="p-2 text-lg md:text-3xl md:p-6 drop-shadow-xl"
                >
                  {slide.btn}
                </Button>
              </Link>
            </div>

            {index === 0 && (
              <div className="hidden  absolute md:flex gap-2 bottom-6 right-2">
                {slide.socialLink.map((Icon, indx) => (
                  <Icon key={indx} className="icon" />
                ))}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
