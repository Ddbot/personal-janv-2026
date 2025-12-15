import { Sun, Moon } from "lucide-react"
import { Button } from "./ui/button"


const ThemeToggler = ({theme, toggleTheme}: {theme: string, toggleTheme: () => void}) => {
    // const [theme, setTheme] = useState("light");
    // const toggleTheme = () => {
    //     setTheme(theme === "light" ? "dark" : "light");
    // }
    // useEffect(() => {
    //     document.documentElement.classList.remove("light", "dark");
    //     document.documentElement.classList.add(theme);
    // }, [theme]);
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