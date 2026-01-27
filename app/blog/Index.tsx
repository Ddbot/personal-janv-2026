"use client";

import React, { useState, ViewTransition, use } from 'react';
import { ThemeContext, Theme } from '@/contexts/ThemeContext';

import Breadcrumbs from './BreadCrumbs';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Calendar, User, Mail } from 'lucide-react';
import { decodeHtmlEntities } from '@/lib/utils';
import Link from 'next/link';
import { Geist, Geist_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { tags_list } from './constants';
import Image from 'next/image';
import { categories_list } from './constants';
import { cards_palette } from './constants';
import gsap from 'gsap';

const geist = Geist({ variable: '--font-variable' })
const geist_mono = Geist_Mono({ variable: '--font-mono', weight: ['300', '900'] })

export type Category = 'all' | 'dev' | 'diy' | 'musique';
export type FilteredCategory = Omit<Category, 'all'>;

export interface WordPressPost {
  id: number;
  slug: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: Array<{ name: string; avatar_urls: Record<string, string> }>;
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
  };
}

const Index = ({ posts }: { posts: WordPressPost[] }) => {
    const [currentCategory, setCurrentCategory]: [currentCategory: Category, setCurrentCategory: Dispatch<React.SetStateAction<Category>>] = useState<Category>('all');    
    const [sortedPosts, setSortedPosts] = useState<WordPressPost[]>(posts);
    const { theme }: { theme: Theme }= use(ThemeContext);

    function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        setCurrentCategory(e.currentTarget.dataset.category as Category);        
        if(e.currentTarget.dataset.category === 'all') {
            setSortedPosts(posts);
            return
        } else {
            setSortedPosts(posts.filter(post => post.categories.includes(categories_list[e.currentTarget.dataset.category as FilteredCategory])));
        }
    }
    
    const ArticleCard = ({ article, index }: { article: WordPressPost, index: number }) => {
        const tags: string[] = article.tags.map((tag) => {
            return tags_list[String(tag)].name
        });

        const border_color: any = gsap.utils.wrap(cards_palette[theme], index);
        
        return <Link
        href={`/blog/${article.slug}`}
        className={cn( geist_mono.className)}
    >
        <Card className={cn(styles.articles_list_card)} style={{
                backgroundColor: border_color,
                borderColor: border_color,
                "--border-color": border_color,
            "--background-color": border_color
        }}>
            {/* IMAGE de cover */}
            <div className={styles.coverImage} style={{
            }}>
            </div>
            <CardHeader className={styles.cardHeader}>
                <CardTitle className={ cn(geist.className, styles.cardTitle) }>{decodeHtmlEntities(article.title.rendered)}</CardTitle>
                <CardDescription className={styles.cardDescription}>
                </CardDescription>
            </CardHeader>
            <CardContent className={styles.cardContent}>
                <p dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }} className={styles.excerpt}/>
            </CardContent>
            <CardFooter className={styles.cardFooter}>{
                    tags.map(tag => {
                        return tag !== 'dev' ? <div className={cn(styles.pill)} key={tag}>
                            <Image src={`${tag}_logo.svg`} width={20} height={20} alt={tag} key={tag} className='bg-white aspect-square rounded-full' /></div> : null
                    })
                }
            </CardFooter>
        </Card>
    </Link>
    };

	return (
		<div className="min-h-screen">
			{/* En-tête du blog */}
			<header className={cn(styles.header, "mb-20")}>
                <div className="text-left">
                    <hgroup className={cn("text-[3.5rem] text-foreground font-extrabold mb-5 max-h-[2lh]")}>
                        <h3>
                            andry nirina –
                        </h3>
                        <h3>
                            développeur web
                        </h3>
                    </hgroup>
                    <div className="text-md mt-0 md:mt-5 md:max-w-[40ch]">
                        Ceci est mon blog. J&apos;y parle de développement web, de bricolage, de musique, de choses et d&apos;autres.
                    </div>
                </div>
            </header>

			{/* Contenu principal */}
			<main
				className={styles.main}>
                <Breadcrumbs className="w-full ml-2 mb-8" posts={posts} handleClick={handleClick} currentCategory={currentCategory}/>
                <div className={styles.articles_list}>
                    {sortedPosts.map((article,i) => (
                        <ViewTransition key={i}>
                            <ArticleCard
                                article={article}
                                index={i}
                                />
                        </ViewTransition>
                    ))}
                </div>
			</main>

			{/* Pied de page */}
			<footer className="dark:bg-black dark:text-foreground bg-white text-foreground py-4">
				<div className="ml-2 mr-5 px-4">
					<div className="text-sm pb-8">		
						<p className="w-full h-8 opacity-75 flex flex-row flex-nowrap justify-end align-center p-0 ml-auto">
                            <Mail size='icon' className="self-center w-5 h-5 mr-2 p-0" />
                            <div className='self-center'><a className="text-[1rem]" href="mailto:contact@andry.online">contact@andry.online</a></div>
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Index;   