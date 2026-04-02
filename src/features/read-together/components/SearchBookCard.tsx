"use client";

type Props = {
  book: {
    id: string;
    title: string;
    author: string;
    image: string;
  };
  onClick: () => void;
};

export default function SearchBookCard({ book, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-4 rounded-xl bg-white p-3 text-left shadow-card transition hover:scale-[1.02]"
    >
      {/* IMAGE */}
      <img
        src={book.image}
        alt={book.title}
        className="w-12 h-16 object-cover rounded-md"
      />

      {/* TEXT */}
      <div>
        <p className="font-semibold text-sm">{book.title}</p>
        <p className="text-xs text-neutral-70">{book.author}</p>
      </div>
    </button>
  );
}
