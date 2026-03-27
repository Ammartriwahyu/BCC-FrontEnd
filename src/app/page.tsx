import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import HeroSection from "@/features/landing/components/HeroSection";
import FeatureSection from "@/features/landing/components/FeatureSection";
import StreakSection from "@/features/landing/components/StreakSection";
import CTASection from "@/features/landing/components/CTASection";
import ReviewSection from "@/features/landing/components/ReviewSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FFFDF9] min-h-screen pt-[100px]">
        <HeroSection />
        <FeatureSection />
        <ReviewSection />
        <StreakSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}