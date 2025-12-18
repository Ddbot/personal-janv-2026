import { use } from 'react'
import { FloatingPanelRoot, FloatingPanelTrigger, FloatingPanelContent, FloatingPanelBody, FloatingPanelFooter, FloatingPanelCloseButton } from "./ui/floating-panel"
import { Languages } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import styles from "./language-picker.module.css"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import Image from "next/image"
import { LangContext, Lang } from "@/contexts/LangContext"

const LanguagePicker = ({ className }: { className?: string }) => {
    
    
    const languages: Lang[] = ["fr", "gb", "de"];
    const languageFull = {
        fr: "Français",
        gb: "English",
        de: "Deutsch"
    }

    const { changeLang } = use(LangContext);

    function handleChangeLanguage(l: Lang) {
        changeLang(l);
    }

  return (
    <FloatingPanelRoot className={className}>
        <FloatingPanelTrigger
            title="Choose language"
            className={cn(styles.trigger)}
          >
            <Languages className="w-4 h-4"/>
        </FloatingPanelTrigger>   
      <FloatingPanelContent className={styles.content}>
        <FloatingPanelBody className="mb-2">
          <div className="flex flex-row flex-nowrap gap-4 justify-around items-center">
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
                  className="flex flex-col items-center w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                //   style={{ backgroundColor: l }}
                  onClick={() => handleChangeLanguage(l)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  >
                      {languageFull[l]} 
                      <Image src={`/${l}-flag.png`} alt={`${l} flag`} width={64} height={64} />
                  </motion.button>                  
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
