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

type Category = 'chat' | 'mail';
interface ISearchParams {
    type?: Category;
}


const Container = async ({ className = '', category ="chat"}: { className: string, category: Category | undefined}) => {    
    const type = category;
    
	return (
        // <div className={`p-4 md:p-0 ${styles.grid} rounded-4xl`}>
            <BentoGrid
                className={styles_bento.container}
                id="contact">
                <ViewTransition>
                    <Card key="chat-card" className={styles.container}>
                        <Header title={"Développeur Front End"} category="chat" />
                        {type === 'chat' ? (
                            <ChatPage />
                        ) : (
                            <MailPage />
                        )}
                        <Footer displayedCategory="chat" />
                    </Card>
                </ViewTransition>
            </BentoGrid>
        // </div>
    );
};

export default async function Grid({ className = '', searchParams }: { type: string, className: string, searchParams: ISearchParams }) {
	return <Container className={className} category={(await searchParams)?.type} />;
}

        // <ViewTransition>
        //     <BentoGrid
        //         ref={containerRef}
        //         className={styles_bento.container}
        //         id="projects">
        //         {features.map((feature, idx) => (
        //             <ViewTransition key={idx}>
        //                 <Card
        //                     {...feature}
        //                     className={styles.card + ' ' + feature.className}
        //                 />
        //             </ViewTransition>
        //         ))}
        //     </BentoGrid>
        // </ViewTransition>