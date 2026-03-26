export default function GreetingSection() {
  const userName = "Sany"; 
  // nanti ambil dari backend / context login

  return (
    <div className="flex-1 bg-[#C9B458] rounded-2xl p-6 text-white relative">

      <h2 className="text-2xl font-bold mb-2">
        Halo {userName}!
      </h2>

      <p className="text-sm max-w-[500px]">
        Saatnya melanjutkan perjalanan membaca. Lihat kembali buku yang sedang kamu baca,
        tandai bacaan yang sudah selesai, atau tambahkan buku baru ke daftar bacaanmu.
      </p>

      {/* dekorasi bawah */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-green-400 rounded-b-2xl" />
      {/* ini buat dekor bunga bawah */}

    </div>
  );
}