"use client";
import { useEffect, useState, use, useRef, ViewTransition, useCallback } from 'react';   
import { ThemeContext } from '@/contexts/ThemeContext';
import ContactPicker from "./contact-picker";
import Logo from "./site-logo"
import Link from "next/link";
import { cn } from '@/lib/utils';
import { Mail, MessageCircle, Download, LogOut } from 'lucide-react';
import supabase from '@/lib/supabase'
import { useRouter, usePathname } from 'next/navigation';
import { User } from '@supabase/supabase-js';
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item"
import { Lang, LangContext } from '@/contexts/LangContext';
import Image from 'next/image';
import { Sun, Moon } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ThemeSelectionItem from "./theme-selection-item";
import LanguageSelectionItem from "./language-selection-item";

const languages: Lang[] = ["fr", "gb", "de"];
const languageFull: Record<Lang, string>= {
    fr: "Français",
    gb: "English",
    de: "Deutsch"
}

export default function Navbar({ className } : { className: string}) {
    const router = useRouter();
    const pathname = usePathname();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const { lang, changeLang } = use(LangContext);
    const { theme, toggleTheme } = use(ThemeContext);
    const illuRef = useRef<SVGSVGElement | null>(null);

    
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

    // function handleChangeLanguage(l: Lang) {
    //     changeLang(l);
    // }

    function handleSignIn(e: React.MouseEvent) {
        e.preventDefault();
        router.push('/auth')
    }

    const handleSignOut = async () => {
        
    const client = await supabase;
    
    await client.auth.signOut()
        router.push('/')
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
    
    useEffect(() => {         
        if (illuRef.current) { 
            // console.log(illuRef.current); 
            const q = gsap.utils.selector(illuRef);
            const stops = q("#skyGradient > stop");
            // stops.forEach((stop,i) => {
            //     console.log(i+1, '. ', stop.getAttribute('offset'));
            // });


            
        }
    },[theme]);
    
    return (
        <div className={cn(
            className
            // styles.navbar
        )}>
            <Link href='/'>                
                <Logo />
            </Link>
            <div className="flex flex-row flex-nowrap items-center gap-0 lg:gap-4">
                <ContactPicker className="md:w-9 md:h-9 aspect-square">
                    <LanguageSelectionItem />
                    <ThemeSelectionItem />
                    <Item variant='outline' className="h-fit min-h-20 cursor-pointer" onClick={() => router.push('/contact?type=chat')}>
                        <ItemContent>
                            <ItemTitle>
                                {dictionary[lang].launch_chat}
                            </ItemTitle>
                        </ItemContent>
                        <ItemActions>
                            <MessageCircle />
                        </ItemActions>
                    </Item>
                    <Item variant='outline' className="h-fit min-h-20 cursor-pointer hover:inset-shadow-primary-foreground" onClick={() => router.push('/contact?type=mail')}>
                        <ItemContent>
                            <ItemTitle>
                                {dictionary[lang].send_email}
                            </ItemTitle>
                        </ItemContent>
                        <ItemActions>
                            <Mail />                                                    
                        </ItemActions>
                    </Item>
                    <Item variant='outline' className="h-fit min-h-20">
                        <ItemContent>
                            <ItemTitle>
                                {dictionary[lang].download_cv}
                            </ItemTitle>
                        </ItemContent>
                        <ItemActions>
                            <button onClick={() => router.push('/contact?type=mail')}>
                                <Download />                        
                            </button>
                        </ItemActions>
                    </Item>  
                    {user &&
                        <Item variant='outline' className="h-fit min-h-20">
                            <ItemContent>
                                <ItemTitle>
                                    {dictionary[lang].sign_out}
                                </ItemTitle>
                            </ItemContent>
                            {<ItemActions>
                                <button onClick={() => {
                                    supabase.auth.signOut()
                                    // router.push('/')
                                }}>
                                    <LogOut />
                                </button>
                            </ItemActions>}
                        </Item>
                    }               
                </ContactPicker>
            </div>
        </div>
    )
};