export default function GreetingSection() {
  const userName = "Sany";
  // nanti ambil dari backend / context login

  return (
    <div className="flex-1 bg-[#C9B458] rounded-2xl p-4 md:p-6 text-white relative">

      <h2 className="text-xl md:text-2xl font-bold mb-2">
        Halo {userName}!
      </h2>

      <p className="text-sm md:text-base max-w-full md:max-w-[500px]">
        Saatnya melanjutkan perjalanan membaca. Lihat kembali buku yang sedang kamu baca,
        tandai bacaan yang sudah selesai, atau tambahkan buku baru ke daftar bacaanmu.
      </p>

      <div className="absolute bottom-0 left-0 w-full h-4 md:h-6 bg-green-400 rounded-b-2xl" />

    </div>
  );
}
