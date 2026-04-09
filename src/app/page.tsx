import Navbar from "@/components/Navbar";
import HeroCanvas from "@/components/HeroCanvas";
import StatsBar from "@/components/StatsBar";
import FeatureSection from "@/components/FeatureSection";
import HorizontalGallery from "@/components/HorizontalGallery";
import FullBleedImage from "@/components/FullBleedImage";
import TechCards from "@/components/TechCards";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <HeroCanvas />
      <StatsBar />
      <FeatureSection />
      <HorizontalGallery />
      <FullBleedImage />
      <TechCards />
      <CTASection />
      <Footer />
    </main>
  );
}
