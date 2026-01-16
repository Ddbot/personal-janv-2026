"use server";   
import { revalidatePath } from 'next/cache';
import { addMessage, getUserConversations } from '@/lib/conversations';
import createServer from '@/lib/serverClient';

// async function addMessage(formData: FormData) {
//     const content = formData?.get('content') as string;
// 	console.log('content',content);
// 	revalidatePath('/contact');
// }

async function sendMessage(formData: FormData) {
    const content = formData.get('content') as string ?? '';
    const conversation = await getUserConversations();
    const conversation_id = conversation[0].id  
    const server = await createServer();
    const { data: { user } } = await server.auth.getUser()
    
    if (content !== '' && content !== null && user) {
        await addMessage(conversation_id, user.id === process.env.NEXT_PUBLIC_ADMIN_UUID ? "assistant" : "user", content, user.user_metadata?.username ?? 'no username', user.user_metadata?.full_name ?? 'no full name', user.user_metadata?.avatar_url ?? 'no avatar');
        revalidatePath('/contact');
    }
}

export { sendMessage };
