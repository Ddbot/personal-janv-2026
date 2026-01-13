"use client";
import { JSX, useRef } from "react";
import { GridPattern } from "./ui/grid-pattern"
import { cn } from "@/lib/utils"
import styles from './styles/logos-grid.module.css';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const initialSquares: [x: number, y: number][] = [
    [5, 3], [6, 5],
    [9, 4], [4, 6],
    [7, 7], [5, 8],
    [3, 9], [7, 9],
    [8, 11], [10, 10],
    [10, 8], [3, 4],
    [4, 11], [2, 11],
    [11, 12], [6, 12],
    [7, 2], [11, 6],
    [9, 12], [1, 7]
];

const LogosGrid = ({ className } : { className: string }) => {
    const ref = useRef<SVGSVGElement>(null)
    useGSAP(() => {        
        const q = gsap.utils.selector(ref);
        const images = q('image');
        images.forEach((img, i) => {            
            gsap.to(img, {
                scrollTrigger: {
                    trigger: img,
                    start: "top 50%",
                    scrub: true,
                    toggleActions: "play pause resume reset" 
                },
                opacity: 0,
            });
        })
    }, { scope: ref })

    useGSAP(() => {
        const target = ref.current;
        gsap.to(target, {
            scrollTrigger: {
                trigger: target,
                start: "top 50%",
                scrub: true,
                toggleActions: "play pause resume reset" 
            },
            opacity: 0,
            scale: 1.225,
            transform: 'skewY(0)'
        });
    }, { scope: ref })
    return <GridPattern   
            ref={ref}    
            className={cn(
            "relative w-1/2",
            "mask-[radial-gradient(350px_circle_at_45%_50%,white,transparent)]",
                "inset-x-0 inset-y-[-20%] h-[200%] skew-y-12",  
                styles.container,
                className,
        )}              
        squares={initialSquares}            
    />
}

export default LogosGrid;