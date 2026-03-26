import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 rounded-xl border border-transparent bg-[#F3F3F6] px-4 py-2 text-sm outline-none",
        "placeholder:text-gray-400",
        "focus:ring-2 focus:ring-[#6B4F4F]",
        "disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
