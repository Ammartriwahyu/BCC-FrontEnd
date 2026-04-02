"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import type React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // tentuin gambar berdasarkan route
  const imageSrc =
    pathname === "/login"
      ? "/assets/images/auth/Login.png"
      : "/assets/images/auth/Register.png";

  return (
    <div className="min-h-screen flex">
      {/* LEFT */}
      <div className="w-full md:w-1/2 bg-[#F6F1ED] flex items-center justify-center px-20">
        <div className="w-full max-w-[400px]">{children}</div>
      </div>

      {/* RIGHT */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-[#F28C4B] to-[#C66A3D] items-center justify-center">
        <Image
          src={imageSrc}
          alt="Auth Illustration"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
