import { Geist } from "next/font/google";
const geist = Geist({ subsets: ['latin'], weight: '600' });
import { cn } from '@/lib/utils';

const Logo = () => {
    return (
        // <Image src={`/logo-${theme}.png`} alt="Logo" width={48} height={48} />
        <h1 className={cn(
            geist.className,
            "text-5xl font-bold tracking-tight text-primary"
        )} style={{
            textBoxTrim: 'trim-both',
            transform: 'translateY(-20px)'
        }}>andry</h1>
    )
}

export default Logo