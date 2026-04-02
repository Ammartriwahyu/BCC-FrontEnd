"use client";

import { Button } from "@/components/ui/Button";

export default function FilterButton({ label, active, onClick }: any) {
  return (
    <Button
      onClick={onClick}
      className={`
        rounded-full px-6 py-2 text-sm
        ${active ? "!bg-brown-100 !text-white" : "!bg-brown-80 !text-white"}
      `}
    >
      {label}
    </Button>
  );
}
