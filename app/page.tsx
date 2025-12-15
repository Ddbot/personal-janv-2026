import { ComponentExample } from "@/components/component-example";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function Page() {
    return <ThemeProvider>
        <ComponentExample />
    </ThemeProvider>
}