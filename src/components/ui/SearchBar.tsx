"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import Image from "next/image";

export default function SearchBar({ setIsFocused }: any) {
  const [isFocused, setLocalFocused] = useState(false);

  const handleFocus = () => {
    setLocalFocused(true);
    setIsFocused?.(true);
  };

  const handleBlur = () => {
    setLocalFocused(false);
    setIsFocused?.(false);
  };

  return (
    <div className="flex justify-center">
      <div className="relative w-[400px] h-[48px]">

        {/* INPUT */}
        <Input
          placeholder="Cari buku favoritmu"
          className="
      w-full 
      h-full
      pl-12   /* ⬅️ ini penting */
      pr-14   /* ⬅️ ini juga */
      rounded-full 
      bg-gray-200
      focus:bg-white
      focus:border focus:border-[#6b4f3f]
      outline-none
    "
        />

        {/* ICON KANAN */}
        <Image
          src="/assets/icons/component/Find.png"
          alt="Search Icon"
          width={30}
          height={30}
          className="absolute right-3 top-1/2 -translate-y-1/2"
        />

      </div>
    </div>
  );
}