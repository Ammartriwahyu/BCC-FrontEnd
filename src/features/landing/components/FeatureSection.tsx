import TrackingCard from "@/features/tracking/components/TrackingCard";

export default function FeatureSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 space-y-16">

      {/* DESCRIPTION */}
      <div className="text-center max-w-[700px] mx-auto">
        <p className="text-lg font-medium">
          Temukan buku-buku menarik, bagikan pendapatmu, dan lihat apa yang sedang dibaca oleh orang lain.
          Platform ini membantu kamu menyimpan, melacak, dan mengeksplorasi berbagai cerita dari berbagai genre dalam satu tempat.
        </p>
      </div>

      {/* TOP 2 CARDS */}
      <div className="grid grid-cols-2 gap-6">
        <TrackingCard
          title="Tracking"
          description="Pantau progres bacaanmu dengan mudah. Tandai buku yang sedang dibaca, yang sudah selesai, atau yang ingin kamu baca nanti."
        />
        <TrackingCard
          title="Add Friends"
          description="Tambahkan teman untuk melihat aktivitas membaca mereka, berbagi rekomendasi buku, dan menemukan bacaan baru."
        />
      </div>

      {/* FULL WIDTH CARD */}
      <TrackingCard
        title="Read with Friends"
        description="Tambahkan reaksi langsung tanpa spoiler. Komentar akan tetap terkunci sampai temanmu mencapai bagian tersebut."
        fullWidth
      />

    </section>
  );
}