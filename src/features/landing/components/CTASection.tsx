import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 text-center px-6">

      <div className="max-w-[600px] mx-auto space-y-4 md:space-y-6">

        <h2 className="text-2xl md:text-3xl font-bold">
          Mulai Perjalanan Membacamu
        </h2>

        <p className="text-gray-600 text-sm md:text-base">
          Bergabunglah dengan ribuan pembaca yang menemukan buku favorit mereka di sini.
        </p>

        <Link href="/login">
          <Button variant="cta" size="lg">
            Mulai Sekarang →
          </Button>
        </Link>

      </div>

    </section>
  );
}