"use client"
import { use } from 'react'
import { cn } from "@/lib/utils"
import { GridPattern } from "./ui/grid-pattern"
import { Button } from "./ui/button"
import Link from "next/link"
import { Mail, BookText } from 'lucide-react';
import { TypingAnimation } from "./ui/typing-animation"
import { RainbowButton } from "./ui/rainbow-button"
import styles from './grid-background.module.css';
import { dictionary } from '../lib/dictionary';
import { LangContext } from "../contexts/LangContext";
import { Playfair_Display, Space_Grotesk, Roboto_Slab, Poppins } from 'next/font/google';
import LogosGrid from './logos-grid';

const playfair_display = Playfair_Display({subsets:['latin'],variable:'--font-sans'});
const space_grotesk = Space_Grotesk({subsets:['latin'],variable:'--font-sans'});
const roboto_slab = Roboto_Slab({subsets:['latin'],variable:'--font-sans'});
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

const CustomTypingAnimation  = (props: ComponentPropsWithoutRef<'div'>) => {
    return <TypingAnimation {...props} />
}

export default function Hero({ className }: { className: string }) {
    const { lang } = use(LangContext);
    return (
        <div className={
            "bg-background relative flex flex-col flex-wrap justify-start items-center h-dvh w-full overflow-hidden rounded-lg pt-0 lg:pt-48 " + className }>
            <section className="w-full lg:w-1/2 h-full lg:h-fit flex flex-col flex-wrap justify-center items-start text-left text-2xl px-4 lg:px-8">
                <div className="w-full h-fit text-3xl md:text-5xl font-light my-2">{dictionary[lang]['hero']['intro'][0]}<span className="lg:font-bold text-primary">{dictionary[lang]['hero']['intro'][1]}</span></div>
                <div className="w-full h-fit text-3xl md:text-5xl font-light my-2">JS <span className="text-primary-foreground">|</span> React <span className="text-primary-foreground">|</span> Next.js</div>
                <CustomTypingAnimation className={styles.typing_animation} words={dictionary[lang]['hero']['typing']}
                    loop={true}
                    delay={1000}
                    deleteSpeed={100}
                    cursorStyle="block"
                    blinkCursor={false}
                />
                <div className="w-full flex flex-row justify-end lg:gap-4 lg:p-8 lg:pb-0 lg:pr-0">
                    <Button variant={"outline"}>
                        <Link href="#projects">
                            {dictionary[lang]['hero']['more']}
                        </Link>
                    </Button>  
                    <Button variant='default' className="text-sm p-4">
                        <Mail size={48}/>
                        <Link href={'/contact?type=mail'}>
                            {dictionary[lang]['hero']['contact']}
                        </Link>
                    </Button>  
                </div>
            </section>
            <LogosGrid className="hidden lg:flex" />
        </div>
    )
}
