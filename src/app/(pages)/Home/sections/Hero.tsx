"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { slides } from "@/constants";
import type { Swiper as SwiperType } from "swiper";
import type { NavigationOptions } from "swiper/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<SwiperType>(null);

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

  return (
    <section className="relative">
      {/* BUTTONS */}
      <button ref={prevRef} className="Btn-swiper left-4">
        ❮
      </button>
      <button ref={nextRef} className="Btn-swiper right-4">
        ❯
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet">${
              index + 1
            }</span>`;
          },
        }}
        loop
        className="w-full h-screen"
        spaceBetween={20}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative">
            <Image
              width={1440}
              height={700}
              src={slide.src}
              alt={slide.alt}
              priority={index === 0}
              loading="eager"
              className="w-full mySwiper"
            />

            <div className="absolute top-[30%] left-[8%] flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl">{slide.title}</h3>
                <h1 className="text-3xl font-semibold text-secondary drop-shadow-lg">
                  {slide.suTitle}
                </h1>
              </div>
              <p className="max-w-lg text-lg text-muted-foreground drop-shadow-lg">
                {slide.description}
              </p>
              <h2 className="text-3xl font-semibold text-red-600">
                {slide.offer}
              </h2>
              <Link href={slide.link}>
                <Button
                  variant={"secondary"}
                  className="p-6 text-3xl drop-shadow-xl"
                >
                  {slide.btn}
                </Button>
              </Link>
            </div>

            <div className="absolute flex gap-2 bottom-6 right-2">
              {slide.socialLink.map((Icon, indx) => (
                <Icon key={indx} className="icon" />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
