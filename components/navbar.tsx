import { useEffect, useState } from 'react';
import ThemeToggler from "./theme-toggler";
import LanguagePicker from "./language-picker";
import ContactPicker from "./contact-picker";
import Logo from "./site-logo"
import Link from "next/link";
import { cn } from '@/lib/utils';
import { LogIn, LogOut } from 'lucide-react';
import supabase from '@/lib/supabase'
import { useRouter } from 'next/navigation';
import { User } from '@supabase/supabase-js';
import { Button } from '@/components/ui/button';

export default function Navbar({ className } : { className: string}) {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    function handleSignIn(e: React.MouseEvent) {
        e.preventDefault();
        router.push('/auth')
    }

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.push('/')
    }
    
    useEffect(() => {
        // Listen for auth changes
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
            if (session?.user) {
                setUser(session.user)
                setLoading(false);
                console.log(session.user)
            } else {
                console.log('Pas de user registered')
                setUser(null);
                setLoading(false);
                // router.push('/auth')
            }
            }
        )

        return () => {
        authListener.subscription.unsubscribe()
    }
    }, [])    
    
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
                <ContactPicker className="md:w-9 md:h-9 aspect-square rounded-full"/>
                <LanguagePicker className="md:w-9 md:h-9 aspect-square rounded-full"/>
                <ThemeToggler />
                { user ? <button onClick={handleSignOut}>
                    <LogOut width={16} height={16} className="w-4 h-4"/>
                </button> :
                <button onClick={handleSignIn}>
                    <LogIn width={16} height={16} className="w-4 h-4"/>
                </button>}
            </div>
        </div>
    )
}
