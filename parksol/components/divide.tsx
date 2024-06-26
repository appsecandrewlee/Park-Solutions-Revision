"use client";
import React from "react";
import { motion } from "framer-motion";
export default function Divide() {
  return (
    <motion.div
      className="bg-gray-500  h-40 w-1 rounded-full hidden sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
