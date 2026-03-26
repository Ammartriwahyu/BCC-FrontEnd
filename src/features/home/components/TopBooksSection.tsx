import BookCard from "@/features/books/components/BookCard";

export default function TopBooksSection() {
  const books = [
    "/book1.png",
    "/book2.png",
    "/book3.png",
    "/book4.png",
    "/book5.png",
  ];
  // nanti ambil dari backend

  return (
    <section>
      <h2 className="text-xl font-bold mb-6">
        5 Teratas Minggu Ini
      </h2>

      <div className="flex gap-6">
        {books.map((book, i) => (
          <BookCard key={i} image={book} />
        ))}
      </div>
    </section>
  );
}