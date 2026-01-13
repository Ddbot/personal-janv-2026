import ThemeToggler from "./theme-toggler";
import LanguagePicker from "./language-picker";
import ContactPicker from "./contact-picker";
import Logo from "./site-logo"
import Link from "next/link";
import { cn } from '@/lib/utils';

export default function Navbar({ className } : { className: string}) {
    return (
        <div className={`
            fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b
            transition-transform duration-300 ease-in-out
            md:sticky md:top-0 md:bg-transparent md:backdrop-blur-none md:border-0
            
        `}>
            <div className={cn('py-2 px-4 lg:p-8 lg:space-y-8', className)}>
                <div className="w-full flex flex-row flex-nowrap justify-between md:flex-nowrap gap-4">
                    <Link href={'/'}>                
                        <Logo />
                    </Link>
                    <div className="flex flex-row flex-nowrap items-center gap-0 lg:gap-4">
                        <ContactPicker className="md:w-9 md:h-9 aspect-square rounded-full"/>
                        <LanguagePicker className="md:w-9 md:h-9 aspect-square rounded-full"/>
                        <ThemeToggler />
                    </div>
                </div>
            </div>
        </div>
    )
}
