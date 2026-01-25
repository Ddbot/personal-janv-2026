"use client"
import { use, useEffect } from 'react'
import { Button } from "./ui/button"
import Link from "next/link"
import { Mail } from 'lucide-react';
import { TypingAnimation } from "./ui/typing-animation"
import styles from './styles/hero.module.css';
import { dictionary } from '../lib/dictionary';
import { LangContext } from "../contexts/LangContext";
import LogosGrid from './logos-grid';
import { Geist_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';

const geist = Geist_Mono({ subsets: ['latin'], weight: '600' })    

const CustomTypingAnimation  = ({ words, ...props }: { words: string[] }) => {
    return <TypingAnimation words={words} {...props} />
}

export default function Hero({ className }: { className: string }) {
    const { lang } = use(LangContext);
    useEffect(() => { 
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={ cn(styles.hero, geist.className)}>
            <section className={ styles.section}>
                <div className="w-full h-fit text-3xl md:text-5xl font-light my-2">{dictionary[lang]['hero']['intro'][0]}<span className="lg:font-bold text-primary">{dictionary[lang]['hero']['intro'][1]}</span></div>
                <div className="w-full h-fit text-3xl md:text-5xl font-light my-2">JS <span className="text-primary">|</span> React <span className="text-primary">|</span> Next.js</div>
                <CustomTypingAnimation className={styles.typing_animation} words={dictionary[lang]['hero']['typing']}
                    loop={true}
                    delay={1000}
                    deleteSpeed={100}
                    cursorStyle="block"
                    blinkCursor={false}
                />
                <div className="w-full flex justify-end gap-8">
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
