import Navbar from "@/components/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import RoadmapPreview from "@/components/landing/RoadmapPreview";
import EarningSection from "@/components/landing/EarningSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <RoadmapPreview />
        <EarningSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
