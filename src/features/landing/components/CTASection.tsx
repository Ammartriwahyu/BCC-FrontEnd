import { Button } from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-32 text-center">

      <div className="max-w-[600px] mx-auto space-y-6">

        <h2 className="text-3xl font-bold">
          Mulai Perjalanan Membacamu
        </h2>

        <p className="text-gray-600">
          Bergabunglah dengan ribuan pembaca yang menemukan buku favorit mereka di sini.
        </p>

        <Button variant="cta" size="lg">
          Mulai Sekarang →
        </Button>

      </div>

    </section>
  );
}