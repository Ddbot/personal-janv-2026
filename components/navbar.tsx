"use client";
import { useEffect, useState, use } from 'react';   
import Link from "next/link";
import Logo from "./site-logo"
import SettingsSheet from "./settings-sheet";
import ThemeSelectionItem from "./settings-selection-items/theme-selection-item";
import LanguageSelectionItem from "./settings-selection-items/language-selection-item";
import ChatSelectionItem from './settings-selection-items/chat-selection-item';
import MailSelectionItem from './settings-selection-items/mail-selection-item';
import DownloadCVItem from './settings-selection-items/download-cv-item';
import { Item, ItemActions, ItemContent, ItemTitle } from "@/components/ui/item"
import { cn } from '@/lib/utils';
import { LogOut } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import supabase from '@/lib/supabase'
import { User } from '@supabase/supabase-js';
import { LangContext } from '@/contexts/LangContext';

export default function Navbar({ className } : { className: string}) {
    const router = useRouter();
    const pathname = usePathname();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const { lang, changeLang } = use(LangContext);

    const dictionary = {
        fr: {
            settings: 'Paramètres',
            lang: 'Langue',
            theme: 'Thème',
            send_email: 'Envoyer un email',
            download_cv: 'Télécharger le CV',
            sign_out: 'Déconnexion',
            launch_chat: 'Lancer le chat'
        },
        gb: {
            settings: 'Settings',
            lang: 'Language',
            theme: 'Theme',
            send_email: 'Send email',
            download_cv: 'Download Andry\'s resume',
            sign_out: 'Sign out',
            launch_chat: 'Start chat'
        },
        de: {
            settings: 'Einstellungen',
            lang: 'Sprache',
            theme: 'Thema',
            send_email: 'Senden Sie eine E-Mail',
            download_cv: 'Lebenslauf herunterladen',
            sign_out: 'Abmelden',
            launch_chat: 'Chat starten'
        }
    }

    // CHECK AUTH
    useEffect(() => {
        async function checkAuthState() {
            const client = await supabase;
            const { data: authListener } = await client.auth.onAuthStateChange(
                (event, session) => {
                    if (session?.user) {
                        setUser(session.user)
                        setLoading(false);
                    } else {
                        setUser(null);
                        setLoading(false);
                        if (pathname === '/contact?type=chat') router.push('/auth')
                    }
                }
            )
        }

        checkAuthState();

    }, [router, setUser, setLoading, pathname]);
    
    return (
        <div className={cn(
            className
        )}>
            <Link href='/'>                
                <Logo />
            </Link>
            <div className="flex flex-row flex-nowrap items-center gap-0 lg:gap-4">
                <SettingsSheet className="md:w-9 md:h-9 aspect-square">
                    { !pathname.startsWith('/blog') && <LanguageSelectionItem />}
                        <ThemeSelectionItem />
                    {!pathname.startsWith('/blog') && <>
                        <ChatSelectionItem title={dictionary[lang].launch_chat} />
                        <MailSelectionItem title={dictionary[lang].send_email} />
                        <DownloadCVItem title={dictionary[lang].download_cv} />
                        </>
                    }
                    {user && !pathname.startsWith('/blog') && 
                        <Item variant='outline' className="h-fit min-h-20">
                            <ItemContent>
                                <ItemTitle>
                                    {dictionary[lang].sign_out}
                                </ItemTitle>
                            </ItemContent>
                            {<ItemActions>
                                <button onClick={() => {
                                    supabase.auth.signOut()
                                }}>
                                    <LogOut />
                                </button>
                            </ItemActions>}
                        </Item>
                    }               
                </SettingsSheet>
            </div>
        </div>
    )
};