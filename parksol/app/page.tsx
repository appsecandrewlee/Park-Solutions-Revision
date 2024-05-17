import Hero from "@/components/hero";
import { ProductSection } from "@/components/product";
import Tags from "@/components/tag";
import { TypewriterEffectSmoothDemo } from "../components/process";
import { WobbleCardDemo } from "@/components/certificate";
import { HeroScrollDemo } from "@/components/about";
import  {Contact}  from "@/components/contactform";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <ProductSection />
      <Tags />
      <TypewriterEffectSmoothDemo />
      <WobbleCardDemo />
      <HeroScrollDemo />
    </main>
  );
}
