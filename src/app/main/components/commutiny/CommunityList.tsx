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
				<div className="flex items-center justify-center py-5">
					<p className="text-gray-600 font-medium text-center">
						아직 공유된 게시물이 없어요.
						<br /> 첫 게시글을 작성하고 커뮤니티를 시작해보세요!
					</p>
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
