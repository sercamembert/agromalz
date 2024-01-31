import About from "@/components/About";
import Crops from "@/components/Crops/Crops";
import Hero from "@/components/Hero/Hero";
import ImagesHome from "@/components/ImagesHome";
import Services from "@/components/Services/Services";
import Location from "@/components/Location";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Crops />
      <Services />
      <ImagesHome />
      <Location />
    </main>
  );
}
