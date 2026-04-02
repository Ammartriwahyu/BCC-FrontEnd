import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";

import GreetingSection from "@/features/home/components/GreetingSection";
import ReviewSection from "@/features/home/components/ReviewSection";
import StreakHomeCard from "@/features/home/components/StreakHomeCard";
import TopBooksSection from "@/features/home/components/TopBooksSection";

export default function HomePage() {
  return (
    <>
      <Navbar2 />

      <main className="bg-[#FFFDF9] min-h-screen px-20 py-10 space-y-12 pt-[100px]">
        {/* TOP */}
        <div className="flex flex-col md:flex-row gap-6">
          <GreetingSection />
          <StreakHomeCard />
        </div>

        <TopBooksSection />

        <ReviewSection />
      </main>

      <Footer />
    </>
  );
}
