"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import Image from "next/image";

export default function SearchBar({ setIsFocused, placeholder }: any) {
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