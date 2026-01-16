import { useMemo } from 'react';
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { decodeHtmlEntities } from '@/lib/utils';
import { Calendar, User } from 'lucide-react';

const ArticleCard = ({ article }: { article: WordPressPost }) => (
	<Link
		href={`/blog/${article.slug}`}
		className="hover:opacity-80 transition m-0">
		<Card className="m-2 rounded-none border-transparent">
			<CardHeader>
				<CardTitle>
					{decodeHtmlEntities(article.title.rendered)}
				</CardTitle>
				<CardDescription>
					<span>{article.categories.toString()}</span>
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
				<p
					dangerouslySetInnerHTML={{
						__html: article.excerpt.rendered,
					}}
				/>
			</CardContent>
			<CardFooter className="flex-col gap-2">
				<div className="text-center mt-3 text-xs">◆◆◆</div>
			</CardFooter>
		</Card>
	</Link>
);

const ArticlesContainer = ({ posts } : { posts: WordPressPost[]}) => {
        const columns = useMemo(() => {
            const cols: WordPressPost[][] = [[], [], []];
            if (posts && posts.length > 0) {
                posts.forEach((post, index) => {
                    cols[index % 3].push(post);
                });
            }
            return cols;
        }, [posts]);
	return (
		<div className="flex gap-1">
			{columns.map((column, colIndex) => (
				<div key={colIndex} className="flex-1 flex flex-col gap-0">
					{column.map((article, i) => (
						<ArticleCard key={i} article={article} />
					))}
				</div>
			))}
		</div>
	);
};

export default ArticlesContainer;
