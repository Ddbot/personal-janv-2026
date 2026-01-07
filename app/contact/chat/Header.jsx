import { ChatHeader, ChatHeaderStart, ChatHeaderMain, ChatHeaderEnd } from "@/components/chat/chat-header";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Phone, Video } from 'lucide-react';
const Header = () => {
    return (
        <ChatHeader className="px-4">
                <ChatHeaderStart>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">Andry Nirina</span>
                </ChatHeaderStart>
                <ChatHeaderMain>
                    <span className="text-sm font-medium">Développeur Front End</span>
                </ChatHeaderMain>
                <ChatHeaderEnd className="w-fit p-0">
                    <Phone width={20} height={20} className="mx-2"/>
                    <Video width={20} height={20} className="mx-2"/>
                </ChatHeaderEnd>
</ChatHeader>
    );
};
            
export default Header;