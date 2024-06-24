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
import { linkify } from '@/utils/string';
import PreviousPostsBox from './PreviousPostsBox';

type Props = {
	post: Post;
};
export default async function PostBox({ post }: Props) {
	const { author, images } = post;
	const userId = getUserIdByAccessToken();
	const isExistImage = post.images && post.images[0];
	return (
		<div className="flex flex-col gap-y-[30px] lg:w-[640px] w-full p-2.5 lg:p-0">
			<div className={containerStyle}>
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
						{linkify(post.content)}
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
			<PreviousPostsBox currentPostId={post.id} />
		</div>
	);
}

// style
const containerStyle = clsx(
	blockStyle,
	'flex flex-col gap-y-5 lg:gap-y-30px p-25px'
);
const postWrapper = clsx('flex flex-col gap-y-2.5');
