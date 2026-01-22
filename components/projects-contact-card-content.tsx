import { forwardRef, ForwardedRef } from 'react';
import Link from "next/link";
import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Playwrite_FR_Trad } from "next/font/google";
import { cn } from "@/lib/utils";
import styles from './styles/projects.module.css';

const playwrite = Playwrite_FR_Trad({ variable:'--font-sans'})

interface ProjectsContactCardContentProps {
    fn: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Ornament = () => {
    return <div className='absolute top-0 left-0'>\ | /</div>
}

const ProjectsContactCardContent = forwardRef<HTMLDivElement, ProjectsContactCardContentProps>(({ fn }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} key="contact" className={cn(styles.ProjectsContactCardContent)}>
            <Link href="/blog" className='relative'>
                <span className={cn(playwrite.className, 'text-background')}>
                    blog
                </span>
                <Ornament />
            </Link>
            <button onClick={fn} data-icon="chat" className='relative pointer-events-auto hover:scale-120 transition-all duration-300'>
                <Link href="/contact?type=chat">
                    <MessageCircle color={'var(--background'} className='pointer-events-auto' />
                </Link>
                <Ornament />
            </button>
            <button onClick={fn} data-icon="mail" className='relative pointer-events-auto hover:scale-120 transition-all duration-300'>
                <Link href="/contact?type=mail">
                    <Mail color={'var(--background'} className='pointer-events-auto' />
                </Link>
                <Ornament />
            </button>
            <button data-icon="linkedin" className='relative pointer-events-auto hover:scale-120 transition-all duration-300'>
                <a
                    href="https://www.linkedin.com/in/andry-rakotoniaina/"
                    target="_blank">
                    <Linkedin color={'var(--background'} />
                </a>
                <Ornament />
            </button>
        </div>
    );
});

ProjectsContactCardContent.displayName = 'ProjectsContactCardContent';

export default ProjectsContactCardContent;