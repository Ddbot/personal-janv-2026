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
					className="flex items-center justify-center w-full h-full bg-primary">
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
			className={`p-4 md:p-24 ${styles.grid}`}
			id="contact">
			{features.map((feature, idx) => (
				<ViewTransition key={idx}>
					{/* <BentoCard {...feature} id={`card-${idx}`} /> */}
					<Card className="self-center w-full h-full flex flex-col justify-between items-stretch mb-16 scale-85 rounded-b-none">
						<CardHeader className="h-full">
							<CardTitle className="h-full">
								{feature.title}
							</CardTitle>
						</CardHeader>
						<CardContent className="h-full">
							{displayedCategory === 'chat' ? (
								<MessageCircle color={'var(--background'} />
							) : (
								<Mail color={'var(--background'} />
							)}
						</CardContent>
						<CardFooter className="h-full justify-end items-end gap-6 m-0 px-12">
							<button
								className={`${
									isSelected === MessageCircle
										? 'border border-background/55 border-dashed p-2 rounded-[.5rem]'
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
										? 'border border-background/55 border-dashed p-2 rounded-[.5rem]'
										: 'border-0'
								} ${'flex flex-col items-end p-0 m-0'}`}
								data-icon="mail"
								onClick={handleClick}>
								{/* <Link href="/contact"> */}
								<Mail
									width={48}
									height={48}
									color={'var(--background'}
								/>
								{/* </Link> */}
							</button>
							<button data-icon="linkedin">
								<a
									href="https://www.linkedin.com/in/andry-rakotoniaina/"
									target="_blank">
									<Linkedin
										width={48}
										height={48}
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
