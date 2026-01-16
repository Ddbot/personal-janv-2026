"use client";
import { useState, useEffect } from 'react';
import { CardFooter } from '@/components/ui/card';
import { MessageCircle, Mail, Linkedin } from 'lucide-react';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import ConversationTitleCard from './ConversationTitleCard';


const mock_convos = [
    "Conversation 1",
    "Conversation 2",
    "Conversation 3",
    "Conversation 4",
    "Conversation 5",
    "Conversation 6",
    "Conversation 7",
    "Conversation 8",
];
const Footer = () => {
    // const [category, setCategory] = useState(displayedCategory ?? 'mail');
    const searchParams = useSearchParams();
    const type = searchParams.get('type');
    const navigate = useRouter();

    console.log('Type dans FOOTER rendering: ', type);
    
    function handleClick(e) {
            e.preventDefault()
            // setCategory(e.currentTarget.dataset.icon)
            navigate.push(`?type=${e.currentTarget.dataset.icon}`)
    }
     
    return (
		<CardFooter className={styles.card_footer}>
			{ type === "chat" && <ul className="block w-full self-start">
				{mock_convos.map((title, index) => (
					<ConversationTitleCard key={index} title={title}/>
				))}
			</ul>}
			<button
				className={`${
					type === 'chat' && styles.isSelected
				} ${'flex flex-col items-end p-0 m-0'}`}
				data-icon="chat"
				onClick={handleClick}>
				{/* <Link href="/contact"> */}
				<MessageCircle
					width={type === 'chat' ? 32 : 36}
					height={type === 'chat' ? 32 : 36}
					className="dark:stroke-background p-0"
				/>
				{/* </Link> */}
			</button>
			<button
				className={`${
					type === 'mail' && styles.isSelected
				} ${'flex flex-col items-end p-0 m-0'}`}
				data-icon="mail"
				onClick={handleClick}>
				{/* <Link href="/contact"> */}
				<Mail
					width={type === 'mail' ? 32 : 36}
					height={type === 'mail' ? 32 : 36}
					className="dark:stroke-background p-0"
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
						className="dark:stroke-background"
					/>
				</a>
			</button>
		</CardFooter>
	);
}

export default Footer;