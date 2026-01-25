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

    return <body className={`${geistMono.variable} antialiased p-0`}>
        <Providers>
            <div className="flex flex-col snap-y snap-mandatory">

                <Navbar className={cn(
                    styles.navbar,
                    !pathname.startsWith('/blog') ? 'sticky' : 'static'
                )} />
                {children}
                </div>
        </Providers>
    </body>
}

export default Body;