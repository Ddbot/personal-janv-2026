"use client";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Providers from '@/app/providers';
import Navbar from "./navbar";
import useIsScrolling from "@/lib/hooks/useIsScrolling";
import styles from './styles/navbar.module.css';
import { cn } from '@/lib/utils';
import { usePathname } from "next/navigation";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
function Body({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return <body className={cn(`${geistMono.variable} antialiased p-0`)}>
        <style>
            {
                pathname === '/skills' && `
                    body {
                        // background: url('/subway-lines.png');
                        
                    }
                `
            }
        </style>
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