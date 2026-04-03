"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function StreakCard({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

            {/* CARD */}
            <div className="relative w-[90%] max-w-sm rounded-2xl overflow-hidden ">

                {/* GIF BACKGROUND */}
                <Image
                    src="/assets/images/streak/Confetti.gif"
                    alt="streak effect"
                    width={400}
                    height={600}
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col items-center p-6 text-center">

                    {/* IMAGE CARD */}
                    <Image
                        src="/assets/images/streak/StreakCard.png" 
                        alt="50 day streak"
                        width={200}
                        height={200}
                        className="mb-4"
                    />

                    {/* <h2 className="font-bold text-lg mb-2">
                        50 Day Streak!
                    </h2>

                    <p className="text-sm text-neutral-80 mb-6">
                        That's insane. 50 days of reading. No breaks.
                    </p> */}

                    {/* BUTTON */}
                    <Button
                        className="w-full bg-brown-100 text-white mb-3"
                        onClick={onClose}
                    >
                        Continue
                    </Button>

                    <button className="text-sm text-neutral-80">
                        Share your streak
                    </button>

                </div>
            </div>
        </div>
    );
}