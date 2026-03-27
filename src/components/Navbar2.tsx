"use client";

import Link from "next/link";
import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import SearchBar from "./ui/SearchBar";

export default function Navbar2() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFFDF9]">
      
      <div className="flex justify-between items-center px-6 md:px-20 py-4 md:py-6">

        {/* LOGO */}
        <Link href="/home" className="text-lg md:text-xl font-bold">
          ReadWrite
        </Link>

        {/* SEARCH (hide di mobile) */}
        <div className="hidden md:block w-[300px]">
          <SearchBar />
        </div>

        {/* MENU */}
        <div className="flex items-center gap-4 md:gap-8">

          {/* menu text (hide di mobile) */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/perpustakaan">Perpustakaan</Link>
            <Link href="#">Baca Bersama</Link>
            <Link href="/teman">Teman</Link>
          </div>

          {/* PROFILE */}
          <div className="relative">
            <div
              onClick={() => setOpen(!open)}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300 cursor-pointer"
            />
            <ProfileDropdown
              open={open}
              onClose={() => setOpen(false)}
            />
          </div>

        </div>

      </div>
    </nav>
  );
}