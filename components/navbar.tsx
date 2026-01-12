import { forwardRef } from "react";
import ThemeToggler from "./theme-toggler";
import LanguagePicker from "./language-picker";
import ContactPicker from "./contact-picker";
import Logo from "./site-logo"
import Link from "next/link";

const Navbar = forwardRef<HTMLDivElement, { className?: string }>(({ className }, ref) => {
    return (
        <div ref={ref} className={`
            fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b
            duration-300 ease-in-out
            md:sticky md:top-0 md:bg-transparent md:backdrop-blur-none md:border-0
            ${className}
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
});

Navbar.displayName = "Navbar";
export default Navbar;
