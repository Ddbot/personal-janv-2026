import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LangProvider } from "@/contexts/LangContext";
import { GridPatternDemo } from "@/components/grid-background";
import { BentoExample } from "@/components/BentoExample";
export default function Page() {
    return <ThemeProvider>
        <LangProvider>
            <Navbar />
            <GridPatternDemo />
            <BentoExample />        
        </LangProvider>
    </ThemeProvider>
}