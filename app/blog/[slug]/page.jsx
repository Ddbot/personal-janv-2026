import { decodeHtmlEntities } from '@/lib/utils';
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
			<h1 className="flex items-center justify-center scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance"
				style={{
					minHeight: '40dvh',
					backgroundImage: `url(${post.jetpack_featured_media_url})`,
					backgroundSize: 'cover',
				}}>
				{decodeHtmlEntities(post.title.rendered)}
			</h1>
			<div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
		</article>
	);
}
