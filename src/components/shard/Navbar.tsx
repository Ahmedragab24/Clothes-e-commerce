"use client";

import React, { useState, useEffect } from "react";
import UserAvatar from "./components/UserAvatar";
import DropMenuLink from "./components/DropMenuLink";
import Search from "./components/Search";
import ShoppingCard from "./components/ShoppingCard";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-30 w-full ${
        isScroll ? "bg-background shadow-lg" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="container flex items-center justify-between h-14">
        {/* Navbar Start */}
        <div className="flex items-center gap-3">
          <DropMenuLink />
          <Search />
        </div>

        {/* Navbar Center LOGO */}
        <div
          className={`text-3xl font-semibold drop-shadow-lg ${
            isScroll ? "titleBgGradient" : "text-primary"
          }`}
        >
          Vezura
        </div>

        {/* Navbar End */}
        <div className="flex items-center gap-3">
          <ShoppingCard />
          <UserAvatar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
