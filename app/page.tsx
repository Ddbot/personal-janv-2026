"use client";
import Hero from "@/components/hero";
import Projects from '@/components/projects';
import styles from './page.module.css'

export default function Page() {
    return <>
        <Hero className={styles.children}/>
        <Projects className={styles.children} />        
    </> 
}