"use client";

import { useState } from "react";
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/Footer";

import { books } from "@/features/books/data/books";
import FilterButton from "@/features/perpustakaan/components/FilterButton";
import BookRow from "@/features/perpustakaan/components/BookRow";

export default function LibraryPage() {
    const [filter, setFilter] = useState("semua");

    const filteredBooks =
        filter === "semua"
            ? books
            : books.filter((b) => b.status === filter);

    return (
        <div className="bg-brown-50 min-h-screen">

        
            <Navbar2 />


            <div className="pt-[100px] max-w-[1200px] mx-auto px-6">

                {/* FILTER */}
                <div className="flex flex-wrap gap-4 mb-10">

                    <FilterButton
                        label="Semua"
                        active={filter === "semua"}
                        onClick={() => setFilter("semua")}
                    />

                    <FilterButton
                        label="Dibaca"
                        active={filter === "dibaca"}
                        onClick={() => setFilter("dibaca")}
                    />

                    <FilterButton
                        label="Ingin dibaca"
                        active={filter === "ingin"}
                        onClick={() => setFilter("ingin")}
                    />

                    <FilterButton
                        label="Sedang dibaca"
                        active={filter === "sedang"}
                        onClick={() => setFilter("sedang")}
                    />

                </div>

                {/* LIST */}
                <div className="space-y-10">
                    {filteredBooks.map((book) => (
                        <BookRow key={book.id} book={book} />
                    ))}
                </div>

            </div>

            {/* FOOTER */}
            <Footer />

        </div>
    );
}