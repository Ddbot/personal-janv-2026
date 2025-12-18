"use client"; 

import { createContext, useState, useEffect, memo } from "react";
const ThemeContext = createContext();

const ThemeProvider = memo(({ children }) => {
	const [theme, setTheme] = useState(() => {
		const storedTheme = localStorage.getItem('theme');
		return storedTheme ?? 'light';
	});

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	useEffect(() => {
		document.documentElement.classList.remove('light', 'dark');
		document.documentElement.classList.add(theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
});

ThemeProvider.displayName = "ThemeProvider";

export {ThemeProvider, ThemeContext};