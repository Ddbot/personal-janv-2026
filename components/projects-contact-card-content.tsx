import { forwardRef, ForwardedRef, useRef, useState } from 'react';
import Link from "next/link";
import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Playwrite_FR_Trad } from "next/font/google";
import { cn } from "@/lib/utils";
import styles from './styles/projects.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const playwrite = Playwrite_FR_Trad({ variable:'--font-sans'})

interface ProjectsContactCardContentProps {
    fn: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Ornament = ({ target, text }: { target: string; text: string }) => {
    const ref = useRef<HTMLDivElement>(null);

    return <div ref={ref} className={styles.ornament}>        
        {text === target ? <div><div>\</div><div>|</div><div>/</div></div> : <div className='inline-flex m-0 p-0 border-0'><div></div><div></div><div></div></div>}
    </div>
}

const ProjectsContactCardContent = forwardRef<HTMLDivElement, ProjectsContactCardContentProps>(({ fn }, ref: ForwardedRef<HTMLDivElement>) => {
    const [text, setText]: [string, React.Dispatch<React.SetStateAction<string>>] = useState('blog');

    function handleHover(e: React.PointerEvent<HTMLAnchorElement | HTMLButtonElement>) {
        e.preventDefault();
        const { icon } = e.currentTarget.dataset;
        setText(icon || '');
    }

    return (
        <div ref={ref} key="contact" className={cn(styles.ProjectsContactCardContent)}>
            <Link href="/blog" className={cn(styles.button)} data-icon="blog" onPointerEnter={handleHover}>
                <span className={cn(playwrite.className, 'text-background font-extrabold')}>
                    blog
                </span>
                <Ornament target="blog" text={text} />
            </Link>
            <button onClick={fn} data-icon="chat" className={styles.button} onPointerEnter={handleHover}>
                <Link href="/contact?type=chat">
                    <MessageCircle color={'var(--background'} className='pointer-events-auto' />
                </Link>
                <Ornament target="chat" text={text} />
            </button>
            <button onClick={fn} data-icon="mail" className={styles.button} onPointerEnter={handleHover}>
                <Link href="/contact?type=mail">
                    <Mail color={'var(--background'} className='pointer-events-auto' />
                </Link>
                <Ornament target="mail" text={text} />
            </button>
            <button data-icon="linkedin" className={styles.button} onPointerEnter={handleHover}>
                <a
                    href="https://www.linkedin.com/in/andry-rakotoniaina/"
                    target="_blank">
                    <Linkedin color={'var(--background'} />
                </a>
                <Ornament target="linkedin" text={text} />
            </button>
        </div>
    );
});

ProjectsContactCardContent.displayName = 'ProjectsContactCardContent';

export default ProjectsContactCardContent;