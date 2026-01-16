"use client";

import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { LangContext } from '@/contexts/LangContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import ChatHeader from './Header';
import ChatPage from './chat/page';
import MailPage from './mail/page';
import { MessageCircle, Mail, Linkedin } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { use } from 'react';
import { dictionary } from '@/lib/dictionary';

const Empty = () => {
	return null;
};

const Screen = () => {
    const {lang} = use(LangContext);
    const [displayedCategory, setDisplayedCategory] = useState('chat')
    const [isSelected, setIsSelected] = useState(() => {
        switch (displayedCategory) {
                case 'chat':
                    return MessageCircle;
                case 'mail':
                    return Mail;
                default:
                    return Mail;
        }
    });
    const navigate = useRouter();

    const features = [
        {
            Icon: Empty,
            name: '',
            title: dictionary[lang]['features']['description'][6],
            // className: `${className}`,
            href: '#',
            cta: '',
            background: (
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                    }}
                    className="flex items-center justify-center w-full h-full bg-primary rounded-b-4xl">
                    CONTACT
                </div>
            ),
        },
    ];    

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
            e.preventDefault()
            setDisplayedCategory(e.currentTarget.dataset.icon as string)
            switch (e.currentTarget.dataset.icon) {
                case 'chat':
                    setIsSelected(MessageCircle)
                    break;
                case 'mail':
                    setIsSelected(Mail)
                    break;            
                default:
                    break;
            }
            navigate.push(`?type=${e.currentTarget.dataset.icon}`)
    }

    useEffect(() => {
        if (window) {
            const { height } = window.screen
            window.scrollTo(0, height);
        }
    }, []);      
    
    return features.map((feature, idx) => (<Card key={displayedCategory} className={styles.card_container}>
        <ChatHeader title={"Développeur Front End"} category={ displayedCategory} />
        <CardContent className={`min-w-[70%] flex-1 min-h-0 px-0 ${displayedCategory === 'mail' ? 'p-0' : ''}`}>
            {displayedCategory === 'chat' ? (
                <ChatPage />
            ) : (
                <MailPage />
            )}
        </CardContent>
        <CardFooter className={styles.card_footer}>
            <button
                className={`${isSelected=== MessageCircle && styles.isSelected} ${'flex flex-col items-end p-0 m-0'}`}
                data-icon="chat"
                onClick={handleClick}>
                {/* <Link href="/contact"> */}
                <MessageCircle
                    width={isSelected === MessageCircle ? 32 : 36}
                    height={isSelected === MessageCircle ? 32 : 36}                                     
                    className='dark:stroke-background p-0'
                />
                {/* </Link> */}
            </button>
            <button
                className={`${isSelected=== Mail && styles.isSelected} ${'flex flex-col items-end p-0 m-0'}`}
                data-icon="mail"
                onClick={handleClick}>
                {/* <Link href="/contact"> */}
                <Mail
                    width={isSelected === Mail ? 32 : 36}
                    height={isSelected === Mail ? 32 : 36}
                    className='dark:stroke-background p-0'
                />
                {/* </Link> */}
            </button>
            <button data-icon="linkedin">
                <a
                    href="https://www.linkedin.com/in/andry-rakotoniaina/"
                    target="_blank">
                    <Linkedin
                        width={36}
                        height={36}
                        className='dark:stroke-background'
                    />
                </a>
            </button>
            {/* </div> */}
        </CardFooter>
    </Card>
    ))
}

export default Screen;