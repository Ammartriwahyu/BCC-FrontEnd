import Link from "next/link";
import Image from "next/image";
import chevrondown from "@/assets/icons/chevrondown.svg";

export default function Navbar() {
  return (
    <nav className="bg-[#FFFDF9] inline-flex h-[152px] pt-[62px] pb-[47px] pl-[80px] justify-end items-center w-full">
      <div className="flex items-center gap-[70px]">

        {/* Logo */}
        <div className="text-black font-poppins text-[28px] font-bold">
          ReadWrite
        </div>

        {/* Menu */}
        <div className="flex w-[1061px] items-center gap-[246px]">
            <ul className="flex items-center gap-[44px]">
                <li  className="inline-flex items-center gap-1">
                    <Link href="#">Eksplor<Image src={chevrondown} alt="dropdown" width={19} height={20} className="inline-flex items-center w-4 h-4 ml-1"/></Link>
                </li>
                <li className="flex items-center gap-1">
                    <Link href="#">Buku<Image src={chevrondown} alt="dropdown" width={19} height={20} className="inline-flex items-center w-4 h-4 ml-1"/></Link>
                </li>
                <li className="flex items-center gap-1">
                    <Link href="#">Teman<Image src={chevrondown} alt="dropdown" width={19} height={20} className="inline-flex items-center w-4 h-4 ml-1"/></Link>
                </li>
                <li className="flex items-center gap-1">
                    <Link href="#">Baca Bersama<Image src={chevrondown} alt="dropdown" width={19} height={20} className="inline-flex items-center w-4 h-4 ml-1"/></Link>
                </li>
            </ul>

            {/* Auth */}
            <div className="flex items-center gap-[44px]">
            <Link className="text-black font-poppins text-[20px] font-semibold" href="/register">Sign Up</Link>
            <Link className="flex w-[127px] h-[43px] px-[28px] pt-[4px] pb-[3px] justify-center items-center rounded-[20px] bg-[#A98574] text-white" href="/login">Log In</Link>
            </div>
        </div>
            

      </div>
    </nav>
  );
}