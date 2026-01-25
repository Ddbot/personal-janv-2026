import { Item, ItemActions, ItemContent, ItemTitle } from "@/components/ui/item";
import { Mail } from 'lucide-react';
import { useRouter } from "next/navigation";

function MailSelectionItem({ title } : { title: string }) {
    const router = useRouter();
    return <Item variant='outline' className="h-fit min-h-20 cursor-pointer hover:inset-shadow-primary-foreground" onClick={() => router.push('/contact?type=mail')}>
        <ItemContent>
            <ItemTitle>
                {title}
            </ItemTitle>
        </ItemContent>
        <ItemActions>
            <Mail />                                                    
        </ItemActions>
    </Item>
}

export default MailSelectionItem;