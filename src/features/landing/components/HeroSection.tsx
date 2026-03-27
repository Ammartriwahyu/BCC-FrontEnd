import Image from "next/image";
import SearchBar from "@/components/ui/SearchBar";

export default function HeroSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">

      {/* LEFT */}
      <div className="max-w-[520px] space-y-4 md:space-y-6 text-center md:text-left">
        <h1 className="text-3xl md:text-[42px] font-bold leading-tight">
          Baca, Bagikan, dan <br />
          Temukan Buku Favoritmu
        </h1>

        <p className="text-gray-600 text-base md:text-lg">
          Jelajahi berbagai buku menarik, simpan bacaan yang kamu suka,
          dan temukan cerita baru setiap hari.
        </p>

        <div className="flex justify-center md:justify-start">
          <SearchBar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-auto flex justify-center">
        <Image
          src="/assets/images/landing/HeroBooks.png"
          alt="Hero Books"
          width={822}
          height={560}
          className="rounded-xl object-cover w-full max-w-[500px] md:max-w-none"
        />
      </div>

    </section>
  );
}