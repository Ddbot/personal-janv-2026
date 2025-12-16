"use client"

import { cn } from "@/lib/utils"
import { GridPattern } from "./ui/grid-pattern"

export function GridPatternDemo() {
  return (
    <div className="bg-background relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <GridPattern
        squares={[
          [10, 17],
          [11, 17],
          [12, 17],
          [13, 17],
          [14, 17],
          [15, 17],
          [16, 17],
          [17, 17],
          [18, 17],
          [19, 17],
          [20, 17],
          [21, 17],
        ]}
        className={cn(
        //   "[mask-image:radial-gradient(400px_circle_at_70%,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  )
}
