"use client";

import { useEffect, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ProfileDropdown({ open, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const userName = "Sany";
  // nanti dari backend
  const _profileImage = "";
  // ini untuk foto profil user

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className="absolute right-0 top-16 w-[250px] bg-[#F6F1ED] rounded-xl shadow-lg p-4 z-50"
    >
      {/* PROFILE */}
      <button
        type="button"
        onClick={() => {
          window.location.href = "/profile";
        }}
        className="flex w-full items-center gap-3 rounded-lg p-2 text-left hover:bg-gray-200"
      >
        <div className="w-8 h-8 rounded-full bg-gray-300">
          {/*untuk foto profil */}
        </div>
        <span>{userName}</span>
      </button>

      {/* SETTINGS */}
      <button
        type="button"
        onClick={() => {
          window.location.href = "/settings";
        }}
        className="mt-2 flex w-full items-center gap-3 rounded-lg p-2 text-left hover:bg-gray-200"
      >
        <div className="w-5 h-5">{/* untuk icon pengaturan */}</div>
        <span>Pengaturan</span>
      </button>

      {/* SIGN OUT */}
      <button
        type="button"
        onClick={() => {
          window.location.href = "/";
        }}
        className="mt-6 text-left text-sm hover:underline"
      >
        Sign Out
      </button>
    </div>
  );
}
