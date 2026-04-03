import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFFDF9]">
      
      <div className="flex justify-between items-center px-6 md:px-20 py-4 md:py-6">
        
        {/* LEFT */}
        <div className="flex items-center gap-6 md:gap-[70px]">

          <div className="text-black font-poppins text-xl md:text-[28px] font-bold">
            RumahBaca
          </div>

          {/* MENU (hidden di mobile) */}
          <ul className="hidden md:flex items-center gap-[44px]">
            <li><Link href="#">Buku</Link></li>
            <li><Link href="#">Teman</Link></li>
            <li><Link href="#">Baca Bersama</Link></li>
          </ul>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 md:gap-[30px]">

          <Link
            href="/register"
            className="text-black font-semibold text-sm md:text-base"
          >
            Sign Up
          </Link>

          <Link
            href="/login"
            className="px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-[#6B4F4F] text-white text-sm md:text-base"
          >
            Log In
          </Link>

        </div>

      </div>
    </nav>
  );
}