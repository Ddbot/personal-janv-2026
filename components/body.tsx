"use client";
import { Geist_Mono } from "next/font/google";
import Providers from '@/app/providers';
import Navbar from "./navbar";
import styles from './styles/navbar.module.css';
import { cn } from '@/lib/utils';

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


function Body({ children }: { children: React.ReactNode }) {
    return <body className={cn(`${geistMono.variable} antialiased p-0 relative`)}>
        <Providers>
            <div className={cn("flex flex-col snap-y snap-mandatory")}>
                <Navbar className={cn(
                    styles.navbar
                )} />
                {children}
            </div>
        </Providers>
    </body>
}

export default Body;