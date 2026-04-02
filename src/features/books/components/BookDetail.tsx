

"use client";

import { useState } from "react";
import { books } from "../data/books";
import ReviewModal from "./ReviewModal";
import ReviewCard from "./ReviewCard";
import BookCard from "./BookCard";
import StreakCard from "@/components/ui/StreakCard"; 
export default function BookDetail({ bookId }: { bookId: string }) {
    const book = books.find((b) => b.id === bookId);

    const [showModal, setShowModal] = useState(false);
    const [myReview, setMyReview] = useState<any | null>(null);

    const [showStreak, setShowStreak] = useState(false); // 🔥 TAMBAHAN

    if (!book) return null;

    return (
        <div className="space-y-6 md:space-y-8">

            {/* TITLE */}
            <div>
                <h1 className="heading text-xl md:text-2xl">{book.title}</h1>

                <p className="text-neutral-80 mt-3 max-w-full md:max-w-[700px] text-sm md:text-base">
                    {book.description}
                </p>
            </div>

            {/* ULASAN SAYA */}
            {myReview && (
                <div className="flex justify-between items-center">

                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-300" />
                        <div>
                            <p className="font-semibold">Sany</p>
                            <div className="text-yellow-400">
                                {"★".repeat(myReview.rating)}
                            </div>
                            <p className="text-sm">{myReview.text}</p>
                        </div>
                    </div>

                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-brown-100 text-white px-5 py-2 rounded-xl"
                    >
                        Edit Ulasan
                    </button>

                </div>
            )}

            {/* BUTTON */}
            {!myReview && (
                <div className="flex justify-start md:justify-end">
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-brown-100 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm md:text-base"
                    >
                        Tulis Ulasan
                    </button>
                </div>
            )}

            <hr />

            {/* REKOMENDASI */}
            <div>
                <h2 className="subheading mb-4">Pembaca juga Menyukai</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                    {books.slice(0, 4).map((b) => (
                        <BookCard key={b.id} book={b} />
                    ))}
                </div>
            </div>

            {/* MODAL REVIEW */}
            {showModal && (
                <ReviewModal
                    onClose={() => setShowModal(false)}
                    onSubmit={(data: any) => setMyReview(data)}
                    onStreak={() => setShowStreak(true)} // 🔥 INI KUNCI NYA
                />
            )}

            {/* 🔥 STREAK CARD */}
            <StreakCard
                open={showStreak}
                onClose={() => setShowStreak(false)}
            />

        </div>
    );
}