"use client"; 

import { createContext, useState, useEffect, memo, Dispatch, SetStateAction } from "react";
const ThemeContext: React.Context<Theme> = createContext('light' as Theme);
export type Theme = "light" | "dark";

const ThemeProvider = memo(({ children } : { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<SetStateAction<Theme>>('light');

    useEffect(() => {
        const changeTheme = async (s: Theme) => {
            setTheme(s);
        }
		const root = window.document.documentElement;
		root.classList.remove('light', 'dark');
		
		const storedTheme = localStorage.getItem('theme') ?? 'light';
		root.classList.add(storedTheme as Theme);
		changeTheme(storedTheme as Theme);
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
		
		const root = window.document.documentElement;
		root.classList.remove('light', 'dark');
		root.classList.add(newTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
});

ThemeProvider.displayName = "ThemeProvider";

export {ThemeProvider, ThemeContext};