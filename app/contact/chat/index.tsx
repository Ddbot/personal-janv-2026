"use client";

import { Fragment, Suspense, ViewTransition, useState, useEffect } from "react";
import { Chat } from "@/components/chat/chat";
import { ChatMessages } from "@/components/chat/chat-messages";
import { AdditionalMessage } from "@/components/message-items/additional-message";
import { DateItem } from "@/components/message-items/date-item";
import { PrimaryMessage } from "@/components/message-items/primary-message";
import styles from './styles.module.css';
import Toolbar from './Toolbar';
import Textarea from "./Textarea";
import { getMessages } from '@/lib/chat';
import { getConversationMessages, getUserConversations } from '@/lib/conversations';
import { CardContent } from '@/components/ui/card';
import ProtectedContainer from '../../auth/ProtectedContainer';
import { Message } from '@/lib/supabase';

type MessagesType = {
    messages: Message[]
}

export default function ChatPage() {   
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const conversations = await getUserConversations();
                const conversation_id = conversations[0]?.id ?? null;
                const conversationMessages = conversation_id ? await getConversationMessages(conversation_id) : [];
                setMessages(conversationMessages);
            } catch (error) {
                console.error('Error fetching chat data:', error);
                setMessages([]);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, []);
    
    if (loading) {
        return <div className="flex-1 flex items-center justify-center">Loading...</div>;
    }
    
    return (<ViewTransition>
        <Chat className={styles.chat}>
            <CardContent className={`flex-1 min-h-0 px-0 p-0`}>
                <Suspense fallback={<div className="px-6 flex-1 overflow-y-auto min-h-0">Loading...</div>}>
                    <ChatMessages className={styles.messages}>
                        {messages?.map((msg, i, msgs) => {
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