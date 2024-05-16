"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Effectively",
    },
    {
      text: "Sold",
    },
    {
      text: "Millions",
    },
    {
      text: "[Worldwide]",
      className: "text-black-50 dark:text-black",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[15rem]  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
