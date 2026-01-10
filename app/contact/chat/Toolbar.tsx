import { Send } from 'lucide-react';
import {
	ChatToolbar,
	ChatToolbarAddonEnd,
} from '@/components/chat/chat-toolbar';
import { Button } from '@/components/ui/button';
import { sendMessage } from '@/lib/chat';
import { revalidatePath } from 'next/cache';

export default async function ChatPage({ children }: { children: React.ReactNode }) {
    
    async function addMessage(formData: FormData) {
        "use server";   
        const content = formData.get('content') as string ?? '';
        if(content !== '' && content !== null) {
            await sendMessage(content,'user_lala', 'Big Boi');
            revalidatePath('/contact');
        }
    }  
    
	return (
        <form action={addMessage} className='max-height-[2lh] bg-background'>
            <ChatToolbar className="max-height-[2lh] bg-transparent m-2">
                { children }					
                <ChatToolbarAddonEnd className='p-0 m-0'>
                    <Button type="submit" className="size-8 @md/chat:size-9">
                        <Send className="size-4 @md/chat:size-5 stroke-[1.7px]" />
                    </Button>
                </ChatToolbarAddonEnd>
            </ChatToolbar>
        </form>
	);
}
