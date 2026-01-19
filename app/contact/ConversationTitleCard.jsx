"use client";
import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import supabase from '@/lib/supabase';
const adminUID = process.env.NEXT_PUBLIC_ADMIN_UID;

const ConversationTitleCard = ({ conversation }) => {
    const [userEmail, setUserEmail] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserEmail = async () => {
            try {
                const { data: { user } } = await (await supabase).auth.getUser();
                if (user) {
                    setUserEmail(user.email || 'Unknown User');
                }
            } catch (error) {
                console.error('Error fetching user:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserEmail();
    }, []);

    if (loading) {
        return <li className={styles.conversation_title_card}>Loading...</li>;
    }

    return <li className={styles.conversation_title_card}>{ conversation.user_id !== adminUID ? userEmail : conversation.title }</li>
}

export default ConversationTitleCard;