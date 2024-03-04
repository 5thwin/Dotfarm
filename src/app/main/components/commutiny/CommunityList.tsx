import { getPostsWithAuthor } from '@/api/post';
import ComunityPostItem from './ComunityPostItem';
import clsx from 'clsx';

export default async function CommunityList() {
	const posts = await getPostsWithAuthor();

	return (
		<ul className={listContainerStyle}>
			{posts &&
				posts.map((post, index) => (
					<ComunityPostItem key={`post${index}`} post={post} />
				))}
		</ul>
	);
}
// style
const listContainerStyle = clsx(
	'flex flex-col gap-y-5',
	'h-[777px]',
	'overflow-scroll'
);
