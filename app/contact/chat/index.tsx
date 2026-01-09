import { Fragment } from "react";
import { Chat } from "@/components/chat/chat";
import { ChatMessages } from "@/components/chat/chat-messages";
import { AdditionalMessage } from "@/components/message-items/additional-message";
import { DateItem } from "@/components/message-items/date-item";
import { PrimaryMessage } from "@/components/message-items/primary-message";
import MESSAGES from './messages';
import styles from './styles.module.css';
import Toolbar from './Toolbar';
import Textarea from "./Textarea";

export default function ChatPage() {
    return (
        <Chat className={styles.chat}>
            {/* PAS DE HEADER, déporté dans la CardHeader */}
            <ChatMessages className="px-6 flex-1 overflow-y-auto min-h-0">
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
            <Toolbar>
                <Textarea />
            </Toolbar>
        </Chat>
    );
}