"use client";

import React, { useState, useMemo } from 'react';
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
import { Playwrite_FR_Trad, Geist_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';

const playwrite = Playwrite_FR_Trad({ variable:'--font-sans'})
const geist_mono = Geist_Mono({ variable:'--font-mono', weight: ['300','900'] })

interface WordPressPost {
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

const Index = ({ posts }: { posts: WordPressPost[]}) => {
	// Organize articles into 4 columns for masonry layout
	const columns = useMemo(() => {
        const cols: WordPressPost[][] = [[], [], []];
        if (posts && posts.length > 0) {
            posts.forEach((post, index) => {
                cols[index % 3].push(post);
            });
        }
		return cols;
    }, [posts]);

    const ArticleCard = ({ article }: { article: WordPressPost }) => (<Link 
            href={`/blog/${article.slug}`} 
            className={cn("hover:opacity-80 transition m-0", geist_mono.className)}
        >      
        <Card className="m-2 rounded-none border-transparent">
      <CardHeader>
        <CardTitle>{decodeHtmlEntities(article.title.rendered)}</CardTitle>
        <CardDescription>
                    <span>
                    {article.categories.toString()}
                    </span>
			<div className="flex flex-col gap-1 text-xs text-gray-600 mb-3 border-t border-gray-300 pt-2">
				<div className="flex items-center gap-1">
					<User size={12} />
					<span className="italic">{article.author}</span>
				</div>
				<div className="flex items-center gap-1">
					<Calendar size={12} />
					<span>{article.date}</span>
				</div>
			</div>
        </CardDescription>
        {/* <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction> */}
      </CardHeader>
      <CardContent>
            <p dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }} />
      </CardContent>
      <CardFooter className="flex-col gap-2">
<div className="text-center mt-3 text-xs">◆◆◆</div>
      </CardFooter>
        </Card>
    </Link>
	);

	return (
		<div className="min-h-screen bg-background">
			{/* En-tête du journal */}
			<header className={styles.header}>
                <div className="text-left">
                    {/* <div className="text-xs uppercase tracking-widest mb-2">
                        Paris, France
                    </div> */}
                    <hgroup className={cn("text-[3.5rem] text-primary font-extrabold mb-5 max-h-[2lh]")}>
                        <h3>
                            andry nirina –
                        </h3>
                        <h3>
                            développeur web
                        </h3>
                    </hgroup>
                    <div className="text-[20px] mt-5 md:max-w-[40ch]">
                        Ceci est mon blog. J&apos;y parle de développement web, de bricolage, de musique, de choses et d&apos;autres.
                    </div>
                    {/* <div className="flex justify-center items-center gap-8 mt-3 text-xs">
                        <span>Samedi 20 Décembre 2025</span>
                        <span className="border-x border-black px-3">
                            Édition Matinale
                        </span>
                        <span>Prix: 2 Francs</span>
                    </div> */}
                </div>
            </header>

			{/* Ligne décorative */}
			{/* <div className="bg-[--chart-2] h-1"></div>
			<div className="bg-[--chart-1] h-2"></div>
			<div className="bg-[--chart-2] h-0.5"></div> */}

			{/* Contenu principal */}
			<main
				className="max-w-7xl mx-auto px-4 py-8"
				style={{ maxHeight: '100dvh', overflow: 'auto' }}>
				{/* Masonry layout avec 3 colonnes */}
				<div className="flex gap-1">
					{columns.map((column, colIndex) => (
						<div key={colIndex} className="flex-1 flex flex-col gap-0">
							{column.map((article,i) => (
                                <ArticleCard key={i}
                                    article={article}
                                    />
                                ))}
						</div>
					))}
				</div>
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