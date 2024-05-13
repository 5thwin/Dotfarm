import PostsList from '@/app/posts/components/PostsList';
import PostsPagination from '@/app/posts/components/PostsPagination';
import { Post, PostPartial } from '@/type/post';
import clsx from 'clsx';

type Props = {
	posts: PostPartial[];
	total?: number;
};
export default function SearchPostWrapper({ posts, total }: Props) {
	const totalPage = total && Math.ceil(total / 5);

	return (
		<div className={mainContainer}>
			<h2 className="text-2xl font-bold">영농 커뮤니티</h2>
			<PostsList posts={posts} />
			{totalPage === 1 ? null : (
				<PostsPagination pageParamsString="postPage" totalPage={totalPage} />
			)}
		</div>
	);
}

// style
const mainContainer = clsx(
	'flex flex-col gap-y-25px p-25px rounded-30 shadow-main bg-white',
	'flex-1 '
);
