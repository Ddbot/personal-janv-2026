"use client";
import { Dispatch, useState } from 'react';
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
import { WordPressPost } from './Index';

type Category = 'all' | 'dev' | 'frontend' | 'diy' | 'music';

function Separator() {
    return <BreadcrumbSeparator className={"mx-6"}>/</BreadcrumbSeparator>
}

function Badge({ posts }: { posts: WordPressPost[] }) {
    return <div className='absolute'>
        <span className='bg-primary text-[10px] text-foreground aspect-square rounded-full p-1'>{ posts ? posts.length : 0 }</span>
    </div>
}

export default function Breadcrumbs({ className, posts } : { className: string , posts: WordPressPost[] | []}) {
    const [currentCategory, setCurrentCategory]: [currentCategory: Category, setCurrentCategory: Dispatch<React.SetStateAction<Category>>] = useState<Category>('all');
    
    function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        setCurrentCategory(e.currentTarget.dataset.category as Category);
    }
    return (
    <Breadcrumb className={className}>
        <BreadcrumbList className={styles.list}>
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                    <Link href="#" data-category="all" onClick={handleClick}><span className={cn("font-bold", currentCategory === 'all' && styles.underlined)}>Tout</span></Link>
                </BreadcrumbLink>
                <Badge posts={posts} />
            </BreadcrumbItem>
            
            <Separator />
            
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                    <Link href="#" data-category="dev" onClick={handleClick}><span className={cn("font-bold", currentCategory === 'dev' && styles.underlined)}>Dev</span></Link>
                </BreadcrumbLink>
                <Badge posts={posts} />
            </BreadcrumbItem>
            
            <Separator />
            
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                <Link href="#" data-category="frontend" onClick={handleClick}><span className={cn("font-bold", currentCategory === 'frontend' && styles.underlined)}>Front End</span></Link>
                </BreadcrumbLink>
                <Badge posts={posts} />
            </BreadcrumbItem>
            
            <Separator />
            
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                <Link href="#" data-category="diy" onClick={handleClick}><span className={cn("font-bold", currentCategory === 'diy' && styles.underlined)}>Bricolage</span></Link>
                </BreadcrumbLink>
                <Badge posts={posts} />
            </BreadcrumbItem>
            
            <Separator />
            
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                <Link href="#" data-category="music" onClick={handleClick}><span className={cn("font-bold", currentCategory === 'music' && styles.underlined)}>
                    Musique
                    </span>
                </Link>
                </BreadcrumbLink>
                <Badge posts={posts} />
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
    )
}
