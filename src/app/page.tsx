import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CTASection from "@/features/landing/components/CTASection";
import FeatureSection from "@/features/landing/components/FeatureSection";
import HeroSection from "@/features/landing/components/HeroSection";
import ReviewSection from "@/features/landing/components/ReviewSection";
import StreakSection from "@/features/landing/components/StreakSection";

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
