"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BiSad } from "react-icons/bi";
import CircleLight from "@/components/shard/CircleLight";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <CircleLight type="Yellow" />
      <CircleLight type="Sky" />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center"
      >
        <BiSad className="w-24 h-24 mb-4 text-red-500" />
        <h1 className="mb-2 text-6xl font-bold text-gray-800">404</h1>
        <p className="mb-6 text-lg text-gray-600">
          Sorry, the page you are looking for doesn&apos;t exist.
        </p>
        <Link href="/">
          <Button variant={"default"}>Back to Shop</Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
