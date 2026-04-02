"use client";

import { useState } from "react";
import { books } from "../data/books";
import StatusDropdown from "./StatusDropdown";

export default function BookSidebar({ bookId }: { bookId: string }) {
  const book = books.find((b) => b.id === bookId);
  const [status, setStatus] = useState("Ingin Dibaca");

  if (!book) return null;

  return (
    <div className="space-y-4">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-[260px] md:h-[360px] object-cover rounded-xl shadow-card"
      />

      <StatusDropdown status={status} setStatus={setStatus} />

      <button
        type="button"
        className="w-full border border-brown-100 py-3 rounded-xl text-sm md:text-base"
      >
        Mulai Membaca Bersama
      </button>
    </div>
  );
}
