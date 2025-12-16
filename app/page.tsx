import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { GridPatternDemo } from "@/components/grid-background";
import { BentoGrid } from "@/components/ui/bento-grid";

export default function Page() {
    return <ThemeProvider>
        <Navbar />
        <GridPatternDemo />
        <BentoGrid>
            <div className="w-full h-dvh flex">hello</div>
        </BentoGrid>
    </ThemeProvider>
}