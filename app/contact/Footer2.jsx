'use client';

import { MessageCircle, Mail, Linkedin } from 'lucide-react';
import { CardFooter } from '@/components/ui/card';
import styles from './styles.module.css';

const Footer2 = () => {

	function handleClick(e) {
		e.preventDefault();
		console.log(e.currentTarget?.dataset.icon);
	}

	return (
		<CardFooter className={styles.card_footer}>
			<button
				className={`${'flex flex-col items-end p-0 m-0'}`}
				data-icon="chat"
				onClick={handleClick}>
				{/* <Link href="/contact"> */}
				<MessageCircle
					width={32}
					height={32}
					className="dark:stroke-background p-0"
				/>
				{/* </Link> */}
			</button>
			<button
				className={`${'flex flex-col items-end p-0 m-0'}`}
				data-icon="mail"
				onClick={handleClick}>
				{/* <Link href="/contact"> */}
				<Mail
					width={32}
					height={32}
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
			{/* </div> */}
		</CardFooter>
	);
};

export default Footer2;