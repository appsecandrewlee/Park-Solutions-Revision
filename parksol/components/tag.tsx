import React from "react";

import { tagsData } from "@/lib/data";
export default function Tags() {
  return (
    <section style={{ marginTop: "10px" }}>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
        {tagsData.map((tagging, index) => (
          <li
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
            key={index}
          >
            {tagging}
          </li>
        ))}
      </ul>
    </section>
  );
}
