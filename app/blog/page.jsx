import Index from './Index';
// app/blog/page.js
async function getPosts() {
	const res = await fetch(
		'https://public-api.wordpress.com/wp/v2/sites/andryblogresume.wordpress.com/posts',
		{
			next: { revalidate: 3600 }, // Revalidate every hour
		},
	);

	if (!res.ok) {
		throw new Error('Failed to fetch posts');
	}

	return res.json();
}

export default async function BlogPage() {
	const posts = await getPosts();

	return <Index posts={posts} />		
}
