
import LightThemeSwitchIllustration from '../assets/LightThemeSwitchIllustration';
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";
import { useCallback, useRef, use, useState } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import { LangContext } from "@/contexts/LangContext";
import gsap from "gsap";
import { cn } from "@/lib/utils";

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
};

const ThemeSelectionItem = () => {
    const [isHovered, setIsHovered]:[boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
    const { theme, toggleTheme } = use(ThemeContext);
    const { lang } = use(LangContext);
    const illuRef = useRef<SVGSVGElement | null>(null);

    const setIlluRef = useCallback((node: SVGSVGElement | null) => {
        illuRef.current = node;            
    }, []);

    function handleClick(e: React.MouseEvent) {
        e.preventDefault();        
        // on ANIME LA SORTIE
        const tl = gsap.timeline({
            defaults: {
                duration: .225,
                ease: theme === 'light' ? "power4.out" : "power4.in",
            },
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

    return <Item variant='outline' className="relative h-fit min-h-20 overflow-hidden cursor-pointer" onClick={handleClick} onPointerEnter={() => setIsHovered(true)} onPointerLeave={() => setIsHovered(false)}>
        <LightThemeSwitchIllustration ref={setIlluRef} theme={theme} />
        {/* <LightThemeSwitchIllustration_alt /> */}
        <ItemContent className='flex flex-row justify-start'>
            <ItemTitle className={cn('w-fit', theme === 'light' && 'text-white')}>
                {dictionary[lang].theme}
            </ItemTitle>
        </ItemContent>
    </Item>
}

export default ThemeSelectionItem;