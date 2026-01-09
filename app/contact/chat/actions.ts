import { revalidatePath } from 'next/cache';

async function addMessage(formData: FormData) {
    const content = formData?.get('content') as string;
	console.log('content',content);
	revalidatePath('/contact');
}

export { addMessage };
