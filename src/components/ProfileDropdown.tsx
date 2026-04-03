"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/lib/userStore";

type Props = {
    open: boolean;
    onClose: () => void;
};

export default function ProfileDropdown({ open, onClose }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const { user } = useUserStore();

    const userName = user.name;
    // nanti dari backend
    const profileImage = "";
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

    useEffect(() => {
        onClose();
    }, [router]);

    if (!open) return null;

    return (
        <div
            ref={ref}
            className="absolute right-0 top-16 w-[250px] bg-[#F6F1ED] rounded-xl shadow-lg p-4 z-50"
        >

            {/* PROFILE */}
            <div
                onClick={() => router.push("/profile")}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer"
            >
                <div className="w-8 h-8 rounded-full bg-gray-300">
                    {/*untuk foto profil */}
                </div>
                <span>{userName}</span>
            </div>

            {/* SETTINGS */}
            <div
                onClick={() => router.push("/settings")}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer mt-2"
            >
                <div className="w-5 h-5">
                    {/* untuk icon pengaturan */}
                </div>
                <span>Pengaturan</span>
            </div>

            {/* SIGN OUT */}
            <div
                onClick={() => router.push("/")}
                className="mt-6 text-sm cursor-pointer hover:underline"
            >
                Sign Out
            </div>

        </div>
    );
}