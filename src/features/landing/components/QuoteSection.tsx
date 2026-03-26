export default function QuoteSection() {
  return (
    <section className="py-24 text-center space-y-12">

      <div>
        <h2 className="text-2xl font-bold">
          Every reading journey looks a little different.
        </h2>
        <p className="text-gray-500">
          Lihat ulasan dan pengalaman membaca dari pengguna lain.
        </p>
      </div>

      {/* REVIEW CARDS */}
      <div className="flex justify-center gap-6">

        <div className="w-[300px] p-4 bg-white shadow rounded-xl">
          {/* ini card review */}
          {/* // isi nanti (avatar, rating, dll) */}
        </div>

        <div className="w-[300px] p-4 bg-white shadow rounded-xl" />

        <div className="w-[300px] p-4 bg-white shadow rounded-xl" />

      </div>

    </section>
  );
}