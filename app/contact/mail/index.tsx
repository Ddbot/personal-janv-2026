"use client";
import { useRef } from 'react';
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

function MailPage() {
    const footerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const sendMail = (formData: FormData) => {
    const subject = formData.get('subject') as string;
    const body = formData.get('body') as string;
    
    const link = "mailto:contact@andry.online"
            //  + "?cc=myCCaddress@example.com"
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

    },{ scope: headerRef});    
    return (
        <form action={sendMail} className='w-full h-full'>
            <Card className={styles.container}>
                <CardHeader className={styles.header} ref={headerRef}>
                    {/* <CardTitle className="w-full h-full flex justify-center items-center "> */}
                        <label htmlFor="subject" className='ml-4'>Sujet:</label>
                        <Input name="subject" id="subject"/>
                    {/* </CardTitle> */}
                </CardHeader>
                <CardContent className={styles.content}>
                    <Textarea
                        name="body"
                        className={styles.textarea}
                        // field-sizing: Content; + defensive styling
                        placeholder="Write your message here..."
                    />
                </CardContent>
                <CardFooter className={styles.footer} ref={ footerRef }>
                    <ChatToolbar className="w-full">
                        {/* <ChatToolbarAddonStart>
                            <Button
                                variant="ghost"
                                className="size-8 @md/chat:size-9">
                                <PlusIcon className="size-5 @md/chat:size-6 stroke-[1.7px]" />
                            </Button>
                        </ChatToolbarAddonStart> */}
                        {/* <ChatToolbarTextarea /> */}
                        <ChatToolbarAddonEnd className="p-0 m-0 pb-2">
                            {/* <Button
                                className="size-8 @md/chat:size-9"
                                variant="outline">
                                <Trash2 className="size-4 @md/chat:size-5 stroke-[1.7px]" />
                            </Button> */}
                            <Button type="submit" className="size-8 @md/chat:size-9">
                                <Send className="size-4 @md/chat:size-5 stroke-[1.7px]" />
                            </Button>
                        </ChatToolbarAddonEnd>
                    </ChatToolbar>
                </CardFooter>
            </Card>
        </form>
	);
}

export default MailPage;