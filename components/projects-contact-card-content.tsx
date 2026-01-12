import Link from "next/link";
import { Linkedin, Mail, MessageCircle } from 'lucide-react';
const ProjectsContactCardContent = () => {
    
    function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();        
        console.log(e.currentTarget.dataset.icon)
        // 1. ANIMER la bentogrid

        // 2. NAVIGUER VERS CHAT OU MAIL
    }

    return (
        <div key="contact" className="w-full flex justify-end gap-4">
            <button onClick={handleClick} data-icon="chat">
                {/* <Link
                    href={{
                        pathname: '/contact',
                        query: { type: 'chat' },
                    }}> */}
                    <MessageCircle color={'var(--background'} />
                {/* </Link> */}
            </button>
            <button onClick={handleClick} data-icon="mail">
                <Link
                    href={{
                        pathname: '/contact',
                        query: { type: 'mail' },
                    }}>
                    <Mail color={'var(--background'} />
                </Link>
            </button>
            <button data-icon="linkedin">
                <a
                    href="https://www.linkedin.com/in/andry-rakotoniaina/"
                    target="_blank">
                    <Linkedin color={'var(--background'} />
                </a>
            </button>
        </div>
    );
}

export default ProjectsContactCardContent;