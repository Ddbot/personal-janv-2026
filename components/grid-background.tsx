"use client"

import { cn } from "@/lib/utils"
import { GridPattern } from "./ui/grid-pattern"

export function GridPatternDemo() {
  return (
    <div className="bg-background relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <GridPattern
        squares={[
[19+2, 2+9],
[19+5, 2+9],
[19+8, 2+9],
[19+3, 3+9],
[19+6, 3+9],
[19+2, 8+9],
[19+5, 7+9],
[19+8, 7+9],
[19+5, 8+9],
[19+8, 8+9],
[19+2, 5+9],
[19+5, 5+9],
[19+8, 5+9],
[19+3, 6+9],
[19+7, 6+9],
              ]}
              

        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_70%_40%,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  )
}
