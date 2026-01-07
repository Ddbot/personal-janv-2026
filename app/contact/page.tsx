"use client";
import styles from './styles.module.css'
import Grid from './Grid';

import { useSearchParams } from "next/navigation";

export default function Page() {
        const params = useSearchParams();
        const type: string = params.get('type') || 'mail';

    return <Grid className={styles.grid} type={type} />        
}