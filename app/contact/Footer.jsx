"use client";
import { useState, useEffect } from 'react';
import { CardFooter } from '@/components/ui/card';
import { MessageCircle, Mail, Linkedin, Download } from 'lucide-react';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import ConversationTitleCard from './ConversationTitleCard';
import { createConversation, getUserConversations } from '@/lib/conversations';

const Footer = () => {
    // const [category, setCategory] = useState(displayedCategory ?? 'mail');
    const searchParams = useSearchParams();
    const type = searchParams.get('type');
    const navigate = useRouter();
    const [conversations, setConversations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
		const fetchConversations = async () => {
			try {
				const userConversations = await getUserConversations();
				if (userConversations.length === 0) {
					await createConversation('Andry dans FOOTER');
					// Fetch again after creating to get the newly created conversation
					const updatedConversations = await getUserConversations();
					setConversations(updatedConversations);
				} else {
					setConversations(userConversations);
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
	}, [type]);

    console.log('Type dans FOOTER rendering: ', type);
    
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
					) : conversations.length === 0 ? (
						<li className="text-gray-500 p-2">No conversations yet</li>
					) : (
						conversations.map((conversation) => (
							<ConversationTitleCard key={conversation.id} title={conversation.title}/>
						))
					)}
				</ul>
			}
			<button
				className={`${
					type === 'chat' && styles.isSelected
				} ${
					type === 'mail' && styles.isSelected
				} ${
					type === 'download' && styles.isSelected
				}`}
				onClick={handleClick}
				data-icon="chat"
			>
				<MessageCircle className="w-6 h-6" />
			</button>
			<button
				className={`${
					type === 'chat' && styles.isSelected
				} ${
					type === 'mail' && styles.isSelected
				} ${
					type === 'download' && styles.isSelected
				}`}
				onClick={handleClick}
				data-icon="mail"
			>
				<Mail className="w-6 h-6" />
			</button>
			<button
				className={`${
					type === 'chat' && styles.isSelected
				} ${
					type === 'mail' && styles.isSelected
				} ${
					type === 'download' && styles.isSelected
				}`}
				onClick={handleClick}
				data-icon="download"
			>
				<Download className="w-6 h-6" />
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