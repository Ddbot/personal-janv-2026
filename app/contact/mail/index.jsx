import { Mail } from "lucide-react";
import { Textarea } from '@/components/ui/textarea';
import { Button } from "@/components/ui/button";
import styles from './styles.module.css';
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send, Trash2 } from 'lucide-react';

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
			<CardContent className="relative w-full h-full flex justify-center items-center p-0 m-0">    
				<Textarea
					name="body"
					className={styles.textarea}
					// field-sizing: Content; + defensive styling
					placeholder="Write your message here..."
				/>
			</CardContent>
			<CardFooter className="w-full h-fit flex flex-row items-start justify-end gap-2 p-2 pb-3 m-0">
				<Button variant="outline" className="m-0">
					<Trash2 />
				</Button>
				<Button className="m-0">
					<Send />
				</Button>
			</CardFooter>
		</Card>
	);
}

export default MailPage;