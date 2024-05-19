"use client";
import React from "react";
import Link from "next/link";
import { BsArrowDown, BsArrowRight, BsTelephone } from "react-icons/bs";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section id="home" className="scroll mt-28">
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <motion.h1
          className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-400"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          This is Park Solutions!
        </motion.h1>
        <motion.h1
          className="mt-4 text-4xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-black"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Where we deliver the Magic to Meeting Delight <br></br> European
          Partnership with Warner Brothers
        </motion.h1>
        <motion.div
          className=" mt-8 flex flex-col sm:flex-row  items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href={"#products"}
            className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
          >
            View Products <BsArrowDown />{" "}
          </Link>
        </motion.div>
      </div>
    </div>
    </section>
  );
}
