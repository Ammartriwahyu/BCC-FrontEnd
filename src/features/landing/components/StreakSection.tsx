import Image from "next/image";

export default function StreakSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#4B1E1E] via-[#5A1F1F] to-[#8C5A3C] py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-white max-w-[550px] space-y-4 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">
            Stay Consistent, Keep the Streak!
          </h2>

          <p className="text-sm text-gray-200 leading-relaxed">
            Cek progres harianmu, pertahankan konsistensi, dan lihat seberapa
            lama kamu bisa menjaga kebiasaan membaca. Fitur streak membantu kamu
            melacak hari-hari aktifmu, memberi motivasi untuk terus kembali
            membaca, dan membangun rutinitas membaca yang konsisten setiap hari.
          </p>
        </div>

        <Image
          src="/assets/images/landing/StreakPict.png"
          alt="Streak Card"
          width={300}
          height={200}
          className="w-[250px] md:w-[300px]"
        />
      </div>
    </section>
  );
}
