import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { GridPatternDemo } from "@/components/grid-background";
import { BentoExample } from "@/components/BentoExample";
export default function Page() {
    return <ThemeProvider>
        <Navbar />
        <GridPatternDemo />
        <BentoExample />        
    </ThemeProvider>
}