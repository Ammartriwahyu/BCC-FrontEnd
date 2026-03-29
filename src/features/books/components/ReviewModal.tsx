"use client";

import { useState } from "react";

export default function ReviewModal({ onClose, onSubmit }: any) {
    const [rating, setRating] = useState(0);
    const [text, setText] = useState("");

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

            <div className="bg-white p-6 rounded-xl w-[400px] space-y-4">

                <h2 className="heading">Tulis Review</h2>

                {/* ⭐ STAR */}
                <div className="flex gap-2 text-3xl">
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

                {/* TEXT */}
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Bagikan pendapat..."
                    className="w-full border p-3 rounded-lg"
                />

                {/* BUTTON */}
                <div className="flex justify-between gap-3">
                    <button onClick={onClose} className="border px-4 py-2 rounded">
                        Batal
                    </button>

                    <button
                        onClick={() => {
                            onSubmit({
                                rating,
                                text,
                                user: "Sany", // nanti dari user store / backend
                            });
                            onClose();
                        }}
                        className="bg-brown-100 text-white px-4 py-2 rounded"
                    >
                        Kirim Review
                    </button>
                </div>

            </div>

        </div>
    );
}