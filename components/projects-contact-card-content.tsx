import { forwardRef, ForwardedRef } from 'react';
import Link from "next/link";
import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Playwrite_FR_Trad } from "next/font/google";
import { cn } from "@/lib/utils";

const playwrite = Playwrite_FR_Trad({ variable:'--font-sans'})

interface ProjectsContactCardContentProps {
    fn: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ProjectsContactCardContent = forwardRef<HTMLDivElement, ProjectsContactCardContentProps>(({ fn }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} key="contact" className="w-full flex justify-end gap-4">
                <Link href="/blog">
                    {/* <Mail color={'var(--background'} className='pointer-events-auto' /> */}
                    <span className={cn(playwrite.className, 'text-background')}>
                        blog
                    </span>
                </Link>
            <button onClick={fn} data-icon="chat" className='pointer-events-auto hover:scale-120 transition-all duration-300'>
                <Link href="/contact?type=chat">
                    <MessageCircle color={'var(--background'} className='pointer-events-auto' />
                </Link>
            </button>
            <button onClick={fn} data-icon="mail" className='pointer-events-auto hover:scale-120 transition-all duration-300'>
                <Link href="/contact?type=mail">
                    <Mail color={'var(--background'} className='pointer-events-auto' />
                </Link>
            </button>
            <button data-icon="linkedin" className='pointer-events-auto hover:scale-120 transition-all duration-300'>
                <a
                    href="https://www.linkedin.com/in/andry-rakotoniaina/"
                    target="_blank">
                    <Linkedin color={'var(--background'} />
                </a>
            </button>
        </div>
    );
});

ProjectsContactCardContent.displayName = 'ProjectsContactCardContent';

export default ProjectsContactCardContent;