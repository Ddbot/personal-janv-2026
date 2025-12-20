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
import { Download, Mail, MessageCircle } from "lucide-react"

import { cn } from '@/lib/utils'

export default function ContactPicker({ className }: { className: string}) {
  return (
      <Sheet> 
      <SheetTrigger asChild>
        <Button variant="outline" className="bg-secondary aspect-square w-9 h-9"><Mail /></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Contactez-moi</SheetTitle>
          <SheetDescription>
            Envoyez-moi un email ou un message direct
          </SheetDescription>
        </SheetHeader>
            <div className="grid md:h-full md:flex md:flex-1 md:flex-row md:flex-wrap md:justify-start gap-2 pl-6 pr-0 h-full">
                <Item variant="outline">
                    <ItemContent>
                    <ItemTitle>Envoyer un email</ItemTitle>
                    <ItemDescription>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aspernatur maxime quasi fugiat exercitationem consequuntur in eos vero obcaecati quo, animi quos, sequi ducimus tempora. Quisquam nostrum ad velit repellat!
                    </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <Button variant="outline" size="sm">
                            <Mail className="w-6 h-6" />
                        </Button>
                    </ItemActions>
                </Item>
                <Item variant="outline">
                    <ItemContent>
                    <ItemTitle>Envoyer un message direct</ItemTitle>
                    <ItemDescription>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aspernatur maxime quasi fugiat exercitationem consequuntur in eos vero obcaecati quo, animi quos, sequi ducimus tempora. Quisquam nostrum ad velit repellat!
                    </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <Button variant="outline" size="sm">
                            <MessageCircle className="w-6 h-6" />
                        </Button>
                    </ItemActions>
                  </Item>         
                <Item variant="outline">
                    <ItemContent>
                    <ItemTitle>Télécharger mon CV</ItemTitle>
                    <ItemDescription>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aspernatur maxime quasi fugiat exercitationem consequuntur in eos vero obcaecati quo, animi quos, sequi ducimus tempora. Quisquam nostrum ad velit repellat!
                    </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <Button variant="outline" size="sm">
                            <Download className="w-6 h-6" />
                        </Button>
                    </ItemActions>
                </Item>                  
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
