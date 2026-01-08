import { Mail } from "lucide-react";
import { Textarea } from '@/components/ui/textarea';
import { Button } from "@/components/ui/button";
import styles from './styles.module.css';
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Send, Trash2,
	Phone,
	Video,
	PlusIcon,
	Gift,
	CalendarDays,
	SquareChevronRight,
} from 'lucide-react';
import {
	ChatToolbar,
	ChatToolbarAddonStart,
	ChatToolbarTextarea,
	ChatToolbarAddonEnd,
} from '@/components/chat/chat-toolbar';

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
			<CardFooter className="w-full h-fit flex flex-row items-start justify-end gap-2">
				<ChatToolbar className="w-full bg-transparent">
					{/* <ChatToolbarAddonStart>
						<Button
							variant="ghost"
							className="size-8 @md/chat:size-9">
							<PlusIcon className="size-5 @md/chat:size-6 stroke-[1.7px]" />
						</Button>
					</ChatToolbarAddonStart> */}
					{/* <ChatToolbarTextarea /> */}
					<ChatToolbarAddonEnd>
						<Button
							className="size-8 @md/chat:size-9"
							variant="outline">
							<Trash2 className="size-4 @md/chat:size-5 stroke-[1.7px]" />
						</Button>
						<Button className="size-8 @md/chat:size-9">
							<Send className="size-4 @md/chat:size-5 stroke-[1.7px]" />
						</Button>
					</ChatToolbarAddonEnd>
				</ChatToolbar>
			</CardFooter>
		</Card>
	);
}

export default MailPage;