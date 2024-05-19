"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypeWritingTitle() {
  const words = [
    {
      className: "text-white dark:text-white",

      text: "We",
    },
    {
      className: "text-white dark:text-white",

      text: "Are",
    },
    {
      className: "text-white dark:text-white",

      text: "Professionally",
    },
    {
      text: "Certified",
      className: "text-black-50 dark:text-black",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[15rem]  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
