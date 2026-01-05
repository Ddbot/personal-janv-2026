import parse, { domToReact} from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';
import { decodeHtmlEntities } from '@/lib/utils';
import AnimatedBeamMultipleOutputDemo from '../../../components/animated-beam-example'

function parseContent(html) {
	return parse(html, {
		replace: (node) => {
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
				const { href, ...props } = node.attribs;
				const isInternal =
					href?.startsWith('/') || href?.includes('your-domain.com');

				if (isInternal) {
					return (
						<Link href={href} {...props}>
							{node.children[0]?.data || ''}
						</Link>
					);
				}
			}

			// Replace <h2> with custom component
			if (node.name === 'h2') {
				return (
					<h2 className="text-3xl font-bold mt-8 mb-4">
						{node.children[0]?.data}
					</h2>
				);
			}

			if (node.name === 'h3') {
				return (
					<h3 className="text-2xl font-medium mt-6 mb-2">
						{node.children[0]?.data}
					</h3>
				);
			}

            if (node.name === 'p') {
                console.log('P: ', Object.keys(node), node.attribs);
				return (
					<p className="max-w-4xl">
						{node.children
							.map((child) => {
								return child?.data;
							})
							.join(' ')}
					</p>
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
		<pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto max-w-3xl my-8">
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
	console.log('Post: ', post);
	return (
		<article className="p-8">
			<h1
				className="flex items-center justify-center scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance"
				style={{
					minHeight: '40dvh',
					backgroundImage: `url(${post.jetpack_featured_media_url})`,
					backgroundSize: 'cover',
                }}
            >
                {/* <AnimatedBeamMultipleOutputDemo /> */}
				{decodeHtmlEntities(post.title.rendered)}
			</h1>
			{/* <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> */}
			{parseContent(post.content.rendered)}
		</article>
	);
}
