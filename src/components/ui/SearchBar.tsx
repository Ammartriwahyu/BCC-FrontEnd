"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/Input";

type SearchBarProps = {
  placeholder?: string;
  setIsFocused?: (isFocused: boolean) => void;
};

export default function SearchBar({
  placeholder = "Cari buku favoritmu",
  setIsFocused,
}: SearchBarProps) {
  const [_isFocused, setLocalFocused] = useState(false);

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
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="
      w-full 
      h-full
      pl-12  
      pr-14 
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
