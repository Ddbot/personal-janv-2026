"use client"

import { cn } from "@/lib/utils"
import { GridPattern } from "./ui/grid-pattern"
import { Button } from "./ui/button"
import Link from "next/link"
import { Mail } from 'lucide-react';
import { TypingAnimation } from "./ui/typing-animation"
import styles from './grid-background.module.css';

export function GridPatternDemo() {
  return (
    <div className="bg-background relative flex h-dvh w-full overflow-hidden rounded-lg pt-32">
        <section className="w-1/2 h-full flex flex-col flex-wrap justify-start items-start text-left text-2xl px-8">
            <div className="w-full h-fit text-5xl font-light my-2">Développeur <span className="font-bold text-primary">Front End</span></div>
              <div className="w-full h-fit text-5xl font-light my-2">JS <span className="text-primary-foreground">|</span> React <span className="text-primary-foreground">|</span> Next.js</div>
              <TypingAnimation className={styles.typing_animation} words={[
                "Polyvalent", "Curieux", "Fiable","Team Player"
              ]}
                loop={true}
                  delay={1000}
                  deleteSpeed={100}
                  cursorStyle="block"
                  blinkCursor={false}
              />
            {/* <div className="w-full h-fit text-5xl font-light my-2">Polyvalent, Curieux, Fiable</div> */}
            {/* <div className="w-full h-fit text-5xl font-bold my-2">Team Player </div>               */}
            <div className="w-full flex flex-row justify-end gap-4 p-8">
                <Button variant='outline' className="text-sm p-4">
                    <Link href="#projects">
                        Plus d&apos;infos
                    </Link>
                </Button>  
                  <Button variant='secondary' className="text-sm p-4">
                      <Mail size="icon"/>
                    <Link href="#contact">
                        Contact
                    </Link>
                </Button>  
            </div>
        </section>
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
                [20, 5 + 10],
                //   git
                [22, 16],
// openai
                [21,18],
// gsap
                [28, 18],
                //   gemini
                [19, 17],
            ]}
            

        className={cn(
        "[mask-image:radial-gradient(400px_circle_at_70%_40%,white,transparent)]",
        "inset-x-0 inset-y-[-20%] h-[200%] skew-y-12"
        )}
    />
    </div>
  )
}
