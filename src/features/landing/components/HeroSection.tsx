import SearchBar from "@/components/ui/SearchBar";

export default function HeroSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 flex items-center justify-between gap-16">

      {/* LEFT */}
      <div className="max-w-[520px] space-y-6">
        <h1 className="text-[42px] font-bold leading-tight">
          Baca, Bagikan, dan <br />
          Temukan Buku Favoritmu
        </h1>

        <p className="text-gray-600 text-lg">
          Jelajahi berbagai buku menarik, simpan bacaan yang kamu suka,
          dan temukan cerita baru setiap hari.
        </p>

        <SearchBar />
      </div>

      {/* RIGHT (BOOK IMAGES) */}
      <div className="flex gap-6">
        {/* Ini tempat gambar buku */}
        <div className="w-[180px] h-[260px] bg-gray-300 rounded-xl" />
        <div className="w-[180px] h-[260px] bg-gray-400 rounded-xl" />
        <div className="w-[180px] h-[260px] bg-gray-500 rounded-xl" />

        {/* nanti lu ganti pakai <Image /> */}
        // ini kode untuk gambar buku di hero section
      </div>

    </section>
  );
}