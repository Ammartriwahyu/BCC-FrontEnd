import { Card, CardContent } from "@/components/ui/card";

export default function StreakSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#4B1E1E] via-[#5A1F1F] to-[#8C5A3C] py-20">

      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">

        {/* LEFT TEXT */}
        <div className="text-white max-w-[550px] space-y-4">
          <h2 className="text-3xl font-bold">
            Stay Consistent, Keep the Streak!
          </h2>

          <p className="text-sm text-gray-200 leading-relaxed">
            Cek progres harianmu, pertahankan konsistensi, dan lihat seberapa lama kamu bisa menjaga kebiasaan membaca.
            Fitur streak membantu kamu melacak hari-hari aktifmu, memberi motivasi untuk terus kembali membaca.
          </p>
        </div>

        {/* RIGHT CARD */}
        <Card className="bg-white rounded-2xl shadow-lg w-[250px]">
          <CardContent className="p-4 space-y-4">

            {/* HEADER */}
            <div className="flex items-center gap-2">
              {/* ini icon api, nanti lu bisa ganti */}
              <div className="w-8 h-8 bg-orange-500 rounded-full" />
              <div>
                <p className="text-xs text-gray-500">Streak</p>
                <p className="font-bold text-lg">3 Hari</p>
              </div>
            </div>

            {/* LINE */}
            <div className="h-[1px] bg-gray-200" />

            {/* DAYS */}
            <div className="flex justify-between items-center text-xs text-gray-500">

              {/* contoh hari */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-[#4B1E1E]" />
                <span>Sen</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-[#4B1E1E]" />
                <span>Sel</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-gray-300" />
                <span>Rab</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-gray-300" />
                <span>Kam</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-gray-300" />
                <span>Jum</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-gray-300" />
                <span>Sab</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-gray-300" />
                <span>Min</span>
              </div>

            </div>

          </CardContent>
        </Card>

      </div>
    </section>
  );
}