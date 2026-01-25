"use client";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Providers from '@/app/providers';
import Navbar from "./navbar";
import useIsScrolling from "@/lib/hooks/useIsScrolling";
import styles from './styles/navbar.module.css';
import { cn } from '@/lib/utils';

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
function Body({ children }: { children: React.ReactNode }) {
    const isScrolling = useIsScrolling(300);

    return <body className={`${geistMono.variable} antialiased p-0`}>
        <Providers>
            <div className="flex flex-col snap-y snap-mandatory">

                <Navbar className={cn(
                    styles.navbar
                )} />
                {children}
                </div>
        </Providers>
    </body>
}

export default Body;