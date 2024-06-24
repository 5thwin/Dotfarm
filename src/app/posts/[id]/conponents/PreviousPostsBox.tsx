import { getPostsWithAuthor } from '@/api/post/get';
import { blockStyle } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';
import PreviousPostItem from './PreviousPostItem';

type Props = {
	currentPostId: number;
};

export default async function PreviousPostsBox({ currentPostId }: Props) {
	const previousPosts = await getPostsWithAuthor({
		take: 4,
		where__id__less_than: currentPostId,
	});
	if (!previousPosts?.data || previousPosts.data.length === 0) return null;
	return (
		<div className={container}>
			{previousPosts?.data.map((post) => (
				<PreviousPostItem key={post.id} post={post} />
			))}
		</div>
	);
}
// styles
const container = clsx(
	'flex flex-col gap-y-5px shadow-main rounded-30 bg-white'
);
