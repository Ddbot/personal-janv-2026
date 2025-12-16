"use client"

import { use } from "react"
import ThemeToggler from "../theme-toggler";
import LanguagePicker from "../language-picker";
import ContactPicker from "../contact-picker";
import Logo from "../site-logo"
import { ThemeContext } from "../../contexts/ThemeContext"

export default function Navbar() {
    const {theme, toggleTheme } = use(ThemeContext);

    return (
        <div className="p-8 space-y-8">
            <div className="flex flex-col md:justify-between md:flex-row flex-wrap gap-4">
                <Logo theme={theme}/>
                <div className="flex flex-col md:flex-row flex-wrap items-center gap-4">
                    <ContactPicker className="w-9 h-9 aspect-square rounded-full"/>
                    <LanguagePicker className="w-9 h-9 aspect-square rounded-full"/>
                    <ThemeToggler theme={theme} toggleTheme={toggleTheme}/>
                </div>
            </div>
        </div>
    )
}
