import { Fragment } from "react";
import { Chat } from "@/components/chat/chat";
import { ChatHeader } from "@/components/chat/chat-header";
import { ChatHeaderStart, ChatHeaderMain, ChatHeaderEnd } from "@/components/chat/chat-header";
import { ChatMessages } from "@/components/chat/chat-messages";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Phone, Video, PlusIcon, Gift, CalendarDays, SquareChevronRight } from 'lucide-react';
import { AdditionalMessage } from "@/components/message-items/additional-message";
import { DateItem } from "@/components/message-items/date-item";
import { PrimaryMessage } from "@/components/message-items/primary-message";
import { ChatToolbar, ChatToolbarAddonStart, ChatToolbarTextarea, ChatToolbarAddonEnd } from "@/components/chat/chat-toolbar";
import { Button } from "@/components/ui/button";
import MESSAGES from './messages';

export default function ChatPage() {
    return (
        <Chat className="flex flex-col overflow-hidden">
            {/* PAS DE HEADER, déporté dans la CardHeader */}
            <ChatMessages className="flex-1 overflow-y-auto min-h-0">
                {MESSAGES.map((msg, i, msgs) => {
                    // If date changed, show date item
                    if (
                    new Date(msg.timestamp).toDateString() !==
                    new Date(msgs[i + 1]?.timestamp).toDateString()
                    ) {
                    return (
                        <Fragment key={msg.id}>
                        <PrimaryMessage
                        
                            avatarSrc={msg.sender.avatarUrl}
                            avatarAlt={msg.sender.username}
                            avatarFallback={msg.sender.name.slice(0, 2)}
                            senderName={msg.sender.name}
                            content={msg.content}
                            timestamp={msg.timestamp}
                        />
                        <DateItem timestamp={msg.timestamp} className="my-4" />
                        </Fragment>
                    );
                    }

                    // If next item is same user, show additional
                    if (msg.sender.id === msgs[i + 1]?.sender.id) {
                    return (
                        <AdditionalMessage
                        key={msg.id}
                        content={msg.content}
                        timestamp={msg.timestamp}
                        />
                    );
                    }
                    // Else, show primary
                    else {
                    return (
                        <PrimaryMessage
                        className="mt-4"
                        key={msg.id}
                        avatarSrc={msg.sender.avatarUrl}
                        avatarAlt={msg.sender.username}
                        avatarFallback={msg.sender.name.slice(0, 2)}
                        senderName={msg.sender.name}
                        content={msg.content}
                        timestamp={msg.timestamp}
                        />
                    );
                    }
                })}
            </ChatMessages>    
            <ChatToolbar className="bg-transparent">
                <ChatToolbarAddonStart>
                <Button variant="ghost" className="size-8 @md/chat:size-9">
                    <PlusIcon className="size-5 @md/chat:size-6 stroke-[1.7px]" />
                </Button>
                </ChatToolbarAddonStart>
                <ChatToolbarTextarea />
                <ChatToolbarAddonEnd>
                <Button variant="ghost" className="size-8 @md/chat:size-9">
                    <Gift className="size-4 @md/chat:size-5 stroke-[1.7px]" />
                </Button>
                <Button variant="ghost" className="size-8 @md/chat:size-9">
                    <CalendarDays className="size-4 @md/chat:size-5 stroke-[1.7px]" />
                </Button>
                <Button variant="ghost" className="size-8 @md/chat:size-9">
                    <SquareChevronRight className="size-4 @md/chat:size-5 stroke-[1.7px]" />
                </Button>
                </ChatToolbarAddonEnd>
            </ChatToolbar>
        </Chat>
    );
}