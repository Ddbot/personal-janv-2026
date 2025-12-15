import { Sun, Moon } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"

const ThemeToggler = () => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <Button size="icon" variant="outline" onClick={toggleTheme}>
            {theme === "light" ? <Moon fill="var(--primary)"/> : <Sun />}
        </Button>        
    )
}

export default ThemeToggler