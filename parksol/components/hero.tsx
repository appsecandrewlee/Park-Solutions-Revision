import React from "react";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-400">
          Park Solutions
        </h1>
        <h1 className="mt-2 text-4xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-black">
          Dive into our amusement park{" "}
        </h1>
        <div className="mt-4">
          <Link href={"#products"}>View hello</Link>
        </div>
      </div>
    </div>
  );
}
