"use client"; 

import { createContext, useState, useEffect, memo } from "react";
const ThemeContext = createContext();

const ThemeProvider = memo(({ children }) => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove('light', 'dark');
		
		const storedTheme = localStorage.getItem('theme') ?? 'light';
		root.classList.add(storedTheme);
		setTheme(storedTheme);
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