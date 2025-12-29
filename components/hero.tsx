"use client"
import { use } from 'react'
import { cn } from "@/lib/utils"
import { GridPattern } from "./ui/grid-pattern"
import { Button } from "./ui/button"
import Link from "next/link"
import { Mail } from 'lucide-react';
import { TypingAnimation } from "./ui/typing-animation"
import { RainbowButton } from "./ui/rainbow-button"
import styles from './grid-background.module.css';
import { dictionary } from '../lib/dictionary';
import { LangContext } from "../contexts/LangContext";

const initialSquares: [x: number, y: number][] = [
  [ 5, 4 ],   [ 6, 6 ],
  [ 9, 5 ],  [ 4, 7 ],
  [ 8, 7 ],   [ 12, 7 ],
  [ 3, 9 ],   [ 7, 9 ],
  [ 8, 11 ],  [ 10, 10 ],
  [ 10, 8 ],  [ 3, 9 ],
  [ 5, 10 ],  [ 4, 12 ],
  [ 11, 12 ], [ 6, 13 ]
]

export default function Hero() {
    const { lang } = use(LangContext);
  return (
    <div className="bg-background relative flex flex-col flex-wrap h-dvh w-full overflow-hidden rounded-lg pt-32">
        <section className="w-1/2 h-full flex flex-col flex-wrap justify-start items-start text-left text-2xl px-8">
            <div className="w-full h-fit text-4xl md:text-5xl font-light my-2">{dictionary[lang]['hero']['intro'][0]}<span className="font-bold text-primary">{dictionary[lang]['hero']['intro'][1]}</span></div>
              <div className="w-full h-fit text-4xl md:text-5xl font-light my-2">JS <span className="text-primary-foreground">|</span> React <span className="text-primary-foreground">|</span> Next.js</div>
              <TypingAnimation className={styles.typing_animation} words={dictionary[lang]['hero']['typing']}
                loop={true}
                  delay={1000}
                  deleteSpeed={100}
                  cursorStyle="block"
                  blinkCursor={false}
              />
            {/* <div className="w-full h-fit text-5xl font-light my-2">Polyvalent, Curieux, Fiable</div> */}
            {/* <div className="w-full h-fit text-5xl font-bold my-2">Team Player </div>               */}
            <div className="w-full flex flex-row justify-end gap-4 p-8">
                <Button variant={"outline"}>
                    <Link href="#projects">
                        {dictionary[lang]['hero']['more']}
                    </Link>
                </Button>  
                  <Button variant='default' className="text-sm p-4">
                      <Mail size="icon"/>
                    <Link href="#contact">
                        {dictionary[lang]['hero']['contact']}
                    </Link>
                </Button>  
            </div>
        </section>
        <GridPattern    
              className={cn(
                "relative w-1/2",
            "mask-[radial-gradient(350px_circle_at_45%_50%,white,transparent)]",
                "inset-x-0 inset-y-[-20%] h-[200%] skew-y-12",
            )}              
            squares={initialSquares}            
        />
    </div>
  )
}
