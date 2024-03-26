import { blockStyle } from '@/app/styles/common/blockStyle';
import { FullPost } from '@/type/post';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import PostHeader from './header/PostHeader';
import PostAuthor from './PostAuthor';
import CommentsArea from './comments/CommentsArea';
import MobileBackButton from '@/app/components/common/MobileBackButton';
import CommentWrite from './comments/CommentWrite';
import PostEditButton from './PostEditButton';

type Props = {
	post: FullPost;
};
export default function PostBox({ post }: Props) {
	const author = post.author;
	const ableToEdit = true;
	return (
		<div className={containerStyle}>
			<div className={'flex gap-x-2.5 items-center lg:hidden'}>
				<MobileBackButton />
				<h2 className="font-bold text-2xl">영농 커뮤니티</h2>
			</div>
			<PostHeader post={post} />
			<div id="post-contents-area" className={postWrapper}>
				<article>{post.content}</article>
				{post.contentImageURL && (
					<Link
						href={post.contentImageURL || ''}
						target="_blank"
						className="w-full lg:w-[590px] h-[250px] sm:h-[330px] rounded-10 relative overflow-hidden"
					>
						<Image
							src={post.contentImageURL}
							fill={true}
							className="object-contain lg:object-fill rounded-10"
							alt={'농업 커뮤니티 게시글 첨부 이미지'}
						/>
					</Link>
				)}
			</div>
			<div className="flex flex-col gap-y-1">
				{ableToEdit && <PostEditButton postId={post.id} />}
				{author && <PostAuthor author={author} />}
			</div>
			<div className="flex flex-col gap-y-2.5">
				<CommentsArea postId={Number(post.id)} />
				<CommentWrite postId={Number(post.id)} />
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
	'h-screen lg:h-auto'
);
const postWrapper = clsx('flex flex-col gap-y-2.5');
