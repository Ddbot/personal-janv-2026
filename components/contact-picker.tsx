import { Button } from "@/components/ui/button"
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SlidersHorizontal } from "lucide-react"
import { use } from 'react';
import { LangContext } from '@/contexts/LangContext';

import { cn } from '@/lib/utils'

export default function ContactPicker({ className, children }: { className: string, children: React.ReactNode }) {
    const { lang } = use(LangContext);
    const dictionary = {
        fr: {
            settings: 'Paramètres',
            close: 'Fermer',
        },
        gb: {
            settings: 'Settings',
            close: 'Close',
        },
        de: {
            settings: 'Einstellungen',
            close: 'Schließen',
        }
    }
  return (
      <Sheet> 
      <SheetTrigger asChild>
        <SlidersHorizontal className="self-start w-9 h-9"/>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{dictionary[lang]['close']}</SheetTitle>
          {/* <SheetDescription>
            Envoyez-moi un email ou un message direct
          </SheetDescription> */}
        </SheetHeader>
            <div className="grid md:h-fit md:flex md:flex-row md:flex-wrap md:justify-start gap-3 px-6">
                {children}    
            </div>
        <SheetFooter>          
          <SheetClose asChild>
                <Button variant="outline">{dictionary[lang]['close']}</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
