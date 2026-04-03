"use client";

import Image from "next/image";
import { useUserStore } from "../../../lib/userStore";
export default function StreakHomeCard() {
  const { user } = useUserStore();
  const streak = user.streak;

  return (
    <div className="w-full max-w-[350px] bg-gradient-to-br from-[#4B1E1E] to-[#8C5A3C] text-white rounded-2xl p-4 md:p-6 flex flex-col justify-between">

      <div className="flex items-center gap-2">
        <Image
          src="/assets/icons/component/Fire.png"
          alt="Streak Icon"
          width={60} height={60}
          className="w-8 h-8 md:w-12 md:h-12" />
        <div>
          <p className="text-2xl md:text-3xl font-bold">{streak}</p>
          <p className="text-xs md:text-sm">Streak Days</p>

        </div>
      </div>

      <div className="flex justify-center mt-4 md:mt-0">
        <Image
          src="/assets/images/home/StreakHome.png"
          alt="Streak Icon"
          width={260}
          height={220}
          className="w-[50px] md:w-[80px]"
        />
      </div>

    </div>
  );
}