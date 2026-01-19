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
type Category = 'chat' | 'mail';
interface ISearchParams {
    type?: Category;
}


const Container = async ({ className = '', category ="chat"}: { className: string, category: Category | undefined}) => {    
    const type = category;
    
    try {
        const conversations: Conversation[] = await getUserConversations();
        const conversation_id: string | null = conversations[0]?.id ?? null;
        const conversationMessages: Message[] | [] = conversation_id ? await getConversationMessages(conversation_id) : [];

        console.log('conversation_id = ', conversation_id);
        
        return (
            <BentoGrid
                className={cn("lg:p-32 lg:pb-0", styles_bento.container)}
                id="contact">
                <ViewTransition>
                    <Card key="chat-card" className={cn(styles.container, "lg:scale-85")}>
                        <Header title="role" category="chat" />
                        <ProtectedContainer>
                            {type === 'chat' ? (
                                <ChatPage messages={conversationMessages} conversation={conversation_id} />
                            ) : (
                                <MailPage />
                            )}
                            <Footer convos={conversations} />
                        </ProtectedContainer>
                    </Card>
                </ViewTransition>
            </BentoGrid>        
        );
    } catch (error) {
        console.error('Authentication error:', error);
        return (
            <BentoGrid
                className={cn("lg:p-32 lg:pb-0", styles_bento.container)}
                id="contact">
                <ViewTransition>
                    <Card key="chat-card" className={cn(styles.container, "lg:scale-85")}>
                        <Header title={"Développeur Front End"} category="chat" />
                        <ProtectedContainer>
                            {type === 'chat' ? (
                                <ChatPage messages={[]} conversation={''} />
                            ) : (
                                <MailPage />
                            )}
                            <Footer convos={[]}/>
                        </ProtectedContainer>
                    </Card>
                </ViewTransition>
            </BentoGrid>
        );
    }
};

export default async function Grid({ className = '', searchParams }: { type: string, className: string, searchParams: ISearchParams }) {
	return <Container className={className} category={(await searchParams)?.type} />;
}