"use client";

import Link from "next/link";
import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import SearchBar from "./ui/SearchBar";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useUserStore } from "@/lib/userStore";

export default function Navbar2() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { user } = useUserStore();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFFDF9]">

      <div className="flex justify-between items-center px-6 md:px-20 py-4 md:py-6">

        {/* LEFT */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* HAMBURGER (mobile only) */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link href="/home" className="text-lg md:text-xl font-bold">
            RumahBaca
          </Link>
        </div>

        {/* SEARCH */}
        <div className="hidden md:block w-[300px]">
          <SearchBar />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 md:gap-8">

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/perpustakaan">Perpustakaan</Link>
            <Link href="/read-with-friends">Baca Bersama</Link>
            <Link href="/teman">Teman</Link>
          </div>

          {/* PROFILE */}
          <div className="relative">
            <div
              onClick={() => setOpen(!open)}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300 cursor-pointer"
            >
              <Image
                src={user.image}
                alt="Profile"
                width={32}
                height={32}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <ProfileDropdown open={open} onClose={() => setOpen(false)} />
          </div>

        </div>
      </div>

      {mobileMenu && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-[#FFFDF9] border-t">

          <Link href="/perpustakaan" className="block">
            Perpustakaan
          </Link>

          <Link href="/read-with-friends" className="block">
            Baca Bersama
          </Link>

          <Link href="/teman" className="block">
            Teman
          </Link>

          {/*search di mobile */}
          <div className="pt-2">
            <SearchBar />
          </div>

        </div>
      )}

    </nav>
  );
}