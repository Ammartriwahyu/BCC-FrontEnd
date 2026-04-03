import Image from "next/image";

export default function ReviewSection() {
  return (
    <section className="py-16 md:py-24 text-center space-y-8 md:space-y-12 px-6">

      <div>
        <h2 className="text-xl md:text-2xl font-bold">
          Every reading journey looks a little different.
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          Lihat ulasan dan pengalaman membaca dari para pembaca lainnya.
        </p>
      </div>

      <div className="flex justify-center">
        <Image
          src="/assets/images/landing/Reviewpict.png"
          alt="Review Cards"
          width={1200}
          height={400}
          className="w-full max-w-[1000px]"
        />
      </div>

    </section>
  );
}