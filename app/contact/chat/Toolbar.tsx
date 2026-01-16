import { Send } from 'lucide-react';
import {
	ChatToolbar,
	ChatToolbarAddonEnd,
} from '@/components/chat/chat-toolbar';
import { Button } from '@/components/ui/button';
import { sendMessage } from './actions';
export default function Toolbar({ children }: { children: React.ReactNode }) {
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
