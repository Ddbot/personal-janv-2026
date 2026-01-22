import { ViewTransition } from 'react';
import styles from './styles.module.css';
import styles_bento from '@/components/styles/bento-grid.module.css';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Header from './Header';
import Screen from './Screen';
import ChatPage from './chat';
import MailPage from './mail';
import Footer from './Footer';
import {BentoGrid} from '@/components/ui/bento-grid';
import { cn } from '@/lib/utils';
import ProtectedContainer from '../auth/ProtectedContainer';
import { Conversation, getUserConversations, getConversationMessages, Message } from '@/lib/conversations';
import { redirect, RedirectType } from 'next/navigation';
type Category = 'chat' | 'mail';
interface ISearchParams {
    type?: Category;
}


const Container = async ({ className = '', category ="chat"}: { className: string, category: Category | undefined}) => {    
    const type = category;
    const conversations: Conversation[] | [] | null = await getUserConversations();
    let conversation_id: string | null = null;
    let conversationMessages: Message[] | [] = [];

    if (!conversations && type === 'chat') {
        redirect('/auth', RedirectType.replace);
    }
    
    try {
        if (conversations && type === 'chat') {
            conversation_id = conversations[0]?.id ?? null;
            conversationMessages = conversation_id ? await getConversationMessages(conversation_id) : [];
        }
        
        return (
            <BentoGrid
                className={cn("lg:p-32 lg:pb-0", styles_bento.container)}
                id="contact">
                    <Card key="chat-card" className={cn(styles.container, "lg:scale-85")}>
                        <Header title="role" category="chat" />
                        <ViewTransition>
                            { type === 'chat' ? (
                                <ProtectedContainer>
                                    <ChatPage messages={conversationMessages} conversation={conversation_id} />
                                </ProtectedContainer>
                            ) : <MailPage /> }
                        </ViewTransition>
                        <Footer convos={conversations} />
                    </Card>
            </BentoGrid>
        );
    } catch (error) {
        console.error('Authentication error:', error);
        // redirect('/auth', RedirectType.replace);
        return (
            <ViewTransition>
                    <BentoGrid
                        className={cn("lg:p-32 lg:pb-0", styles_bento.container)}
                        id="contact">                
                        <Card key="chat-card" className={cn(styles.container, "lg:scale-85")}>
                            <Header title={"Développeur Front End"} category="chat" />
                                {type === 'chat' ? (
                                    <ProtectedContainer>
                                        <ChatPage messages={[]} conversation={null} />
                                    </ProtectedContainer>
                                ) : (
                                    <MailPage />
                                )}
                                <Footer convos={[]}/>
                        </Card>
                    </BentoGrid>
            </ViewTransition>
        );
    }
};

export default async function Grid({ className = '', searchParams }: { type: string, className: string, searchParams: ISearchParams }) {
	return <Container className={className} category={(await searchParams)?.type} />;
}