import { Chat } from "@/components/chat/chat";
import { ChatHeader } from "@/components/chat/chat-header";
import { ChatHeaderStart, ChatHeaderMain, ChatHeaderEnd } from "@/components/chat/chat-header";

export default function ChatPage() {
    return (
        <Chat>
            <ChatHeader>
                <ChatHeaderStart>
                    Chat
                </ChatHeaderStart>
                <ChatHeaderMain>
                    Main
                </ChatHeaderMain>
                <ChatHeaderEnd>
                    End
                </ChatHeaderEnd>
            </ChatHeader>
        </Chat>
    );
}