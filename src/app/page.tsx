import About from "@/components/About";
import Crops from "@/components/Crops/Crops";
import Hero from "@/components/Hero/Hero";
import ImagesHome from "@/components/ImagesHome";
import Services from "@/components/Services/Services";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Ratings from "@/components/Ratings/Ratings";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Crops />
      <Services />
      <ImagesHome />
      <Ratings />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
