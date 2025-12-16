"use client"

import { cn } from "@/lib/utils"
import { GridPattern } from "./ui/grid-pattern"

export function GridPatternDemo() {
  return (
    <div className="bg-background relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <GridPattern
              squares={[
            // html
                  [19, 11],
                  //   css                  
                  [23, 2 + 9],
// tailwind
                  [27, 2 + 9],
// js
                  [21, 13],
// ts
                  [25, 13],
// react
                  [29, 13],
// next
                  [20, 15],
// postgres
                  [24, 15],
// firebase
                  [19+6, 8+9],
// supabase
                  [19+8, 8+8],
// apps script
                  [19 + 8, 5 + 9],
                //   figma
                  [19 + 1, 5 + 10],
                //   git
                  [22, 16],
// openai
                  [21,18],
// gsap
                  [28, 18],
              ]}
              

        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_70%_40%,white,transparent)]",
          "inset-x-0 inset-y-[-20%] h-[200%] skew-y-12"
        )}
      />
    </div>
  )
}
