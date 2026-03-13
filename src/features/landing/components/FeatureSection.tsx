import TrackingCard from "@/features/tracking/components/TrackingCard";
import FriendCard from "@/features/friends/components/FriendCard";

export default function FeatureSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 space-y-32">
        <div className="flex w-[1278px] flex-col items-center gap-[148px]">
            <p className="w-[774px] h-[130px] text-black text-center font-poppins text-[24px] font-bold">
                Temukan buku-buku menarik, bagikan pendapatmu, dan lihat <p className="text-black font-poppins text-[24px] font-medium">apa yang
                sedang dibaca oleh orang lain. Platform ini membantu kamu</p> menyimpan,
                melacak, dan mengeksplorasi <p className="text-black font-poppins text-[24px] font-medium">berbagai cerita dari berbagai genre
                dalam satu tempat.</p>
            </p>

            <TrackingCard />

        </div>

      <FriendCard />

      <div className="grid md:grid-cols-2 items-center gap-12">

        <div className="bg-gray-300 w-full h-[260px] rounded-lg" />

        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Read with Friends
          </h3>

          <p className="text-gray-600">
            Tambahkan reaksi langsung pada bagian tertentu dari buku
            tanpa takut spoiler.
          </p>

          <p className="text-gray-600 mt-4">
            Komentar akan tetap terkunci bagi peserta lain sampai mereka
            mencapai bagian tersebut dalam proses membaca mereka.
          </p>

        </div>

      </div>

    </section>
  );
}