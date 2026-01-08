import { Mail } from "lucide-react";
import { Textarea } from '@/components/ui/textarea';
import styles from './styles.module.css';
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const MailPage = () => {
    return (
		<Card className={cn(styles.container, 'p-0 rounded-none')}>
			{/* <Mail color={'var(--background'} /> */}
			<CardHeader className={styles.header}>
				<CardTitle className="h-full flex justify-center items-center">
					<div>Sujet:</div>
					<Input name="sujet" className="block ml-4 border-0" />
				</CardTitle>
			</CardHeader>
			<Textarea
				name="body"
				className={styles.textarea}
				// field-sizing: Content; + defensive styling
				placeholder="Write your message here..."
			/>
		</Card>
	);
}

export default MailPage;