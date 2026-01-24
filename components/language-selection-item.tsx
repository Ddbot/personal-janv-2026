
import LightThemeSwitchIllustration from './assets/LightThemeSwitchIllustration';
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";
import { useCallback, useRef, use } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import { LangContext, Lang } from "@/contexts/LangContext";
import gsap from "gsap";
import Image from 'next/image';
import { cn } from '@/lib/utils';
import styles from './styles/language-selection-item.module.css';

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

const languages: Lang[] = ["fr", "gb", "de"];
const languageFull: Record<Lang, string>= {
    fr: "FR",
    gb: "EN",
    de: "DE"
}

const LanguageSelectionItem = () => {
    const { lang, changeLang } = use(LangContext);

    function handleChangeLanguage(l: Lang) {
        changeLang(l);
    }
    return <Item variant='outline' className={cn(styles.item)}>
            <ItemContent className={cn(styles.itemContent)}>
                {dictionary[lang].lang}
            </ItemContent>
            <ItemActions className={cn(styles.itemActions)}>
                {languages.map((l) => (
                    <Item key={l} variant='outline' className={cn(styles.flagCard, l === lang ? 'border' : 'border-0')}>
                        <Image src={`/${l}-flag.png`} alt={`${l} flag`} width={100} height={100} className={ cn(styles.flagImage, l === lang && 'opacity-0')} />
                        { l === lang && <ItemTitle
                            className={cn('absolute inset-0 mx-auto')}
                            style={{
                            transition: 'opacity .225s linear',
                        }}>{ languageFull[l] as string}</ItemTitle>}
                        <ItemDescription className='absolute inset-0'>
                            <button
                                className={styles.clicker}
                                onClick={() => handleChangeLanguage(l)}
                                disabled={l === lang}
                                style={{
                                    transition: 'opacity .225s linear',
                                    opacity: l === lang ? 0 : 1
                                }}>
                                {/* <Image src={`/${l}-flag.png`} alt={`${l} flag`} width={64} height={64} /> */}
                                
                            </button>
                        </ItemDescription>
                    </Item>
                ))
                }
            </ItemActions>
    </Item>
}

export default LanguageSelectionItem;