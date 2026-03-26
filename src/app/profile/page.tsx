"use client";

import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/Footer";
import { useUserStore } from "@/lib/userStore";
import { useState } from "react";
import EditProfileModal from "@/features/profile/components/EditProfileModal";
import BookCard from "@/features/books/components/BookCard";

export default function ProfilePage() {
    const { user } = useUserStore();
    const [activeTab, setActiveTab] = useState("reading");
    const [openEdit, setOpenEdit] = useState(false);

    const tabs = [
        { key: "reading", label: "Sedang dibaca" },
        { key: "done", label: "Selesai" },
        { key: "wishlist", label: "Ingin dibaca" },
        { key: "review", label: "Review" },
    ];

    return (
        <>
            <Navbar2 />

            <main className="pt-[120px] px-20 bg-[#FFFDF9] min-h-screen">

                {/* HEADER */}
                <div className="flex justify-between items-start">

                    <div className="flex gap-6">

                        <div className="w-20 h-20 rounded-full bg-gray-300">
                            {/* ini foto profil */}
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold">{user.name}</h2>
                            <p className="text-gray-500">{user.username}</p>

                            <p className="mt-4 max-w-[600px]">{user.bio}</p>

                            <div className="flex gap-10 mt-4">
                                <Stat label="Buku dibaca" value={user.booksRead} />
                                <Stat label="Review" value={user.reviews} />
                                <Stat label="Teman" value={user.friends} />
                                <Stat label="Streak" value={user.streak} />
                            </div>
                        </div>

                    </div>

                    <button
                        onClick={() => setOpenEdit(true)}
                        className="bg-[#6B4F4F] text-white px-6 py-2 rounded-full"
                    >
                        Edit Profile
                    </button>

                </div>

                {/* TABS */}
                <div className="flex gap-10 mt-10 border-b">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`pb-2 ${activeTab === tab.key
                                    ? "border-b-2 border-black"
                                    : "text-gray-400"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* CONTENT */}
                <div className="mt-6 flex gap-6 flex-wrap">
                    {/* ini nanti dari backend */}
                    <BookCard image="/dummy.png" />
                </div>

            </main>

            <Footer />

            {/* MODAL */}
            {openEdit && <EditProfileModal onClose={() => setOpenEdit(false)} />}
        </>
    );
}

function Stat({ label, value }: any) {
    return (
        <div>
            <p className="font-bold text-xl">{value}</p>
            <p className="text-gray-500 text-sm">{label}</p>
        </div>
    );
}