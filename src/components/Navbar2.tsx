"use client";

import Link from "next/link";
import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import SearchBar from "./ui/SearchBar";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const userImage = "";
    // ini untuk foto profil user

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFFDF9]">

            <div className="flex justify-between items-center px-20 py-6 relative">

                {/* LOGO */}
                <Link href="/home" className="text-xl font-bold">
                    ReadWrite
                </Link>

                {/* SEARCH */}
                <div className="w-[300px]">
                    <SearchBar />
                </div>

                {/* MENU */}
                <div className="flex items-center gap-8">

                    <Link href="#">Perpustakaan</Link>
                    <Link href="#">Baca Bersama</Link>
                    <Link href="#">Teman</Link>

                    {/* PROFILE ICON */}
                    <div className="relative">

                        <div
                            onClick={() => setOpen(!open)}
                            className="w-10 h-10 rounded-full bg-gray-300 cursor-pointer"
                        >
                            {/* ini untuk foto profil user */}
                        </div>

                        {/* DROPDOWN */}
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