import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import HeroSection from "@/features/landing/components/HeroSection";
import FeatureSection from "@/features/landing/components/FeatureSection";
import QuoteSection from "@/features/landing/components/QuoteSection";
import StreakSection from "@/features/landing/components/StreakSection";
import CTASection from "@/features/landing/components/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FFFDF9] min-h-screen">
        <HeroSection />
        <FeatureSection />
        <QuoteSection />
        <StreakSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}