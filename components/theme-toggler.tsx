"use client";
import { use } from 'react';
import { Sun, Moon } from "lucide-react"
import { Button } from "./ui/button"
import { ThemeContext } from '@/contexts/ThemeContext';

const ThemeToggler = () => {
    const {theme, toggleTheme } = use(ThemeContext);

    return (
        <button onClick={toggleTheme}>
            {theme === "light" ? <Moon fill="var(--card-foreground)" /> : <Sun fill="var(--primary)" stroke="var(--primary)" />}
        </button>        
    )
}

export default ThemeToggler