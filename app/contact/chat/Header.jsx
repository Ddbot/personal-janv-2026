import { ChatHeader, ChatHeaderStart, ChatHeaderMain, ChatHeaderEnd } from "@/components/chat/chat-header";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Phone, Video } from 'lucide-react';
import styles from './styles.module.css';
const Header = ({ title }) => {
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
				<Phone width={20} height={20} className="mx-2" />
				<Video width={20} height={20} className="mx-2" />
			</ChatHeaderEnd>
		</ChatHeader>
	);
};
            
export default Header;