import { Chat } from "@/components/chat/chat";
import { ChatHeader } from "@/components/chat/chat-header";
import { ChatHeaderStart, ChatHeaderMain, ChatHeaderEnd } from "@/components/chat/chat-header";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Phone, Video } from 'lucide-react';

export default function ChatPage() {
    return (
        <Chat>
            <ChatHeader>
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
                    <Phone width={20} height={20} className="mx-1"/>
                    <Video width={20} height={20} className="mx-1"/>
                </ChatHeaderEnd>
            </ChatHeader>
        </Chat>
    );
}