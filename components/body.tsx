"use client";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Providers from '@/app/providers';
import Navbar from "./navbar";
import useIsScrolling from "@/lib/hooks/useIsScrolling";

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

export default Body;