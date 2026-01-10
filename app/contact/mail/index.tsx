"use client";

import { Textarea } from '@/components/ui/textarea';
import { Button } from "@/components/ui/button";
import styles from './styles.module.css';
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Input } from "@/components/ui/input";
import {
    Send, Trash2,
} from 'lucide-react';
import {
	ChatToolbar,
	ChatToolbarAddonEnd,
} from '@/components/chat/chat-toolbar';


function MailPage() {
    const sendMail = (formData: FormData) => {
    const subject = formData.get('subject') as string;
    const body = formData.get('body') as string;
    
    const link = "mailto:contact@andry.online"
            //  + "?cc=myCCaddress@example.com"
             + "?subject=" + subject
             + "&body=" + body;
    
    window.location.href = link;
}
    return (
        <form action={sendMail} className='w-full h-full'>
            <Card className={styles.container}>
                <CardHeader className={styles.header}>
                    {/* <CardTitle className="w-full h-full flex justify-center items-center "> */}
                        <label htmlFor="subject" className='ml-4'>Sujet:</label>
                        <Input name="subject" id="subject" className="w-full min-w-[70ch] block ml-2 border-0" />
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
                <CardFooter className={styles.footer}>
                    <ChatToolbar className="w-full bg-transparent">
                        {/* <ChatToolbarAddonStart>
                            <Button
                                variant="ghost"
                                className="size-8 @md/chat:size-9">
                                <PlusIcon className="size-5 @md/chat:size-6 stroke-[1.7px]" />
                            </Button>
                        </ChatToolbarAddonStart> */}
                        {/* <ChatToolbarTextarea /> */}
                        <ChatToolbarAddonEnd className="p-0 m-0">
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