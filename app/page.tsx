"use client";
import { ViewTransition } from "react";
import Hero from "@/components/hero";
import Projects from '@/components/projects';

export default function Page() {
    return <ViewTransition>
        <div className="snap-mandatory snap-y">        
            <Hero className="snap-start"/>                
            <Projects className="snap-end" />                
        </div> 
    </ViewTransition> 
}