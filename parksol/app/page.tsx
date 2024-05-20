import Hero from "@/components/hero";
import { ProductSection } from "@/components/product";
import Tags from "@/components/tag";
import { TypeWritingTitle } from "../components/process";
import { CertificateCards } from "@/components/certificate";
import { IpadTitle } from "@/components/about";
import  {Contact}  from "@/components/contactform";
import { TracingBeam } from "@/components/ui/tracing-beam";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">

      <Hero />
      <ProductSection />
      <Tags />
      <TypeWritingTitle />
      <CertificateCards />
      <IpadTitle />

    </main>
  );
}
