import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import FeatureShowcase from "@/components/FeatureShowcase";
import Discovery from "@/components/Discovery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-inter overflow-x-hidden selection:bg-gold/30">
      <Navbar />
      <Hero />
      <Philosophy />
      <FeatureShowcase />
      <Discovery />
      <Footer />
    </main>
  );
}
