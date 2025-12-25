import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutStats from "../components/AboutStats";
import VisualPsychology from "../components/VisualPsychology";
import Speakers from "../components/Speakers";
import Timeline from "../components/Timeline";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-[#eb0028] selection:text-white">
      <Navbar />
      <Hero />
      <AboutStats />
      <Speakers />
      <Timeline />
      <Partners />
      <Footer />
    </main>
  );
}
