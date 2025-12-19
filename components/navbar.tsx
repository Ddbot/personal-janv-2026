"use client"


import ThemeToggler from "./theme-toggler";
import LanguagePicker from "./language-picker";
import ContactPicker from "./contact-picker";

import Logo from "./site-logo"
import { ThemeContext } from "../contexts/ThemeContext"

export default function Navbar() {
    return (
        <div className="p-8 space-y-8">
            <div className="w-full flex flex-row flex-nowrap justify-between md:flex-nowrap gap-4">
                <Logo />
                <div className="flex flex-row flex-wrap items-center gap-4">
                    <ContactPicker className="w-5 h-5 md:w-9 md:h-9 aspect-square rounded-full"/>
                    <LanguagePicker className="w-5 h-5 md:w-9 md:h-9 aspect-square rounded-full"/>
                    <ThemeToggler />                    {/* <AnimatedThemeToggler/> */}
                </div>
            </div>
        </div>
    )
}
