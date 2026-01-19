"use client";
import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import supabase from '@/lib/supabase';
const adminUID = process.env.NEXT_PUBLIC_ADMIN_UID;

const ConversationTitleCard = ({ conversation }) => {
    const [userData, setuserData] = useState({ email: '', id: '' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const { data: { user } } = await (await supabase).auth.getUser();
                if (user) {
                    const { email, id } = user;
                    setuserData({ email, id  } || 'Unknown User');
                }
            } catch (error) {
                console.error('Error fetching user:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <li className={styles.conversation_title_card}>Loading...</li>;
    }

    return (
        <li className={styles.conversation_title_card} style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '1.5rem'
        }}>
			{conversation.user_id !== adminUID ? (
				userData.id !== adminUID ? (
					<button>
						<p>Conversation avec Andry</p>
					</button>
				) : (
					<button
						onClick={() => {
							console.log(
								'Clicked on conversation: ',
								conversation.id,
							);
						}}>
						{conversation.title}
					</button>
				)
			) : (
				<button>
					<p>Conversation avec moi-même</p>
				</button>
			)}
		</li>
	);
}

export default ConversationTitleCard;