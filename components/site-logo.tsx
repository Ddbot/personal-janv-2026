import { Geist, Playwrite_FR_Trad } from "next/font/google";
const geist = Geist({ subsets: ['latin'], weight: ['100','200','600'] });
const playwrite = Playwrite_FR_Trad({ weight: '100' });
import { cn } from '@/lib/utils';

const Logo = ({ title }: { title: string }) => {
    return  title === "andry" ? <h1 className={cn(
            geist.className,
            "text-4xl font-bold tracking-tight text-primary"
        )} style={{
            textBoxTrim: 'trim-both',
        }}>{title}</h1> : <h1 className={cn(
                geist.className,
                "text-4xl font-bold tracking-tight text-primary"
            )} style={{
                textBoxTrim: 'trim-both',
            }}>
                <div>
                    <span>andry</span>
                    <span className={"font-extralight text-foreground"}> – </span>
                    <span className={"font-extralight text-foreground"}>le </span>
                    <span className={"font-extralight text-foreground"}>blog</span>
                </div>
            </h1>
        }

export default Logo