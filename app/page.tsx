"use client";
import Hero from "@/components/hero";
import Projects from '@/components/projects';
import styles from './page.module.css'

export default function Page() {
    return <div className="snap-mandatory snap-y">
        <Hero className="snap-start"/>
        <Projects className="snap-end" />        
    </div> 
}