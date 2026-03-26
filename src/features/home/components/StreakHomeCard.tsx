export default function StreakHomeCard() {
  const streak = 12; 
  // nanti ambil dari backend

  return (
    <div className="w-[350px] bg-gradient-to-br from-[#4B1E1E] to-[#8C5A3C] text-white rounded-2xl p-6 flex flex-col justify-between">

      <div>
        <p className="text-3xl font-bold">{streak}</p>
        <p className="text-sm">Streak Days</p>
      </div>

      <div className="flex justify-end">
        {/* ini buat gambar ilustrasi baca */}
        <div className="w-[100px] h-[100px] bg-white/20 rounded-xl" />
      </div>

    </div>
  );
}