import styles from './styles.module.css';
const adminUID = process.env.NEXT_PUBLIC_ADMIN_UID;

const ConversationTitleCard = ({ conversation }) => {
    return <li className={styles.conversation_title_card}>{ conversation.user_id !== adminUID ? 'Conversation avec Andry' : conversation.title }</li>
}

export default ConversationTitleCard;