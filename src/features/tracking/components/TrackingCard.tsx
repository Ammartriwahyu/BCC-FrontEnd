export default function TrackingCard() {
  return (
    <div className="h-[588px] self-stretch flex items-center justify-between">

      {/* Bagian kiri (gambar buku / card stack) */}
      <div className="relative w-[420px] h-[420px] flex items-center justify-center">

        {/* card belakang */}
        <div className="absolute w-[260px] h-[360px] bg-white/80 shadow-xl rounded-2xl rotate-[-10deg] left-8 top-10"></div>

        {/* card tengah */}
        <div className="absolute w-[260px] h-[360px] bg-white/90 shadow-xl rounded-2xl rotate-[6deg] left-16 top-4"></div>

        {/* card depan */}
        <div className="absolute w-[280px] h-[380px] bg-white shadow-2xl rounded-2xl"></div>

      </div>

      {/* Bagian kanan (text) */}
      <div className="flex w-[628px] h-[250px] flex-col items-start gap-[44px]">

        <h3 className="h-[36px] flex-shrink-0 self-stretch text-black font-poppins text-[32px] font-bold">
          Tracking
        </h3>

        <p className="h-[156px] flex-shrink-0 self-stretch text-black font-poppins text-[24px] font-medium leading-relaxed">
          Pantau progres bacaanmu dengan mudah. Tandai buku yang sedang
          dibaca, yang sudah selesai, atau yang ingin kamu baca nanti.
          Semua aktivitas membaca bisa terlihat dengan rapi dalam satu
          tempat.
        </p>

      </div>

    </div>
  );
}