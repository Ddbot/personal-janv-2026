import { Fragment, Suspense } from "react";
import { Chat } from "@/components/chat/chat";
import { ChatMessages } from "@/components/chat/chat-messages";
import { AdditionalMessage } from "@/components/message-items/additional-message";
import { DateItem } from "@/components/message-items/date-item";
import { PrimaryMessage } from "@/components/message-items/primary-message";
import MESSAGES from './messages';
import styles from './styles.module.css';
import Toolbar from './Toolbar';
import Textarea from "./Textarea";
import { getMessages } from '@/lib/chat';

export default async function ChatPage() {
    const { data, error } = await getMessages();
    return (
        <Chat className={styles.chat}>
            {/* PAS DE HEADER, déporté dans la CardHeader */}
            <Suspense fallback={<div className="px-6 flex-1 overflow-y-auto min-h-0">Loading...</div>}>
                <ChatMessages className="px-6 flex-1 overflow-y-auto min-h-0">
                    {data?.map((msg, i, msgs) => {
                        // If date changed, show date item
                        if (
                        new Date(msg.timestamp).toDateString() !==
                        new Date(msgs[i + 1]?.timestamp).toDateString()
                        ) {
                        return (
                            <Fragment key={msg.id}>
                            <PrimaryMessage
                                avatarSrc={msg.sender_avatar_url}
                                avatarAlt={msg.sender_username}
                                avatarFallback={msg.sender_name.slice(0, 2)}
                                senderName={msg.sender_name}
                                content={msg.content}
                                timestamp={new Date(msg.timestamp).getTime()}
                            />
                            <DateItem timestamp={new Date(msg.timestamp).getTime()} className="my-4" />
                            </Fragment>
                        );
                        }

                        // If next item is same user, show additional
                        if (msg.sender_id === msgs[i + 1]?.sender_id) {
                        return (
                            <AdditionalMessage
                            key={msg.id}
                            content={msg.content}
                            timestamp={new Date(msg.timestamp).getTime()}
                            />
                        );
                        }
                        // Else, show primary
                        else {
                        return (
                            <PrimaryMessage
                            className="mt-4"
                            key={msg.id}
                            avatarSrc={msg.sender_avatar_url}
                            avatarAlt={msg.sender_username}
                            avatarFallback={msg.sender_name.slice(0, 2)}
                            senderName={msg.sender_name}
                            content={msg.content}
                            timestamp={new Date(msg.timestamp).getTime()}
                            />
                        );
                        }
                    })}
                </ChatMessages>    
            </Suspense>
            <Toolbar>
                <Textarea />
            </Toolbar>
        </Chat>
    );
}