"use client";
import { use } from 'react';
import { Sun, Moon } from "lucide-react"
import { Button } from "./ui/button"
import { ThemeContext } from '@/contexts/ThemeContext';

const ThemeToggler = () => {
    const {theme, toggleTheme } = use(ThemeContext);

    return (
        <Button size="icon" variant="outline" onClick={toggleTheme} style={{
            backgroundColor: theme === "dark" ?  "var(--chart-2" :  "var(--card-foreground)",
            color: theme === "dark" ? "var(--card-foreground)" : "var(--card-background)"
        }}>
            {theme === "light" ? <Moon fill="white" /> : <Sun fill="yellow" />}
        </Button>        
    )
}

export default ThemeToggler