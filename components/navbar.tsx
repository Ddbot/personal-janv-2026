"use client"

import { useState, useEffect } from "react";
import ThemeToggler from "./theme-toggler";
import LanguagePicker from "./language-picker";
import ContactPicker from "./contact-picker";
import Logo from "./site-logo"
import Link from "next/link";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Only apply scroll behavior on desktop (md and above)
            if (window.innerWidth >= 768) {
                // Hide navbar when scrolling down, show when scrolling up
                if (currentScrollY > lastScrollY) {
                    setIsVisible(false);
                } else if (currentScrollY < lastScrollY) {
                    setIsVisible(true);
                }
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className={`
            fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b
            transition-transform duration-300 ease-in-out
            md:sticky md:top-0 md:bg-transparent md:backdrop-blur-none md:border-0
            ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        `}>
            <div className="p-8 space-y-8">
                <div className="w-full flex flex-row flex-nowrap justify-between md:flex-nowrap gap-4">
                    <Link href={'/'}>                
                        <Logo />
                    </Link>
                    <div className="flex flex-row flex-nowrap items-center gap-4">
                        <ContactPicker className="md:w-9 md:h-9 aspect-square rounded-full"/>
                        <LanguagePicker className="md:w-9 md:h-9 aspect-square rounded-full"/>
                        <ThemeToggler />
                    </div>
                </div>
            </div>
        </div>
    )
}
