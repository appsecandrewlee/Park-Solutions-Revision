import Hero from "@/components/hero";
import { ParallaxScrollSecondDemo } from "@/components/product";
import Tags from "@/components/tag";
import { TypewriterEffectSmoothDemo } from "../components/process";
import { WobbleCardDemo } from "@/components/certificate";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />

      <ParallaxScrollSecondDemo />
      <Tags />
      <TypewriterEffectSmoothDemo />
      <WobbleCardDemo />
    </main>
  );
}
