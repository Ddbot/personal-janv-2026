"use client";
import { use } from 'react';
import { Sun, Moon } from "lucide-react"
import { Button } from "./ui/button"
import { ThemeContext } from '@/contexts/ThemeContext';

const ThemeToggler = () => {
    const {theme, toggleTheme } = use(ThemeContext);

    return (
        <Button size="icon" variant="outline" onClick={toggleTheme} className="border-0 dark:border-2 border-primary dark:bg-transparent bg-primary" style={{
            color: theme === "dark" ? "var(--card-foreground)" : "var(--primary)",
            fill: theme === "dark" ? "var(--card-foreground)" : "var(--primary)",
        }}>
            {theme === "light" ? <Moon fill="var(--card-foreground)" /> : <Sun fill="white" />}
        </Button>        
    )
}

export default ThemeToggler