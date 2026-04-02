import TrackingCard from "@/features/tracking/components/TrackingCard";

export default function FeatureSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16 md:py-24 space-y-12 md:space-y-16">
      <div className="text-center max-w-[700px] mx-auto">
        <p className="text-base md:text-lg font-medium">
          Temukan buku-buku menarik, bagikan pendapatmu, dan lihat apa yang
          sedang dibaca oleh orang lain. Platform ini membantu kamu menyimpan,
          melacak, dan mengeksplorasi berbagai cerita dari berbagai genre dalam
          satu tempat.
        </p>
      </div>

      {/* RESPONSIVE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TrackingCard
          title="Tracking"
          description="Pantau progres bacaanmu dengan mudah. Tandai buku yang sedang dibaca, yang sudah selesai, atau yang ingin kamu baca nanti. Semua aktivitas membaca bisa terlihat dengan rapi dalam satu tempat."
        />
        <TrackingCard
          title="Add Friends"
          description="Tambahkan teman untuk melihat aktivitas membaca mereka, berbagi rekomendasi buku, dan menemukan bacaan baru dari orang lain."
        />
      </div>

      <TrackingCard
        title="Read with Friends"
        description="Tambahkan reaksi langsung pada bagian tertentu dari buku tanpa takut spoiler. Komentar akan tetap terkunci bagi peserta lain sampai mereka mencapai bagian tersebut dalam proses membaca mereka."
        fullWidth
      />
    </section>
  );
}
