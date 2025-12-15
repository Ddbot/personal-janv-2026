import { createContext} from "react";
const ThemeContext = createContext();

const initialTheme = localStorage.getItem("theme") || "light";

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(initialTheme);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
    )
}
export {ThemeProvider, ThemeContext};