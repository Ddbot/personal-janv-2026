"use client";
import { useRef, ViewTransition, use } from 'react';
import { LangContext } from '@/contexts/LangContext';
import { Textarea } from '@/components/ui/textarea';
import { Button } from "@/components/ui/button";
import styles from './styles.module.css';
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Input } from "@/components/ui/input";
import {
    Send
} from 'lucide-react';
import {
	ChatToolbar,
	ChatToolbarAddonEnd,
} from '@/components/chat/chat-toolbar';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import dictionary from '../dictionary';

function MailPage() {
    const footerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const tl = useRef<GSAPTimeline>(null);
    const { lang } = use(LangContext);
    
    const sendMail = (formData: FormData) => {
        const subject = formData.get('subject') as string;
        const body = formData.get('body') as string;
        
        const link = "mailto:contact@andry.online"
        + "?subject=" + subject
        + "&body=" + body;

        window.location.href = link;
    }

    useGSAP(() => {
        const target = footerRef.current;

        gsap.from(target, {
            height: 0,
            duration: .225,
            ease: "expo.out",
        })
    }, { scope: footerRef });

    useGSAP(() => {
        const target = [headerRef.current,'input'];

        gsap.from(target, {
            height: 0,
            duration: .225,
            border: 0,
            yPercent: -100,
            opacity: 0,
            ease: "expo.out",
        })

    }, { scope: headerRef });    
    
    return (<ViewTransition>
        <form action={sendMail} className='w-full h-full'>
            <Card className={styles.container}>
                <CardHeader className={styles.header} ref={headerRef}>
                    <label htmlFor="subject" className='ml-4'>{dictionary[lang].sujet}</label>
                    <Input name="subject" id="subject"/>
                </CardHeader>
                <CardContent className={styles.content}>
                    <Textarea
                        name="body"
                        className={styles.textarea}
                        // field-sizing: Content; + defensive styling
                        placeholder={dictionary[lang].placeholder}
                    />
                </CardContent>
                <CardFooter className={styles.footer} ref={ footerRef }>
                    <ChatToolbar className="w-full">
                        <ChatToolbarAddonEnd className="p-0 m-0 pb-2">
                            <Button type="submit" className="self-end size-8 @md/chat:size-9">
                                <Send className="size-4 @md/chat:size-5 stroke-[1.7px]" />
                            </Button>
                        </ChatToolbarAddonEnd>
                    </ChatToolbar>
                </CardFooter>
            </Card>
        </form>
    </ViewTransition>);
}

export default MailPage;