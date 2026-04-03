"use client";

import { useState } from "react";
import { books } from "@/features/books/data/books";
import { Button } from "@/components/ui/Button";
import UpdateRTCard from "./UpdateRTCard";
import DiscussionCard from "./DiscussionCard";

export default function ReadTogetherCard({ session, refresh }: any) {
    const book = books.find((b) => b.id === session.bookId);

    const [open, setOpen] = useState(false);
    const [openDiscussion, setOpenDiscussion] = useState(false);

    return (
        <div className="bg-white rounded-2xl p-4 flex flex-col md:flex-row gap-6 shadow-card">

            <img src={book?.image} className="w-[140px] h-[200px] rounded-xl" />

            <div className="flex-1 space-y-2">

                <h2 className="font-bold">{session.groupName}</h2>
                <p className="text-sm">{book?.title} - {book?.author}</p>
                <p className="text-sm">{session.description}</p>

                <p className="text-sm">
                    {session.startDate} - {session.endDate}
                </p>

                <p className="text-sm">
                    Halaman {session.currentPage} dari {session.totalPage}
                </p>

                <p className="text-sm">{session.members} anggota</p>

                <div className="flex gap-2">
                    <Button onClick={() => setOpen(true)}>
                        Update Progress
                    </Button>

                    <Button
                        className="bg-brown-100 text-white"
                        onClick={() => setOpenDiscussion(true)}
                    >
                        Masuk Room
                    </Button>
                </div>
            </div>

            {/* MODAL */}
            {open && (
                <UpdateRTCard
                    session={session}
                    onClose={() => setOpen(false)}
                    onUpdated={refresh}
                />
            )}
            {openDiscussion && (
                <DiscussionCard
                    session={session}
                    onClose={() => setOpenDiscussion(false)}
                />
            )}
        </div>
    );
}