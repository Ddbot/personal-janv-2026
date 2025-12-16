import { FloatingPanelRoot, FloatingPanelButton, FloatingPanelTrigger, FloatingPanelContent, FloatingPanelBody, FloatingPanelFooter, FloatingPanelCloseButton } from "./ui/floating-panel"
import { Download, Mail, MessageCircle } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import styles from "./contact-picker.module.css"
import { cn } from "@/lib/utils"

const ContactPicker = ({ className }: { className?: string }) => {    
      const actions = [
        {
          icon: <Mail className="w-4 h-4" />,
          label: "Envoyer un email",
          action: () => console.log("Send email"),
        },
        {
          icon: <MessageCircle className="w-4 h-4" />,
          label: "Envoyer un DM",
          action: () => console.log("Send DM"),
          },
        {
          icon: <Download className="w-4 h-4" />,
          label: "Télécharger mon CV",
          action: () => console.log("New File"),
        },        
      ]
    
      return (
        <FloatingPanelRoot className={className}>
            <FloatingPanelTrigger
            title="Contact"
            className={styles.trigger}
            >
                <Mail className="w-9 h-9 p-2"/>
          </FloatingPanelTrigger>
          <FloatingPanelContent className={cn("w-56", styles.content)}>
            <FloatingPanelBody>
              <AnimatePresence>
                {actions.map((action, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <FloatingPanelButton
                      onClick={action.action}
                      className="w-full flex items-center space-x-2 px-2 py-1 rounded-md hover:bg-muted transition-colors"
                    >
                      {action.icon}
                      <span>{action.label}</span>
                    </FloatingPanelButton>
                  </motion.div>
                ))}
              </AnimatePresence>
            </FloatingPanelBody>
            <FloatingPanelFooter>
              <FloatingPanelCloseButton />
            </FloatingPanelFooter>
          </FloatingPanelContent>
        </FloatingPanelRoot>
      )
}

export default ContactPicker;
