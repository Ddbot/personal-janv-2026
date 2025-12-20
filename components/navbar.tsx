"use client"


import ThemeToggler from "./theme-toggler";
import LanguagePicker from "./language-picker";
import ContactPicker from "./contact-picker";
import Logo from "./site-logo"
import Link from "next/link";

export default function Navbar() {
    return (
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
    )
}
