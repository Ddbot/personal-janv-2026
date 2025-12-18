"use client"; 

import { createContext, useState, useEffect, memo, SetStateAction, Dispatch } from "react";
export type Lang = 'fr'| 'de'|'gb';

interface LangContextType {
    lang: Lang;
    changeLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextType>({
    lang: 'fr',
    changeLang: () => {}
});

const LangProvider = memo(({ children }: { children: React.ReactNode }) => {
    const [lang, setLang]: [lang: Lang, setLang: Dispatch<SetStateAction<Lang>>] = useState<Lang>('fr');

    const changeLang = (l: Lang) => {
        setLang(l);
        localStorage.setItem('lang', l);
    };

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const value = {
        lang,
        changeLang,
    };

    return (
        <LangContext.Provider value={value}>
            {children}
        </LangContext.Provider>
    );
});

LangProvider.displayName = "LangProvider";

export {LangProvider, LangContext };