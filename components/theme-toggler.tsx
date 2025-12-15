import { Sun, Moon } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"

const ThemeToggler = () => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <Button size="icon" variant="outline" onClick={toggleTheme} style={{
            backgroundColor: theme === "dark" ?  "var(--chart-2" :  "var(--card-foreground)",
            color: theme === "dark" ?  "var(--card-foreground)" :  "var(--card-background)"
        }}>
            {theme === "light" ? <Moon fill="white"/> : <Sun fill="var(--primary)" />}
        </Button>        
    )
}

export default ThemeToggler