"use client";

import { useState } from "react";

export default function ReviewModal({
    onClose,
    onSubmit,
    onStreak,
}: any) {
    const [rating, setRating] = useState(0);
    const [text, setText] = useState("");

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4">

            <div className="bg-white p-4 md:p-6 rounded-xl w-full max-w-[400px] space-y-4">

                <h2 className="heading text-lg md:text-xl">Tulis Review</h2>

                <div className="flex gap-2 text-2xl md:text-3xl">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            onClick={() => setRating(star)}
                            className={`cursor-pointer ${star <= rating ? "text-yellow-400" : "text-gray-300"
                                }`}
                        >
                            ★
                        </span>
                    ))}
                </div>

                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Bagikan pendapat..."
                    className="w-full border p-3 rounded-lg text-sm md:text-base"
                />

                <div className="flex justify-between gap-3">
                    <button
                        onClick={onClose}
                        className="border px-4 py-2 rounded text-sm md:text-base"
                    >
                        Batal
                    </button>

                    <button
                        onClick={() => {
                            onSubmit({
                                rating,
                                text,
                                user: "Sany",
                            });


                            const currentStreak =
                                Number(localStorage.getItem("streak")) || 0;

                            const newStreak = currentStreak + 1;

                            localStorage.setItem("streak", String(newStreak));


                            if (newStreak === 50) {
                                onStreak?.();
                            }

                            onClose();
                        }}
                        className="bg-brown-100 text-white px-4 py-2 rounded text-sm md:text-base"
                    >
                        Kirim Review
                    </button>
                </div>

            </div>
        </div>
    );
}