"use client";

import { books } from "@/features/books/data/books";
import { Button } from "@/components/ui/Button";

export default function ReadTogetherCard({ session }: any) {
    const book = books.find((b) => b.id === session.bookId);

    if (!book) return null;

    return (
        <div className="bg-[#FFFDF9] rounded-2xl border p-4 md:p-6 flex flex-col md:flex-row gap-6 shadow-card">

            {/* IMAGE */}
            <img
                src={book.image}
                className="w-[140px] h-[200px] object-cover rounded-xl"
            />

            {/* CONTENT */}
            <div className="flex-1 space-y-3">

                <div>
                    <h2 className="text-lg font-bold">{session.groupName}</h2>
                    <p className="text-sm text-neutral-70">
                        {book.title} - {book.author}
                    </p>
                </div>

                <p className="text-sm text-neutral-80">
                    {session.description}
                </p>

                {/* DATE */}
                <div className="flex flex-wrap gap-4 text-sm">
                    <div>
                        <p className="text-neutral-60">Tanggal mulai</p>
                        <p>{session.startDate}</p>
                    </div>

                    <div>
                        <p className="text-neutral-60">Tanggal selesai</p>
                        <p>{session.endDate}</p>
                    </div>
                </div>

                {/* PROGRESS */}
                <p className="text-sm">
                    Halaman {session.currentPage} dari {session.totalPage}
                </p>

                {/* MEMBERS */}
                <p className="text-sm text-neutral-70">
                    {session.members} Anggota
                </p>

                {/* BUTTON */}
                <div className="flex gap-3 flex-wrap">
                    <Button variant="outline">Update Progress</Button>
                    <Button className="bg-brown-100 text-white">
                        Masuk Room
                    </Button>
                </div>

            </div>
        </div>
    );
}