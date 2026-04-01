"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { updateSession } from "@/features/read-together/data/sessions";
import { books } from "@/features/books/data/books";

export default function UpdateRTCard({
    session,
    onClose,
    onUpdated,
}: any) {
    const book = books.find((b) => b.id === session.bookId);

    const [page, setPage] = useState(session.currentPage);
    const [start, setStart] = useState(session.startDate);
    const [end, setEnd] = useState(session.endDate);

    const handleUpdate = () => {
        updateSession(session.id, {
            currentPage: page,
            startDate: start,
            endDate: end,
        });

        onUpdated(); // refresh UI
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white w-[90%] max-w-md rounded-2xl p-6 space-y-4">

                {/* HEADER */}
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-lg">Update progress</h2>
                    <button onClick={onClose}>✕</button>
                </div>

                {/* INFO */}
                <div className="text-sm space-y-1">
                    <p>Buku: {book?.title}</p>
                    <p>
                        Periode membaca: {start} - {end}
                    </p>
                    <p>Anggota: {session.members} Orang</p>
                </div>

                {/* CURRENT */}
                <p className="text-sm">
                    Halaman {page} dari {session.totalPage}
                </p>

                {/* INPUT */}
                <div>
                    <p className="text-sm mb-1">Halaman terkini:</p>
                    <input
                        type="number"
                        value={page}
                        onChange={(e) => setPage(Number(e.target.value))}
                        className="w-full bg-gray-100 p-3 rounded-xl"
                    />
                </div>

                {/* DATE */}
                <div className="flex gap-2">
                    <input
                        type="date"
                        value={start}
                        onChange={(e) => setStart(e.target.value)}
                        className="bg-gray-100 p-2 rounded-xl w-full"
                    />
                    <input
                        type="date"
                        value={end}
                        onChange={(e) => setEnd(e.target.value)}
                        className="bg-gray-100 p-2 rounded-xl w-full"
                    />
                </div>

                {/* BUTTON */}
                <div className="flex gap-3">
                    <Button
                        className="bg-brown-100 text-white"
                        onClick={handleUpdate}
                    >
                        Update progress
                    </Button>

                    <Button
                        variant="outline"
                        // className="w-full"
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                </div>

            </div>
        </div>
    );
}