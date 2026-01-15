import { Fragment, Suspense, ViewTransition } from "react";
import { Chat } from "@/components/chat/chat";
import { ChatMessages } from "@/components/chat/chat-messages";
import { AdditionalMessage } from "@/components/message-items/additional-message";
import { DateItem } from "@/components/message-items/date-item";
import { PrimaryMessage } from "@/components/message-items/primary-message";
import styles from './styles.module.css';
import Toolbar from './Toolbar';
import Textarea from "./Textarea";
import { getUserConversations, getConversationMessages, Message } from '@/lib/conversations';
import { CardContent } from '@/components/ui/card';
import ProtectedContainer from '../../auth/ProtectedContainer';

export default async function ChatPage() {    
    // Get all user conversations
    const conversations = await getUserConversations();
    
    // Get all messages from all conversations
    const allMessages: Message[] = [];
    for (const conversation of conversations) {
        const messages = await getConversationMessages(conversation.id);
        allMessages.push(...messages);
    }
    
    // Sort all messages by timestamp
    allMessages.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
    
    return (<ViewTransition>
        <Chat className={styles.chat}>
            <CardContent className={`flex-1 min-h-0 px-0 p-0`}>
            {/* PAS DE HEADER, déporté dans la CardHeader */}
                <Suspense fallback={<div className="px-6 flex-1 overflow-y-auto min-h-0">Loading...</div>}>
                    <ChatMessages className={styles.messages}>
                        {allMessages?.map((msg: Message, i: number, msgs: Message[]) => {
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
            </CardContent>
            <Toolbar>
                <Textarea />
            </Toolbar>
        </Chat>
    </ViewTransition>
    );
}