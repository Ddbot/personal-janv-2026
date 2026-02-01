"use client"; 

import { createContext, useState, useEffect, memo } from "react";

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme | null;
  toggleTheme: () => void;
  isLoaded: boolean;
}

const ThemeContext: React.Context<ThemeContextType> = createContext({
  theme: null,
  toggleTheme: () => {},
  isLoaded: false
} as ThemeContextType);


const ThemeProvider = memo(({ children } : { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const initializeTheme = () => {
            const root = window.document.documentElement;
            root.classList.remove('light', 'dark');
            
            const storedTheme = localStorage.getItem('theme') ?? 'light';
            root.classList.add(storedTheme as Theme);
            setTheme(storedTheme as Theme);
            setIsLoaded(true);
        };
        
        initializeTheme();
    }, []);

	const toggleTheme = () => {
		if (!theme) return;
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
		
		const root = window.document.documentElement;
		root.classList.remove('light', 'dark');
		root.classList.add(newTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, isLoaded }}>
			{isLoaded ? children : null}
		</ThemeContext.Provider>
	);
});

ThemeProvider.displayName = "ThemeProvider";

export {ThemeProvider, ThemeContext};