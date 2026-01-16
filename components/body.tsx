"use client";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { useRef } from "react";
import Providers from '@/app/providers';
import Navbar from "./navbar";
import useIsScrolling from "@/lib/hooks/useIsScrolling";
import styles from './styles/navbar.module.css';
import { cn } from '@/lib/utils';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
function Body({ children }: { children: React.ReactNode }) {
    const isScrolling = useIsScrolling(300);
    const navbarRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (isScrolling) {
            gsap.to(navbarRef.current, {
                yPercent: -100,
                duration: 0.3,
                ease: "power2.inOut"
            });
        } else {
            gsap.set(navbarRef.current, { yPercent: 0 });
            gsap.fromTo(navbarRef.current, 
                { opacity: 0 },
                { opacity: 1, duration: 0.3, ease: "power2.out" }
            );
        }
    }, { dependencies: [isScrolling] });

    return <body className={`${geistSans.variable} ${geistMono.variable} antialiased p-0`}>
        <Providers>
            <Navbar className={cn(
                isScrolling && styles.isScrolling,
                styles.navbar
            )} />
            {children}
        </Providers>
    </body>
}

export default Body;