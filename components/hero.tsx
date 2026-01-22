"use client"
import { use, useEffect } from 'react'
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
import LogosGrid from './logos-grid';
import styles_hero from './styles/hero.module.css';

const CustomTypingAnimation  = (props: React.ComponentPropsWithoutRef<'div'>) => {
    return <TypingAnimation {...props} />
}

export default function Hero({ className }: { className: string }) {
    const { lang } = use(LangContext);
    useEffect(() => { 
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={ styles_hero.hero}>
            <section className={ styles_hero.section}>
                <div className="w-full h-fit text-3xl md:text-5xl font-light my-2">{dictionary[lang]['hero']['intro'][0]}<span className="lg:font-bold text-primary">{dictionary[lang]['hero']['intro'][1]}</span></div>
                <div className="w-full h-fit text-3xl md:text-5xl font-light my-2">JS <span className="text-primary">|</span> React <span className="text-primary">|</span> Next.js</div>
                <CustomTypingAnimation className={styles.typing_animation} words={dictionary[lang]['hero']['typing']}
                    loop={true}
                    delay={1000}
                    deleteSpeed={100}
                    cursorStyle="block"
                    blinkCursor={false}
                />
                <div className="lg:w-1/2 lg:-translate-x-20 flex flex-row justify-end lg:gap-4 lg:p-8 lg:pb-0 lg:pr-20">
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
