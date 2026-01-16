import styles from './styles.module.css';

const ConversationTitleCard = ({ title }) => {
    return <li className={styles.conversation_title_card}>{title}</li>
}

export default ConversationTitleCard;