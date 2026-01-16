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

import { cn } from '@/lib/utils'

export default function ContactPicker({ className, children }: { className: string, children: React.ReactNode }) {
  return (
      <Sheet> 
      <SheetTrigger asChild>
        <SlidersHorizontal className="self-start w-9 h-9"/>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Réglages</SheetTitle>
          {/* <SheetDescription>
            Envoyez-moi un email ou un message direct
          </SheetDescription> */}
        </SheetHeader>
            <div className="grid md:h-fit md:flex md:flex-row md:flex-wrap md:justify-start gap-3 px-6">
                {children}    
            </div>
        <SheetFooter>          
          <SheetClose asChild>
            <Button variant="outline">Fermer</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
