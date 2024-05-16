import Hero from "@/components/hero";
import Divide from "@/components/divide";
import { ParallaxScrollSecondDemo } from "@/components/product";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <ParallaxScrollSecondDemo />

      <Divide />
    </main>
  );
}
