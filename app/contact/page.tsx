"use client";
import Hero from "@/components/hero";
import Projects from '@/components/projects';
import Navbar from "@/components/navbar";
import Providers from "../providers";
import { Geist, Geist_Mono, Inter } from "next/font/google";

import useIsScrolling from "@/lib/hooks/useIsScrolling";
import styles from './styles.module.css'
import Grid from './Grid';

import { useSearchParams } from "next/navigation";

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

    return <body className={`${geistSans.variable} ${geistMono.variable} antialiased p-0`}>
        <Providers>
            <Navbar className={ isScrolling ? '-translate-y-full' : 'translate-y-0' } />
            {children}
        </Providers>
    </body>
}

export default function Page() {
        const params = useSearchParams();
        const type = params.get('type');

    return <Body>
        <Grid className={styles.grid} type={type} />        
    </Body> 
}