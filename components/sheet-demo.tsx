import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { Download, Mail, MessageCircle } from "lucide-react"

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><Mail /></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Contactez-moi</SheetTitle>
          <SheetDescription>
            Envoyez-moi un email ou un message direct
          </SheetDescription>
        </SheetHeader>
        <div className="grid md:h-full md:flex md:flex-1 md:flex-row md:flex-wrap md:justify-start md:items-stretch gap-2 pl-6 pr-0 h-full">
            <div className="grid md:gap-3 md:flex md:items-end w-full">
                <Mail className="w-6 h-6 mr-2" />
                <Label className="text-lg" htmlFor="sheet-demo-name">Envoyer un email</Label>
            </div>
            <div className="grid gap-3 md:flex md:items-center w-full">
                <MessageCircle className="w-6 h-6 mr-2" />
                <Label className="text-lg" htmlFor="sheet-demo-username">Envoyer un message direct</Label>
            </div>
            <div className="grid gap-3 md:flex md:items-start w-full">
                <Download className="w-6 h-6 mr-2" />
                <Label className="text-lg" htmlFor="sheet-demo-username">Télécharger mon CV</Label>
            </div>                  
        </div>
        <SheetFooter>
          {/* <Button type="submit">Save changes</Button> */}
          <SheetClose asChild>
            <Button variant="outline">Fermer</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
