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

type Category = 'chat' | 'mail';
interface ISearchParams {
    type?: Category;
}


const Container = async ({ className = '', category ="chat"}: { className: string, category: Category | undefined}) => {    
    const type = category;
    
	return (
            <BentoGrid
                className={cn("lg:p-32 lg:pb-0", styles_bento.container)}
                id="contact">
                <ViewTransition>
                    <Card key="chat-card" className={cn(styles.container, "lg:scale-85")}>
                    <Header title={"Développeur Front End"} category="chat" />
                    <ProtectedContainer>
                        {type === 'chat' ? (
                            <ChatPage />
                        ) : (
                            <MailPage />
                        )}
                        <Footer />
                    </ProtectedContainer>
                    </Card>
                </ViewTransition>
            </BentoGrid>        
    );
};

export default async function Grid({ className = '', searchParams }: { type: string, className: string, searchParams: ISearchParams }) {
	return <Container className={className} category={(await searchParams)?.type} />;
}