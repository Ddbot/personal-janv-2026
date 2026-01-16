import React, { MouseEvent, PointerEvent } from 'react'
import styles from './styles.module.css';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import ChatHeader from './Header';
import Footer2 from './Footer2';

const ContactLayout = ({ children }: { children: React.ReactNode}) => {
    return <Card className={styles.card_container}>
        {/* <ChatHeader title={"Développeur Front End"} /> */}
        <CardContent className={`min-w-[70%] flex-1 min-h-0 px-0`}>
            {children}
        </CardContent>
        <Footer2 />
    </Card>
}

export default ContactLayout;