import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import HeroOverlay from "@/components/HeroOverlay";
import AboutOverlay from "@/components/AboutOverlay";
import PractiseAreas from "@/components/PractiseAreas";
import PractiseOverlay from "@/components/PractiseOverlay";
import CallToAction from "@/components/CallToAction";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HeroOverlay />
      <About />
      <AboutOverlay />
      <PractiseAreas />
      <PractiseOverlay />
      <CallToAction />
      <Map />
      <Footer />
    </main>
  );
}
