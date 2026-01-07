'use client';
import { use, useState, useEffect,ViewTransition } from 'react';
import { LangContext } from '@/contexts/LangContext';
import { dictionary } from '@/lib/dictionary';
import Link from 'next/link';
import { MessageCircle, Mail, Linkedin } from 'lucide-react';
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,    
    CardContent,
} from '@/components/ui/card';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import ChatPage from './chat';
import Header from '../contact/chat/Header';

const Empty = () => {
	return null;
};

const Container = ({ type = 'mail', className = '' }: { type: string, className: string }) => {
    const {lang} = use(LangContext);
    const [displayedCategory, setDisplayedCategory] = useState(type)
    const [isSelected, setIsSelected] = useState(() => {
                switch (type) {
					case 'chat':
						return MessageCircle;
					case 'mail':
						return Mail;
					default:
                        return Mail;
				}
    });
    const navigate = useRouter();

	const features = [
		{
			Icon: Empty,
			name: '',
			title: dictionary[lang]['features']['description'][6],
			className: `${className}`,
			href: '#',
			cta: '',
			background: (
				<div
					style={{
						position: 'absolute',
						inset: 0,
					}}
					className={`flex items-center justify-center w-full h-full rounded-b-4xl ${styles.bgPrimary}`}>
					CONTACT
				</div>
			),
		},
    ];
    
    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        setDisplayedCategory(e.currentTarget.dataset.icon as string)
        switch (e.currentTarget.dataset.icon) {
            case 'chat':
                setIsSelected(MessageCircle)
                break;
            case 'mail':
                setIsSelected(Mail)
                break;            
            default:
                break;
        }
        navigate.push(`?type=${e.currentTarget.dataset.icon}`)
    }

    function handleTypeChange(t) {
        setIsSelected(() => {
            switch (t) {
                case 'chat':
                    return MessageCircle;
                case 'mail':
                    return Mail;
                default:
                    return Mail;
            }
        });
    }

    useEffect(() => {
        if (window) {
            const { height } = window.screen
            window.scrollTo(0, height);
        }

    }, []);    
    
	return (
		<div
			className={`p-4 md:p-0 ${styles.grid} rounded-4xl`}
			id="contact">
			{features.map((feature, idx) => (
				<ViewTransition key={idx}>
					{/* <BentoCard {...feature} id={`card-${idx}`} /> */}
                    <Card className={styles.card_container}>
                        {displayedCategory === 'chat' ? <Header /> : <CardHeader className="w-full h-fit border-b-4 border-t-2 mt-0 border-background">                             
                            <CardTitle className="text-4xl h-full m-4 italic font-light text-background">
                                {feature.title}
                            </CardTitle>
                        </CardHeader>}
						<CardContent className="min-w-[70%] flex-1 min-h-0">
							{displayedCategory === 'chat' ? (
								<ChatPage />
							) : (
								<div className="flex items-center justify-center w-full h-full border-4 border-red-500">
                                    <Mail color={'var(--background'} />
                                </div>
							)}
						</CardContent>
						<CardFooter className={styles.card_footer}>
							<button
								className={`${
									isSelected === MessageCircle
										? 'border border-background/55 border-dashed p-2'
										: 'border-0'
								} ${'flex flex-col items-end p-0 m-0'}`}
								data-icon="chat"
								onClick={handleClick}>
								{/* <Link href="/contact"> */}
								<MessageCircle
									width={48}
									height={48} 
									color={'var(--background'}
								/>
								{/* </Link> */}
							</button>
							<button
								className={`${
									isSelected === Mail
										? 'border border-background/55 border-dashed p-2'
										: 'border-0'
								} ${'flex flex-col items-end p-0 m-0'}`}
								data-icon="mail"
								onClick={handleClick}>
								{/* <Link href="/contact"> */}
								<Mail
									width={36}
									height={36}
									color={'var(--background'}
								/>
								{/* </Link> */}
							</button>
							<button data-icon="linkedin">
								<a
									href="https://www.linkedin.com/in/andry-rakotoniaina/"
									target="_blank">
									<Linkedin
										width={36}
										height={36}
										color={'var(--background'}
									/>
								</a>
							</button>
							{/* </div> */}
						</CardFooter>
					</Card>
				</ViewTransition>
			))}
		</div>
	);
};

export default function Grid({ type = 'mail', className = '' }: { type: string, className: string }) {
	return <Container type={type} className={className} />;
}

export { Empty };
