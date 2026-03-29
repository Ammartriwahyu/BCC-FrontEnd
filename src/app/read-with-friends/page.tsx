"use client";

import { useState } from "react";
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import ReadTogetherCard from "@/features/read-together/components/ReadTogetherCard";
import { sessions } from "@/features/read-together/data/sessions";
import { useRouter } from "next/navigation";

export default function ReadWithFriendsPage() {
    const [activeTab, setActiveTab] = useState("active");
    const router = useRouter();

    const filtered =
        activeTab === "active"
            ? sessions.filter((s) => s.status === "active")
            : sessions;

    return (
        <div className="bg-[#FFFDF9] min-h-screen">

            <Navbar2 />

            <div className="pt-[120px] px-6 md:px-20 space-y-10">

                {/* HEADER */}
                <div className="flex justify-between items-center flex-wrap gap-4">
                    <h1 className="text-2xl font-bold">Baca Bersama</h1>

                    <Button
                        className="bg-brown-100 text-white"
                        onClick={() => router.push("/read-together")}
                    >
                        Buat sesi baru +
                    </Button>
                </div>

                {/* TAB */}
                <div className="flex gap-6 border-b pb-2">

                    <button
                        onClick={() => setActiveTab("active")}
                        className={`pb-2 ${activeTab === "active"
                                ? "border-b-2 border-black font-semibold"
                                : "text-neutral-60"
                            }`}
                    >
                        Sesi Aktif
                    </button>

                    <button
                        onClick={() => setActiveTab("all")}
                        className={`pb-2 ${activeTab === "all"
                                ? "border-b-2 border-black font-semibold"
                                : "text-neutral-60"
                            }`}
                    >
                        Semua Sesi
                    </button>

                </div>

                {/* LIST */}
                <div className="space-y-6">
                    {filtered.map((session) => (
                        <ReadTogetherCard key={session.id} session={session} />
                    ))}
                </div>

            </div>

            <Footer />
        </div>
    );
}