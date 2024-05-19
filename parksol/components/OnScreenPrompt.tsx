"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import background1 from "../public/background1.jpg";
import background2 from "../public/background2.jpg";
import background3 from "../public/background3.jpg";
import background4 from "../public/background4.jpg";

const content = [
  {
    title: "Quality and Service",
    description:
      "We are committed to exceptional quality and service, ensuring that our products enhance your guests' experience and leave a lasting impression.",
    content: (
      <Image unoptimized
      src={background1}
      width={300}
      height={300}
      className="h-full w-full object-cover"
      alt="QS background"
    />
    ),
  },
  {
    title: "Unique Merchandise",
    description:
      "At Park Solution, we design unique, high-quality merchandise that captures the essence of your amusement park, resonating with visitors of all ages",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image unoptimized
          src={background2}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="UM background"
        />
      </div>
    ),
  },
  {
    title: "Delicious Candies",
    description:
      "We craft a variety of delectable candies, from classic favorites to innovative creations, adding a sweet experience to your park's offerings.",
    content: (
      <Image unoptimized
      src={background3}
      width={300}
      height={300}
      className="h-full w-full object-cover"
      alt="DC background"
    />
    ),
  },
  {
    title: "One-Stop Destination",
    description:
      "Experience the magic with Park Solution, your go-to partner for enchanting merchandise and irresistible candies in the world of amusement parks.",
    content: (
      <Image unoptimized
      src={background4}
      width={300}
      height={300}
      className="h-full w-full object-cover"
      alt="OSD background"
    />
    ),
  },
  {
    title: "",
    description:
    "",
    content: (
      <Image unoptimized
      src={background4}
      width={300}
      height={300}
      className="h-full w-full object-cover"
      alt="OSD background"
    />
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
