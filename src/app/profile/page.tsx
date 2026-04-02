"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import BookCard from "@/features/books/components/BookCard";
import EditProfileModal from "@/features/profile/components/EditProfileModal";
import { useUserStore } from "@/lib/userStore";

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

      <main className="pt-[100px] md:pt-[120px] px-4 md:px-20 bg-[#FFFDF9] min-h-screen">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-300" />

            <div>
              <h2 className="text-xl md:text-2xl font-bold">{user.name}</h2>
              <p className="text-gray-500 text-sm md:text-base">
                {user.username}
              </p>

              <p className="mt-3 md:mt-4 max-w-full md:max-w-[600px] text-sm md:text-base">
                {user.bio}
              </p>

              <div className="flex flex-wrap gap-6 md:gap-10 mt-4">
                <Stat label="Buku dibaca" value={user.booksRead} />
                <Stat label="Review" value={user.reviews} />
                <Stat label="Teman" value={user.friends} />
                <Stat label="Streak" value={user.streak} />
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpenEdit(true)}
            className="bg-[#6B4F4F] text-white px-4 md:px-6 py-2 rounded-full text-sm md:text-base self-start md:self-auto"
          >
            Edit Profile
          </button>
        </div>

        {/* TABS */}
        <div className="flex gap-6 md:gap-10 mt-8 md:mt-10 border-b overflow-x-auto">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-2 whitespace-nowrap ${
                activeTab === tab.key
                  ? "border-b-2 border-black"
                  : "text-gray-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          <BookCard book={{ id: 1, image: "/dummy.png", title: "Dummy" }} />
        </div>
      </main>

      <Footer />

      {openEdit && <EditProfileModal onClose={() => setOpenEdit(false)} />}
    </>
  );
}

type StatProps = {
  label: string;
  value: string | number;
};

function Stat({ label, value }: StatProps) {
  return (
    <div>
      <p className="font-bold text-lg md:text-xl">{value}</p>
      <p className="text-gray-500 text-xs md:text-sm">{label}</p>
    </div>
  );
}
