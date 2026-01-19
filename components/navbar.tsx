import { useEffect, useState, use } from 'react';
import ThemeToggler from "./theme-toggler";
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

    function handleChangeLanguage(l: Lang) {
        changeLang(l);
    }

    function handleSignIn(e: React.MouseEvent) {
        e.preventDefault();
        router.push('/auth')
    }

    const handleSignOut = async () => {
        
    const client = await supabase;
    
    await client.auth.signOut()
        router.push('/')
    }
    
    useEffect(() => {
        async function checkAuthState() {
            const client = await supabase;
            const { data: authListener } = client.auth.onAuthStateChange(
                (event, session) => {
                    if (session?.user) {
                        setUser(session.user)
                        setLoading(false);
                        console.log(session.user)
                    } else {
                        console.log('Pas de user registered ', pathname)
                        setUser(null);
                        setLoading(false);
                        if(pathname !== '/') router.push('/auth')
                    }
                }
            )
        }

        checkAuthState();

    }, [router, setUser, setLoading, pathname])    
    
    return (
        <div className={cn(`
            fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md transition-transform duration-300 ease-in-out
            md:sticky md:top-0 md:bg-transparent md:backdrop-blur-none md:border-0`,
            'py-2 px-4 lg:p-8 lg:space-y-8',
            'w-full flex flex-row flex-nowrap justify-between md:flex-nowrap gap-4',
            className
        )}>
            <Link href={'/'}>                
                <Logo />
            </Link>
            <div className="flex flex-row flex-nowrap items-center gap-0 lg:gap-4">
                <ContactPicker className="md:w-9 md:h-9 aspect-square">
                    <Item variant='outline' className="h-fit min-h-20">
                        <ItemContent>
                            {dictionary[lang].lang}
                        </ItemContent>
                        <ItemActions className='w-full h-fit flex justify-center gap-3 p-0'>
                            {/* <LanguagePicker /> */}
                            {languages.map((l) => {
                                return <Item key={l} variant='outline' className='self-start flex flex-col items-center p-2'>
                                    <ItemTitle style={{
                                        transition: 'opacity .225s linear',
                                        opacity: l === lang ? 0 : 1
                                    }}>{ languageFull[l] as string}</ItemTitle>
                                    <ItemDescription>
                                        <button
                                            className="flex flex-col items-center w-12 h-12 focus:outline-none"
                                            onClick={() => handleChangeLanguage(l)}
                                            disabled={l === lang}
                                            style={{
                                                transition: 'opacity .225s linear',
                                                opacity: l === lang ? 0 : 1
                                            }}>
                                            {/* <span className='text-xs'>{languageFull[l]}</span> */}
                                            <Image src={`/${l}-flag.png`} alt={`${l} flag`} width={64} height={64} />
                                        </button>
                                    </ItemDescription>
                                </Item>
                            })
                            }
                        </ItemActions>
                    </Item>
                    <Item variant='outline' className="h-fit min-h-20">
                        <ItemContent>
                            <ItemTitle>
                                {dictionary[lang].theme}
                            </ItemTitle>
                        </ItemContent>
                        <ItemActions>
                            <ThemeToggler />                            
                        </ItemActions>
                    </Item>
                    <Item variant='outline' className="h-fit min-h-20">
                        <ItemContent>
                            <ItemTitle>
                                {dictionary[lang].launch_chat}
                            </ItemTitle>
                        </ItemContent>
                        <ItemActions>
                            <button onClick={() => router.push('/contact?type=chat')}>
                                <MessageCircle />
                            </button>                          
                        </ItemActions>
                    </Item>
                    <Item variant='outline' className="h-fit min-h-20">
                        <ItemContent>
                            <ItemTitle>
                                {dictionary[lang].send_email}
                            </ItemTitle>
                        </ItemContent>
                        <ItemActions>
                            <button onClick={() => router.push('/contact?type=mail')}>
                                <Mail />                        
                            </button>
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
                    {user && <Item variant='outline' className="h-fit min-h-20">
                        <ItemContent>
                            <ItemTitle>
                                {dictionary[lang].sign_out}
                            </ItemTitle>
                        </ItemContent>
                        <ItemActions>
                            <button onClick={() => {
                                supabase.auth.signOut()
                                router.push('/')
                            }}>
                                <LogOut />                        
                            </button>
                        </ItemActions>
                    </Item>}
                    
                </ContactPicker>
            </div>
        </div>
    )
}
