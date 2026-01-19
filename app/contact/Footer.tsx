"use client";
import { useState, useEffect } from 'react';
import { CardFooter } from '@/components/ui/card';
import { MessageCircle, Mail, Linkedin } from 'lucide-react';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import ConversationTitleCard from './ConversationTitleCard';
import { createConversation, getUserConversations } from '@/lib/conversations';
import { Conversation } from '@/lib/conversations';

const Footer = ({ convos }: { convos: Conversation[] }) => {
    // const [category, setCategory] = useState(displayedCategory ?? 'mail');
    const searchParams = useSearchParams();
    const type = searchParams.get('type');
    const navigate = useRouter();
    const [conversations, setConversations] = useState(convos);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
		const fetchConversations = async () => {
			try {
				// const userConversations = await getUserConversations();
				if (convos.length === 0) {
					await createConversation('Andry dans FOOTER');
					// Fetch again after creating to get the newly created conversation
					const updatedConversations = await getUserConversations();
					setConversations(updatedConversations);
				} else {
					setConversations(convos);
				}
			} catch (error) {
				console.error('Error fetching conversations:', error);
				setConversations([]);
			} finally {
				setLoading(false);
			}
        };

		if (type === 'chat') {
			fetchConversations();
		}
	}, [type, convos, setLoading, setConversations]);

    function handleClick(e) {
            e.preventDefault()
            // setCategory(e.currentTarget.dataset.icon)
            navigate.push(`?type=${e.currentTarget.dataset.icon}`)
    }
     
    return (
		<CardFooter className={styles.card_footer}>
			{ type === "chat" && 
				<ul className="block w-full self-start">
					{loading ? (
						<li className="text-gray-500 p-2">Loading conversations...</li>
					) : convos.length === 0 ? (
						<li className="text-gray-500 p-2">No conversations yet</li>
					) : (
						convos.map((conversation) => (
							<ConversationTitleCard key={conversation.id} conversation={conversation}/>
						))
					)}
				</ul>
			}
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