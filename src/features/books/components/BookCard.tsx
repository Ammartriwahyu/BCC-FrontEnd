type BookCardProps = {
  image: string;
  title?: string;
};

export default function BookCard({ image }: BookCardProps) {
  return (
    <div
      className="
        w-[180px] h-[260px] rounded-xl bg-cover bg-center shadow-md
        transition-transform duration-300
        hover:scale-110 hover:-translate-y-2
      "
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* ini untuk gambar buku */}
    </div>
  );
}