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
import { Phone, Video } from 'lucide-react';
import { AdditionalMessage } from "@/components/message-items/additional-message";
import { DateItem } from "@/components/message-items/date-item";
import { PrimaryMessage } from "@/components/message-items/primary-message";
import MESSAGES from './messages';

export default function ChatPage() {
    return (
        <Chat>
{/* <Header /> */}
            <ChatMessages>
                <ChatMessages>
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
    
            </ChatMessages>
        </Chat>
    );
}