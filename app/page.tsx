import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LangProvider } from "@/contexts/LangContext";
import Hero from "@/components/hero";
import Projects from '../components/projects';
export default function Page() {
    return <ThemeProvider>
        <LangProvider>
            <Navbar />
            <Hero />
            <Projects />        
        </LangProvider>
    </ThemeProvider>
}