"use client";
import { useState, useEffect } from 'react';
import { CardFooter } from '@/components/ui/card';
import { MessageCircle, Mail, Linkedin } from 'lucide-react';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

const Footer = ({ displayedCategory }) => {
    const [category, setCategory] = useState(displayedCategory ?? 'mail');
    const navigate = useRouter();
    
    function handleClick(e) {
            e.preventDefault()
            setCategory(e.currentTarget.dataset.icon)
            navigate.push(`?type=${e.currentTarget.dataset.icon}`)
    }

    // useEffect(() => {
    //     if (window) {
    //         const { height } = window.screen
    //         window.scrollTo(0, height);
    //     }
    // }, []);      
    return (
		<CardFooter className={styles.card_footer}>
			<button
				className={`${
					category === 'chat' && styles.isSelected
				} ${'flex flex-col items-end p-0 m-0'}`}
				data-icon="chat"
				onClick={handleClick}>
				{/* <Link href="/contact"> */}
				<MessageCircle
					width={category === 'chat' ? 32 : 36}
					height={category === 'chat' ? 32 : 36}
					className="dark:stroke-background p-0"
				/>
				{/* </Link> */}
			</button>
			<button
				className={`${
					category === 'mail' && styles.isSelected
				} ${'flex flex-col items-end p-0 m-0'}`}
				data-icon="mail"
				onClick={handleClick}>
				{/* <Link href="/contact"> */}
				<Mail
					width={category === 'mail' ? 32 : 36}
					height={category === 'mail' ? 32 : 36}
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