import { blockStyle } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';
import Image from 'next/image';
import PostHeader from './header/PostHeader';
import PostAuthor from './PostAuthor';
import CommentsArea from './comments/CommentsArea';
import MobileBackButton from '@/app/components/common/MobileBackButton';
import CommentWrite from './comments/CommentWrite';
import { Post } from '@/type/post';
import { getUserIdByAccessToken } from '@/api/auth/token/utils';
import { getFullImagePath } from '@/utils/image';
import Link from 'next/link';

type Props = {
	post: Post;
};
export default async function PostBox({ post }: Props) {
	const { author, images } = post;
	const userId = getUserIdByAccessToken();
	const isExistImage = post.images && post.images[0];
	return (
		<div className={containerStyle}>
			<div className={'flex gap-x-2.5 items-center lg:hidden'}>
				<MobileBackButton />
				<h2 className="font-bold text-2xl">영농 커뮤니티</h2>
			</div>
			<PostHeader post={post} />
			<div id="post-contents-area" className={postWrapper}>
				{isExistImage &&
					images.map(({ path }, index) => (
						<Link
							key={`post_image${index}`}
							href={getFullImagePath(path)}
							target="_blank"
						>
							<div className="w-full lg:w-[590px] h-[250px] sm:h-[330px] rounded-10 relative overflow-hidden">
								<Image
									src={`${getFullImagePath(path)}`}
									fill={true}
									className="object-contain rounded-10"
									alt={'이 게시글에 첨부된 이미지입니다.'}
								/>
							</div>
						</Link>
					))}
				<article className="whitespace-pre-wrap break-words">
					{post.content}
				</article>
			</div>
			<div className="flex flex-col gap-y-1">
				{author && <PostAuthor author={author} />}
			</div>
			<div className="flex flex-col gap-y-2.5">
				<CommentsArea postId={Number(post.id)} />
				<CommentWrite postId={Number(post.id)} isLogined={!!userId} />
			</div>
		</div>
	);
}

// style
const containerStyle = clsx(
	blockStyle,
	'flex flex-col gap-y-30px p-25px',
	'lg:w-[640px] w-full',
	'lg:rounded-30 rounded-none',
	'min-h-screen lg:min-h-[0px]'
);
const postWrapper = clsx('flex flex-col gap-y-2.5');
