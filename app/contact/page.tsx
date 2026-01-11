import styles from './styles.module.css';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Header from './Header';
import Screen from './Screen';
import ChatPage from './chat/page';
import MailPage from './mail';
import Footer from './Footer';

type Category = 'chat' | 'mail';
interface ISearchParams {
    type?: Category;
}


const Container = async ({ className = '', category ="chat"}: { className: string, category: Category | undefined}) => {    
    const type = category
	return (
		<div
			className={`p-4 md:p-0 ${styles.grid} rounded-4xl ${className}`}
			id="contact">
            <Card key={type} className={styles.card_container}>
                <Header title={"Développeur Front End"} category={ type} />
                <CardContent className={`min-w-[70%] flex-1 min-h-0 px-0 p-0`}>
                    {type === 'chat' ? (
                        <ChatPage />
                    ) : (
                        <MailPage />
                    )}
                </CardContent>
                <Footer displayedCategory={type} />
            </Card>
		</div>
	);
};

export default async function Grid({ className = '', searchParams }: { type: string, className: string, searchParams: ISearchParams }) {
	return <Container className={className} category={(await searchParams)?.type} />;
}