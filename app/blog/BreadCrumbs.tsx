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
import { categories_list, tags_list } from './constants';

type Category = 'all' | 'dev' | 'diy' | 'musique';

function Separator() {
    return <BreadcrumbSeparator className={"mx-6"}>/</BreadcrumbSeparator>
}

// function sortAndCountTags(tagsArray: number[], query: Category) {
//     const sortedTags = tagsArray.sort((a, b) => a - b);
    
//     switch ((query)) {
//         case 'all':
//             return sortedTags.length;
//         case 'frontend':
//             return sortedTags.filter(tag => {
//                 return tags_list[tag].name === 'frontend';
//             }).length;
//         default:
//             return sortedTags.filter(tag => {
//                 return tags_list[tag].name === query;
//             })
//             break;
//     }
// }

function Badge({ posts, query }: { posts: WordPressPost[] | [], query: Category }) {
    let nb: number = 0;
    posts.forEach(post => {
        if (query !== 'all' && post.categories.includes(categories_list[query])) {
            nb++;
        }
        if (query === 'all') {
            nb = posts.length;
        }
    });
    return <div className='absolute'>
        <span className='bg-primary text-[10px] text-foreground aspect-square rounded-full p-1'>{ nb }</span>
    </div>
}

// console.log('Tagssss ', Object.keys(tags_list));

export default function Breadcrumbs({ className, posts } : { className: string , posts: WordPressPost[] | []}) {
    const [currentCategory, setCurrentCategory]: [currentCategory: Category, setCurrentCategory: Dispatch<React.SetStateAction<Category>>] = useState<Category>('all');    
    
    function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        setCurrentCategory(e.currentTarget.dataset.category as Category);
        console.log('Categordzedzezdezies: ', posts.map(post =>{ return post.categories[0]}))
    }

    return (
    <Breadcrumb className={className}>
        <BreadcrumbList className={styles.breadcrumb_list}>
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                    <Link href="#" data-category="all" onClick={handleClick}><span className={cn("font-bold", currentCategory === 'all' && styles.underlined)}>Tout</span></Link>
                </BreadcrumbLink>
                <Badge posts={posts} query="all"/>
            </BreadcrumbItem>
            
            <Separator />
            
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                    <Link href="#" data-category="dev" onClick={handleClick}><span className={cn("font-bold", currentCategory === 'dev' && styles.underlined)}>Dev</span></Link>
                </BreadcrumbLink>
                <Badge posts={posts} query='dev'/>
            </BreadcrumbItem>
            
            <Separator />
            
            {/* <BreadcrumbItem>
                <BreadcrumbLink asChild>
                <Link href="#" data-category="frontend" onClick={handleClick}><span className={cn("font-bold", currentCategory === 'frontend' && styles.underlined)}>Front End</span></Link>
                </BreadcrumbLink>
                <Badge posts={posts} />
            </BreadcrumbItem> */}
            
            {/* <Separator /> */}
            
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                <Link href="#" data-category="diy" onClick={handleClick}><span className={cn("font-bold", currentCategory === 'diy' && styles.underlined)}>Bricolage</span></Link>
                </BreadcrumbLink>
                <Badge posts={posts} query='diy'/>
            </BreadcrumbItem>
            
            <Separator />
            
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                <Link href="#" data-category="musique" onClick={handleClick}><span className={cn("font-bold", currentCategory === 'musique' && styles.underlined)}>
                    Musique
                    </span>
                </Link>
                </BreadcrumbLink>
                <Badge posts={posts} query='musique'/>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
    )
}
