import { forwardRef, ForwardedRef } from 'react';
import Link from "next/link";
import { Linkedin, Mail, MessageCircle } from 'lucide-react';

interface ProjectsContactCardContentProps {
    fn: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ProjectsContactCardContent = forwardRef<HTMLDivElement, ProjectsContactCardContentProps>(({ fn }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} key="contact" className="w-full flex justify-end gap-4">
            <button onClick={fn} data-icon="chat">
                <MessageCircle color={'var(--background'} />
            </button>
            <button onClick={fn} data-icon="mail">
                <Mail color={'var(--background'} />
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
});

ProjectsContactCardContent.displayName = 'ProjectsContactCardContent';

export default ProjectsContactCardContent;