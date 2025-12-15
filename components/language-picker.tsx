import { FloatingPanelRoot, FloatingPanelTrigger, FloatingPanelContent, FloatingPanelBody, FloatingPanelFooter, FloatingPanelCloseButton } from "./ui/floating-panel"
import { Languages } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import styles from "./language-picker.module.css"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

const LanguagePicker = ({ className }: { className?: string }) => {
    type Language = "fr" | "gb" | "de"
    
    const languages: Language[] = ["fr", "gb", "de"];
    const languageFull = {
        fr: "Français",
        gb: "English",
        de: "Deutsch"
    }

  return (
    <FloatingPanelRoot className={className}>
        <FloatingPanelTrigger
            title="Choose language"
            className={cn(styles.trigger)}
          >
            <Languages className="w-9 h-9 p-2"/>
        </FloatingPanelTrigger>   
      <FloatingPanelContent className="w-64">
        <FloatingPanelBody>
          <div className="grid grid-cols-3 gap-2">
            <AnimatePresence>
              {languages.map((l) => (
                // <motion.button
                //   key={color}
                //   className="w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                //   style={{ backgroundColor: color }}
                //   onClick={() => console.log(`Selected color: ${color}`)}
                //   whileHover={{ scale: 1.1 }}
                //   whileTap={{ scale: 0.9 }}
                //   initial={{ opacity: 0, scale: 0.8 }}
                //   animate={{ opacity: 1, scale: 1 }}
                //   exit={{ opacity: 0, scale: 0.8 }}
                //   transition={{ duration: 0.2 }}
                  // />
                <motion.button
                  key={l}
                  className="w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                //   style={{ backgroundColor: l }}
                  onClick={() => console.log(`Selected language: ${languageFull[l]}`)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >{languageFull[l]}</motion.button>                  
              ))}
            </AnimatePresence>
          </div>
        </FloatingPanelBody>
        <FloatingPanelFooter>
          <FloatingPanelCloseButton />
        </FloatingPanelFooter>
      </FloatingPanelContent>
    </FloatingPanelRoot>
  )
}

export default LanguagePicker;
