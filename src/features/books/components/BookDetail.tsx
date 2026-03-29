"use client";

import { useState } from "react";
import { books } from "../data/books";
import ReviewModal from "./ReviewModal";
import ReviewCard from "./ReviewCard";
import BookCard from "./BookCard";

export default function BookDetail({ bookId }: { bookId: string }) {
    const book = books.find((b) => b.id === bookId);

    const [showModal, setShowModal] = useState(false);
    const [myReview, setMyReview] = useState<any | null>(null);

    if (!book) return null;

    return (
        <div className="space-y-8">

            {/* TITLE */}
            <div>
                <h1 className="heading">{book.title}</h1>

                <p className="text-neutral-80 mt-3 max-w-[700px]">
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
                <div className="flex justify-end">
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-brown-100 text-white px-6 py-3 rounded-xl"
                    >
                        Tulis Ulasan
                    </button>
                </div>
            )}

            <hr />

            {/* REKOMENDASI */}
            <div>
                <h2 className="subheading mb-4">Pembaca juga Menyukai</h2>

                <div className="flex gap-6">
                    {books.slice(0, 4).map((b) => (
                        <div className="w-[160px]" key={b.id}>
                            <BookCard book={b} />
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL */}
            {showModal && (
                <ReviewModal
                    onClose={() => setShowModal(false)}
                    onSubmit={(data: any) => setMyReview(data)}
                />
            )}

        </div>
    );
}