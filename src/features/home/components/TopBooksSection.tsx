import { books } from "@/features/books/data/books";
import BookCard from "@/features/books/components/BookCard";

export default function TopBooks() {
    return (
        <section className="px-6 md:px-10 mt-10">

            <h2 className="subheading mb-6">5 Teratas Minggu Ini</h2>

            <div className="flex md:grid md:grid-cols-5 gap-6 overflow-x-auto md:overflow-visible overflow-y-visible pb-4 pt-4">

                {books.slice(0, 5).map((book, index) => (
                    <BookCard key={book.id} book={book} index={index} />
                ))}

            </div>

        </section>
    );
}