"use client";
import { useState, useEffect } from 'react';
import { CardFooter } from '@/components/ui/card';
import { MessageCircle, Mail, Linkedin } from 'lucide-react';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

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

    useEffect(() => {
        // if (window) {
        //     const { height } = window.screen
        //     window.scrollTo(0, height);
        // }
        console.log('Type dans FOOTER useEffect: ', type);
    }, [type]);      
    return (
		<CardFooter className={styles.card_footer}>
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