import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFFDF9]">
      <div className="flex justify-between items-center px-20 py-6">
        {/* LEFT */}
        <div className="flex items-center gap-[70px]">

          <div className="text-black font-poppins text-[28px] font-bold">
            ReadWrite
          </div>

          <ul className="flex items-center gap-[44px]">
            <li>
              <Link href="#">Buku</Link>
            </li>
            <li>
              <Link href="#">Teman</Link>
            </li>
            <li>
              <Link href="#">Baca Bersama</Link>
            </li>
          </ul>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-[30px]">

          {/* REGISTER */}
          <Link
            href="/register"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-semibold"
          >
            Sign Up
          </Link>

          {/* LOGIN */}
          <Link
            href="/login"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-[#6B4F4F] text-white"
          >
            Log In
          </Link>

        </div>

      </div>


    </nav>
  );
}