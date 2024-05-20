"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import { StickyScrollRevealDemo } from "./OnScreenPrompt";
import { Contact } from "./contactform";
export function IpadTitle() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll 
        titleComponent={
          <>
          <section id="about" className="scroll-mt-28">
            <h1 className="text-4xl font-semibold text-black dark:text-white"  >
              Park Solutions <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Mission
              </span>
            </h1>
            </section>
          </>
        }
      >
       <StickyScrollRevealDemo/>
      </ContainerScroll>
      <Contact/>
    </div>
      
  );
}

