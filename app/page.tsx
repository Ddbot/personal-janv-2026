"use client"
import Navbar from "@/components/navbar";
import GlobeOverlay from "@/components/globe-overlay";
import { ThemeProvider } from "@/contexts/ThemeContext";
import GlobeWithCurvedImages from "@/components/globe-overlay-2";

export default function Page() {
    return <ThemeProvider>
        <Navbar />
        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            {/* <GlobeOverlay /> */}
            <GlobeWithCurvedImages />
        </div>
    </ThemeProvider>
}