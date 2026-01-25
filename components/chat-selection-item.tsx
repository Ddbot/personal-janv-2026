import { Item, ItemActions, ItemContent, ItemTitle } from "@/components/ui/item";
import { MessageCircle } from 'lucide-react';
import { useRouter } from "next/navigation";

function ChatSelectionItem({ title } : { title: string }) {
    const router = useRouter();
    return <Item variant='outline' className="h-fit min-h-20 cursor-pointer" onClick={() => router.push('/contact?type=chat')}>
        <ItemContent>
            <ItemTitle>
                {title}
            </ItemTitle>
        </ItemContent>
        <ItemActions>
            <MessageCircle />
        </ItemActions>
    </Item>
}

export default ChatSelectionItem;