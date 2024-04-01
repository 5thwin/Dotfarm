import { getPostsWithAuthor } from '@/api/post/get';
import ComunityPostItem from './CommunityPostItem';
import clsx from 'clsx';

export default async function CommunityList() {
	const posts = await getPostsWithAuthor({ take: 5 });
	const isPostAvailable = posts && posts.data.length > 0;

	return (
		<ul className={listContainerStyle}>
			{isPostAvailable &&
				posts.data.map((post, index) => (
					<ComunityPostItem key={`post${index}`} post={post} />
				))}
		</ul>
	);
}
// style
const listContainerStyle = clsx(
	'flex flex-col gap-y-5',
	'h-[680px]',
	'overflow-scroll'
);
