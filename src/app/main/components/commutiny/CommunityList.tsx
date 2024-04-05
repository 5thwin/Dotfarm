import { getPostsWithAuthor } from '@/api/post/get';
import ComunityPostItem from './CommunityPostItem';
import clsx from 'clsx';

type Props = { category?: string };

export default async function CommunityList({ category }: Props) {
	const posts = await getPostsWithAuthor({ take: 5, category });
	const isPostAvailable = posts && posts.data.length > 0;

	return (
		<ul className={listContainerStyle}>
			{isPostAvailable ? (
				posts.data.map((post, index) => (
					<ComunityPostItem key={`post${index}`} post={post} />
				))
			) : (
				<div className="flexCenter py-5">
					<p className="text-subText">게시물이 존재하지 않습니다.</p>
				</div>
			)}
		</ul>
	);
}
// style
const listContainerStyle = clsx(
	'flex flex-col gap-y-5',
	'max-h-[680px]',
	'overflow-scroll'
);
