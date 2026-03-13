import img1 from "@/assets/images/Rectangle8.svg";
import img2 from "@/assets/images/Rectangle9.svg";
import SearchBar from "@/components/ui/SearchBar";
import BookCard from "@/features/books/components/BookCard";

export default function HeroSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 flex items-center justify-between gap-16 ">

      <div className="flex w-[519px] flex-col items-start gap-[48px]">
        <div className="flex flex-col items-start gap-[20px] self-stretch">
            <h1 className="text-black font-poppins text-[40px] font-semibold">
            Baca, Bagikan, dan
            Temukan Buku Favoritmu
            </h1>

            <p className="self-stretch text-black font-poppins text-[20px] font-normal">
            Jelajahi berbagai buku menarik, simpan bacaan yang kamu suka,
            dan temukan cerita baru setiap hari.
            </p>
        </div>

        <SearchBar />

      </div>

      <div className="flex w-[822px] h-[560px] items-center gap-[52px] ml-[120px]">
        <BookCard image={img2.src}/>
        <BookCard image={img1.src}/>
      </div>

    </section>
  );
}