"use client";
import Hero from "@/components/hero";
import Projects from '@/components/projects';

export default function Page() {
    return <div className="snap-mandatory snap-y">
        <Hero className="snap-start"/>
        <Projects className="snap-end" />        
    </div> 
}