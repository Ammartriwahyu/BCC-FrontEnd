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

      <div className="flex items-center gap-[130px]">

        <div className="bg-gray-300 w-[600px] h-[360px] rounded-lg" />

        <div className="flex w-[520px] flex-col items-start gap-9">
          <h3 className="text-black font-poppins text-[40px] not-italic font-bold leading-[normal] self-stretch4">
            Read with Friends
          </h3>
        <div className="text-black font-poppins text-3xl not-italic font-medium leading-[normal] self-stretch">
            <p>
                Tambahkan reaksi langsung pada bagian tertentu dari buku
                tanpa takut spoiler.
            </p>
            <br></br>
            <p>
                Komentar akan tetap terkunci bagi peserta lain sampai mereka
                mencapai bagian tersebut dalam proses membaca mereka.
            </p>
            </div> 

        </div>

      </div>

    </section>
  );
}