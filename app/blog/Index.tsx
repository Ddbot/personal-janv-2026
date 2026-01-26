"use client";

import React, { useState, useMemo, ViewTransition } from 'react';
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
import { Calendar, User } from 'lucide-react';
import { decodeHtmlEntities } from '@/lib/utils';
import Link from 'next/link';
import { Geist, Geist_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { tags_list } from './constants';
import Image from 'next/image';

const geist = Geist({ variable: '--font-variable' })
const geist_mono = Geist_Mono({ variable: '--font-mono', weight: ['300', '900'] })

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
    const ArticleCard = ({ article }: { article: WordPressPost }) => {
        const tags: string[] = article.tags.map((tag) => {
            return tags_list[String(tag)].name
        });

        return <Link
        href={`/blog/${article.slug}`}
        className={cn( geist_mono.className)}
    >
        <Card className={cn(styles.articles_list_card, "m-2 rounded-none border-transparent")}>
            <CardHeader className='h-32'>
                <CardTitle className={ cn(geist.className, "font-extrabold", 'max-h-[3lh] h-[3lh]') }>{decodeHtmlEntities(article.title.rendered)}</CardTitle>
                <CardDescription className="h-24">
                    {/* <span>
                        {article.categories.toString()}
                    </span> */}
                    <div className="h-full flex flex-col gap-1 text-xs text-gray-600 mb-3 border-t border-gray-300 pt-2">
                        {/* <div className="flex items-center gap-1">
                            <User size={12} />
                            <span className="italic">{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            <span>{article.date}</span>
                        </div> */}
                    </div>
                </CardDescription>
                {/* <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction> */}
            </CardHeader>
            <CardContent>
                <p dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }} />
            </CardContent>
            <CardFooter className={styles.card_footer}>{tags.map(tag => {
                return tag !== 'dev' ? <div className={cn(styles.pill)}><Image src={`${tag}_logo.svg`} width={ 20 } height={ 20 } alt={tag} key={tag} className='bg-white aspect-square rounded-full'/></div> : null
                }) }</CardFooter>
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
				className="w-full px-8 py-8 bg-white">
                <Breadcrumbs className="w-full ml-2 mb-8" posts={posts} />
                <ViewTransition>
                    <div className={styles.articles_list}>
                        {posts.map((article,i) => (
                            <ArticleCard key={i}
                                article={article}
                                />
                        ))}
                    </div>
                </ViewTransition>
			</main>

			{/* Pied de page */}
			<footer className="bg-black text-white py-4 mt-12">
				<div className="max-w-7xl mx-auto px-4 text-center">
					<div className="text-sm">
						{/* <p className="mb-1">
							Bureau de Rédaction: 12 Boulevard des Capucines,
							Paris
						</p>
						<p className="text-xs opacity-75">
							Télégramme: LECOURRIER - Téléphone: GUTENBERG 45-67
						</p> */}
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Index;