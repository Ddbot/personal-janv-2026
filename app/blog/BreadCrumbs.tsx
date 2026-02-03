"use client";
import { Dispatch, useState, CSSProperties } from 'react';
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { WordPressPost, Category } from './Index';
import { categories_list } from '@/lib/constants';



function Separator() {
    return <BreadcrumbSeparator className={"mx-2 md:mx-6"}>/</BreadcrumbSeparator>
}

function Badge({ posts, query, style }: { posts: WordPressPost[] | [], query: Category, style?: CSSProperties }) {
    let nb: number = 0;
    posts.forEach(post => {
        if (query !== 'all' && post.categories.includes(categories_list[query])) {
            nb++;
        }
        if (query === 'all') {
            nb = posts.length;
        }
    });
    return <div className='absolute' style={style}>
        <span className='bg-primary text-[10px] text-foreground aspect-square rounded-full p-1'>{ nb }</span>
    </div>
}

export default function Breadcrumbs({ className, posts, handleClick, currentCategory } : { className: string , posts: WordPressPost[] | [], handleClick: (e: React.MouseEvent<HTMLAnchorElement>) => void, currentCategory: Category}) {
    // const [currentCategory, setCurrentCategory]: [currentCategory: Category, setCurrentCategory: Dispatch<React.SetStateAction<Category>>] = useState<Category>('all');    

    return (
    <Breadcrumb className={className}>
        <BreadcrumbList className={styles.breadcrumb_list}>
            <BreadcrumbItem>
                <BreadcrumbLink asChild style={{ "--anchor-name": '--all' } as CSSProperties}>
                        <Link href="#" data-category="all" onClick={handleClick}>
                            <span className={cn("font-bold", currentCategory === 'all' && styles.underlined)}>Tout</span></Link>
                </BreadcrumbLink>
                <Badge posts={posts} query="all" style={{  "--anchor-name": '--all' } as CSSProperties}/>
            </BreadcrumbItem>
            
            <Separator />
            
            <BreadcrumbItem>
                <BreadcrumbLink asChild style={{ "--anchor-name": '--dev' } as CSSProperties}>
                    <Link href="#" data-category="dev" onClick={handleClick}><span className={cn("font-bold", currentCategory === 'dev' && styles.underlined)}>Dev</span></Link>
                </BreadcrumbLink>
                <Badge posts={posts} query='dev' style={{  "--anchor-name": '--dev' } as CSSProperties} />
            </BreadcrumbItem>
            
            <Separator />
            
            <BreadcrumbItem>
                <BreadcrumbLink asChild style={{ "--anchor-name": '--diy' } as CSSProperties}>
                    <Link href="#" data-category="diy" onClick={handleClick}><span className={cn("font-bold", currentCategory === 'diy' && styles.underlined)}>Bricolage</span></Link>
                </BreadcrumbLink>
                <Badge posts={posts} query='diy' style={{  "--anchor-name": '--diy' } as CSSProperties} />
            </BreadcrumbItem>
            
            <Separator />
            
            <BreadcrumbItem>
                <BreadcrumbLink asChild style={{ "--anchor-name": '--music' } as CSSProperties}>
                    <Link href="#" data-category="musique" onClick={handleClick}><span className={cn("font-bold", currentCategory === 'musique' && styles.underlined)}>
                        Musique
                        </span>
                    </Link>
                </BreadcrumbLink>
                <Badge posts={posts} query='musique' style={{  "--anchor-name": '--music' } as CSSProperties} />
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
    )
}
