"use client";

import { useState } from "react";

export default function StatusDropdown({
    status,
    setStatus,
}: {
    status: string;
    setStatus: (s: string) => void;
}) {
    const [open, setOpen] = useState(false);

    const options = ["Ingin Dibaca", "Sedang Dibaca", "Sudah Dibaca"];

    return (
        <div className="relative w-full">

            <button
                onClick={() => setOpen(!open)}
                className="w-full bg-brown-100 text-white py-3 rounded-xl flex justify-between px-4"
            >
                {status}
                <span>{open ? "▲" : "▼"}</span>
            </button>

            {open && (
                <div className="absolute w-full bg-brown-80 rounded-xl mt-2 overflow-hidden z-10">
                    {options.map((item) => (
                        <div
                            key={item}
                            onClick={() => {
                                setStatus(item);
                                setOpen(false);
                            }}
                            className="py-3 text-center text-white hover:bg-brown-70 cursor-pointer"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}