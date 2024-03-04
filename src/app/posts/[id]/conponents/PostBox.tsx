import { blockStyle } from '@/app/styles/common/blockStyle';
import { FullPost, PostWithUser } from '@/type/post';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import CommentsArea from './CommentsArea';

type Props = {
	post: FullPost;
};
export default function PostBox({ post }: Props) {
	const comments = post.comments;
	return (
		<div className={containerStyle}>
			<Link
				href={post.imgURL || ''}
				target="_blank"
				className="w-[590px] h-[330px] rounded-10 relative overflow-hidden"
			>
				<Image
					src={post.imgURL}
					fill={true}
					className=""
					alt={'농업 커뮤니티 게시글 첨부 이미지'}
				/>
			</Link>
			<div id="post-contents-area" className={postWrapper}>
				<h1 className="font-bold text-lg">{post.title}</h1>
				<div className="flex gap-x-5px">
					<p>{post.user?.userName || '익명'}</p>
					<span>|</span>
					<p>{post.createdAt}</p>
				</div>
				<article>{post.contents}</article>
			</div>
			<CommentsArea postId={post.id} comments={comments} />
		</div>
	);
}

// style
const containerStyle = clsx(
	blockStyle,
	'flex flex-col gap-y-30px p-25px',
	'lg:w-[640px]'
);
const postWrapper = clsx('flex flex-col gap-y-2.5');
const contentsWrapper = clsx();
