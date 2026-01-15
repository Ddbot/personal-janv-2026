"use server";
import { createServerComponentClient } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';
import { addMessage, addUserMessage, createConversation } from '@/lib/conversations';

// async function addMessage(formData: FormData) {
//     const content = formData?.get('content') as string;
// 	console.log('content',content);
// 	revalidatePath('/contact');import { addUserMessage, createConversation } from '@/lib/conversations';

// }

async function sendMessage(content: string) {
    "use server";
        // const content = formData.get('content') as string ?? '';
    if (content !== '' && content !== null) {
        const supabase = await createServerComponentClient();
        const { data: { user } } = await supabase.auth.getUser();

        const conversation = await createConversation('Chat Conversation');

        if (!user) {
            throw new Error('User not authenticated');
        }        

        // Add user message to the conversation
        await addUserMessage(conversation.id, content);
        revalidatePath('/contact');        
    }
}  

export { sendMessage };
