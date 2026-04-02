"use client";

import Link from "next/link";

export default function BookCard({ book, index }: any) {
  if (!book) return null;

  return (
    <Link href={`/book/${book.id}`}>
      <div className="relative cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-3">
        {/* RANK */}
        {index !== undefined && (
          <span className="absolute top-3 left-3 text-white font-bold text-2xl z-10">
            {index + 1}
          </span>
        )}

        <div className="w-[160px] h-[240px] md:w-full md:h-[280px] rounded-xl overflow-hidden shadow-card">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Link>
  );
}
