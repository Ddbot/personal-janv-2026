import { ViewTransition } from 'react';
import Image from 'next/image';
import parse, { domToReact } from 'html-react-parser';
import Link from 'next/link';
import { decodeHtmlEntities } from '@/lib/utils';
import styles from './styles.module.css';
import { cn } from '@/lib/utils';
import { Geist } from 'next/font/google';
import TableOfContents from './TableOfContent'; 

const geist = Geist({ variable: '--font-variable' });
const h2s = [];

function parseContent(html) {    
	return parse(html, {
		replace: (node,i) => {
			// Replace <img> tags with Next.js Image
			if (node.name === 'img') {
				const { src, alt, width, height } = node.attribs;
				return (
					<Image
						src={src}
						alt={alt || ''}
						width={width || 800}
						height={height || 600}
						className="rounded-lg"
					/>
				);
			}

			// Replace <a> tags with Next.js Link (for internal links)
			if (node.name === 'a') {
                const { ...props } = node.attribs;
                const href = node.attribs.href ?? null;
				const isInternal = href?.startsWith('#') || href?.includes('/local');

                return isInternal ? (
                    <Link href={href} {...props}>
                        {node.children[0]?.data || ''}
                    </Link>
                ) : (
                    <a href='#' {...props}>
                        {node.children[0]?.data || ''}
                    </a>
                );
			}

            if (node.name === 'h2') {
                console.log('H2 attribs: ', node.attribs, ' Index: ', i);
                h2s.push(i);
                // node.attribs.id = `h2_`;
				return (
                    <h2 id={`h2_${i}`}>
						{node.children[0]?.data}
					</h2>
				);
			}            

			// Replace <h3> with custom component
			if (node.name === 'h3') {
				return (
					<h3>
						{node.children[0]?.data}
					</h3>
				);
			}

			if (node.name === 'h4') {
				return (
					<h4 className="text-2xl font-medium mt-6 mb-2">
						{node.children[0]?.data}
					</h4>
				);
			}

            if (node.name === 'p') {
                const { ...props } = node.attribs;
				return (
					<p className={styles.p}>
						{node.children
							.map((child) => {
								return child?.data;
							})
							.join(' ')}
					</p>
				);
            }

            if (node.name === 'nav') {
				return (<nav>{domToReact(node.children)}</nav>);
            }  
            
            if (node.name === 'ul') {
				return (
					<ul>
						{domToReact(node.children)}
					</ul>
				);				
            }   
            if (node.name === 'ol') {
				return <ol>{domToReact(node.children)}</ol>;
			}               
            if (node.name === 'li') {
				return (<li className='text-md'>
                    {node.children
                        .map((child) => {
                            console.log('LI: ', Object.keys(child), child, child.attribs);
                            return child?.data;
                        })
                        .join(' ')}
                </li>);			
            }  
            if (node.name === 'section') {
				return (
					<section className='bg-green-500'>
						{domToReact(node.children)}
					</section>
				);
			}              

			// Code blocks
			if (node.name === 'pre' && node.children[0]?.name === 'code') {
				const codeNode = node.children[0];
				const language =
					codeNode.attribs.class?.replace('language-', '') || 'js';
				const code = codeNode.children[0]?.data || '';
				return <CodeBlock language={language}>{code}</CodeBlock>;
			}
		},
	});
}

function CodeBlock({ children, language }) {
	return (
		<pre className={styles.CodeBlock}>
			<code className={`language-${language}`}>{children}</code>
		</pre>
	);
}

// app/blog/[slug]/page.js
async function getPost(slug) {
	const res = await fetch(
		`https://public-api.wordpress.com/wp/v2/sites/andryblogresume.wordpress.com/posts?slug=${slug}&_embed=true`,
		{ next: { revalidate: 3600 } },
	);

	const posts = await res.json();
	return posts[0];
}

export default async function PostPage({ params }) {
    const post = await getPost((await params).slug);
    console.log('Whats in a post: ', post.jetpack_featured_media_url);
    const nav_menu = parseContent(post.content.rendered)
        .filter((el) => el.type === 'h2')
        .map((el,index) => {
            return (
				<li key={index} className={styles.nav_menu}>
					<a
                        {...el.props}
                        id={`link-${el.props.id}`}
                        href={`#${el.props.id}`}>
						{el.props.children}
					</a>
				</li>
			);			
		});
	return (
		<ViewTransition>
			<main className={cn(styles.main, geist.className)}>
				<article>
					<h1>{decodeHtmlEntities(post.title.rendered)}</h1>
                    <TableOfContents items={nav_menu} />
                    {/* <Image src={post.jetpack_featured_media_url} alt={post.title.rendered} width={400} height={400} className={styles.featuredImage} /> */}
                    <span className='clear-both'></span>
					{parseContent(post.content.rendered)}
				</article>
			</main>
		</ViewTransition>
	);
}
