import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { GridPatternDemo } from "@/components/grid-background";

export default function Page() {
    return <ThemeProvider>
        <Navbar />
        <GridPatternDemo />
    </ThemeProvider>
}