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
        <div
            onClick={onClick}
            className="flex items-center gap-4 p-3 bg-white rounded-xl cursor-pointer shadow-card hover:scale-[1.02] transition"
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
        </div>
    );
}