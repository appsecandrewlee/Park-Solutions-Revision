"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

import product from "../public/product.png";


const content = [
  {
    title: "Quality and Service",
    description:
      "We are committed to exceptional quality and service, ensuring that our products enhance your guests' experience and leave a lasting impression.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Quality and Service
      </div>
    ),
  },
  {
    title: "Unique Merchandise",
    description:
      "At Park Solution, we design unique, high-quality merchandise that captures the essence of your amusement park, resonating with visitors of all ages",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image unoptimized
          src={product}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Delicious Candies",
    description:
      "We craft a variety of delectable candies, from classic favorites to innovative creations, adding a sweet experience to your park's offerings.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Delicious Candies 
      </div>
    ),
  },
  {
    title: "One-Stop Destination",
    description:
      "Experience the magic with Park Solution, your go-to partner for enchanting merchandise and irresistible candies in the world of amusement parks.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        One-Stop Destination
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
