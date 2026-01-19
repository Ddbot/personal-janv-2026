import { Send } from 'lucide-react';
import {
	ChatToolbar,
	ChatToolbarAddonEnd,
} from '@/components/chat/chat-toolbar';
import { Button } from '@/components/ui/button';
import { sendMessage } from '@/lib/chat';
import { revalidatePath } from 'next/cache';
import createServer from '@/lib/serverClient';
import { addMessage, getUserConversations } from '@/lib/conversations';

export default async function Toolbar({ children }: { children: React.ReactNode }) {

    const conversation = await getUserConversations();
    const conversation_id = conversation[0].id ?? null

    async function sendMessage(formData: FormData) {
        "use server";   
        const content = formData.get('content') as string ?? '';
        const server = await createServer();
        const { data: { user } } = await server.auth.getUser()
        if(content !== '' && content !== null && user && conversation_id) {
            await addMessage(conversation_id, user.id === process.env.NEXT_PUBLIC_ADMIN_UUID ? "assistant" : "user", content, user.user_metadata?.username ?? 'no username', user.user_metadata?.full_name ?? 'no full name', user.user_metadata?.avatar_url ?? 'no avatar');
            revalidatePath('/contact');
        }
    }  
    
	return (
        <form action={sendMessage} className='max-height-[2lh] bg-background'>
            <ChatToolbar className="max-height-[2lh] bg-transparent m-2">
                { children }					
                <ChatToolbarAddonEnd className='p-0 m-0'>
                    <Button type="submit" className="self-end size-8 @md/chat:size-9">
                        <Send className="size-4 @md/chat:size-5 stroke-[1.7px]" />
                    </Button>
                </ChatToolbarAddonEnd>
            </ChatToolbar>
        </form>
	);
}
