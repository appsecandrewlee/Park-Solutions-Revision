import Hero from "@/components/hero";
import { ParallaxScrollSecondDemo } from "@/components/product";
import Tags from "@/components/tag";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <ParallaxScrollSecondDemo />
      <Tags />
    </main>
  );
}
