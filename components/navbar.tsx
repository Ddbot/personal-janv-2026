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
import LightThemeSwitchIllustration from './assets/LightThemeSwitchIllustration';
import { Sun, Moon } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


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

    const setIlluRef = useCallback((node: SVGSVGElement | null) => {
        illuRef.current = node;

        // if (node) console.log('illuRef: ', node);
        
    }, []);

    
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

    function handleClick(e: React.MouseEvent) {
        e.preventDefault();
        
        console.log('Theme avant le click: ', theme);
        
        // on ANIME LA SORTIE
        const tl = gsap.timeline({
            defaults: {
                duration: .225,
                ease: theme === 'light' ? "power4.out" : "power4.in",
            },
            // onComplete: toggleTheme,
        });

        if (illuRef.current) {
            const earth = illuRef.current.querySelector('g#earth');
            const sun = illuRef.current.querySelector('g#sun');
            const moon = illuRef.current.querySelector('g#moon');    
            const stop1 = illuRef.current.querySelector('#skyGradient > stop:first-child');
            const stop2 = illuRef.current.querySelector('#skyGradient > stop:nth-child(2)');
            const stop3 = illuRef.current.querySelector('#skyGradient > stop:nth-child(3)');

            const stops_initial_values = {
                dark: ["#2980b9", "#6dd5fa", "#ffffff"],
                light: ["#203A43", "#0F2027", "#2980b9"]
            };

            const stops = [stop1, stop2, stop3];            

            stops.forEach((stop, i) => { 
                tl.to(stop, {
                    stopColor: theme === 'light' ? stops_initial_values.dark[i] : stops_initial_values.light[i],
                    duration: .4
                },0);
            });
            const animateMoon = gsap.to(moon, {
                yPercent: theme === 'light' ? -100 : 0,
                opacity: theme === 'light' ? 0 : 1,
                onComplete: toggleTheme,
                duration: theme === 'light' ? .42 : .225,
                ease: theme === 'light' ? "power4.out" : "power4.in",
            });

            const animateSun = gsap.fromTo(sun, {
                yPercent: theme === 'light' ? 100 : 0,
                opacity: theme === 'light' ? 0 : 1,
                
            }, {
                yPercent: theme === 'light' ? 0 : 100,
                opacity: theme === 'light' ? 1 : 0,
                duration: .125
            });

            const earthAnimationVars: Record<string, gsap.TweenVars> = {
                light:  { xPercent: 0, yPercent: 0, opacity: 1, ease: "power4.out", duration: .32 },
                dark:  { xPercent: 0, yPercent: 100, opacity: 0 }
            }

            tl
                .to(earth, earthAnimationVars[theme], 0)
                .add(animateMoon, 0)
                .add(animateSun, 0);
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
                    <Item variant='outline' className="relative h-fit min-h-20 overflow-hidden cursor-pointer" onClick={handleClick}>
                        <LightThemeSwitchIllustration ref={setIlluRef} theme={ theme } />
                        <ItemContent className='flex flex-row justify-start'>
                            <ItemTitle className='w-fit'>
                                {dictionary[lang].theme}
                            </ItemTitle>
                        </ItemContent>
                        <ItemActions>                            
                            {/* <button ref={ btnRef } onClick={handleClick}>
                                {theme === "light" ? <Moon fill="var(--card-foreground)" className='w-9 h-9' /> : <Sun fill="var(--accent-3)" stroke="var(--accent-3)" strokeWidth={ 1} className='w-9 h-9'/>}
                            </button> */}
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
}
