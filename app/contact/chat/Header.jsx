"use client";

import { ChatHeader, ChatHeaderStart, ChatHeaderMain, ChatHeaderEnd } from "@/components/chat/chat-header";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Download, Phone, Video } from 'lucide-react';
import styles from './styles.module.css';
const Header = ({ title, category }) => {
    function activateMediaConversation(e) {
        e.preventDefault();
        console.log(e.currentTarget?.dataset.name);
    }
    return (
		<ChatHeader className={styles.header}>
			<ChatHeaderStart>
				<Avatar>
					<AvatarImage
						src="https://github.com/shadcn.png"
						alt="@shadcn"
					/>
					<AvatarFallback>A</AvatarFallback>
				</Avatar>
				<span className="font-medium">Andry Nirina</span>
				<span className="text-sm font-medium">
					<b className="text-(--color-20)">/</b>
				</span>
			</ChatHeaderStart>
			<ChatHeaderMain>
				<span className="text-sm font-medium text-primary">
					{title}
				</span>
			</ChatHeaderMain>
			<ChatHeaderEnd className="w-fit p-0">
				{category !== 'mail' && (
					<>
						<div className="mx-2">
							<button
								onClick={activateMediaConversation}
								data-name="phone">
								<Phone width={20} height={20} />
							</button>
						</div>
						<div className="mx-2">
							<button
								onClick={activateMediaConversation}
								data-name="video">
								<Video width={20} height={20} />
							</button>
						</div>
					</>
				)}
				{category === 'mail' && (
					<div className="mx-2">
						<button
							onClick={activateMediaConversation}
							data-name="download">
							<Download width={20} height={20} />
						</button>
					</div>
				)}
			</ChatHeaderEnd>
		</ChatHeader>
	);
};
            
export default Header;