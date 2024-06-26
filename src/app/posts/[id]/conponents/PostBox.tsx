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

// 이 위치에 있어야 <a> 태그가 정상적으로 변환됩니다.
// 주어진 텍스트에서 URL을 찾아 링크로 변환하는 함수
export function linkify(text: string): React.ReactNode {
	// URL을 찾기 위한 정규 표현식
	const urlRegex =
		/(\bhttps?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
	// 적절한 형태로 매치되고 남은 부분을 배열로 나누기
	const parts: React.ReactNode[] = [];
	let lastOffset = 0;

	// replace 함수를 사용하여 URL과 그 주변 텍스트를 처리
	text.replace(urlRegex, (match, p1, offset) => {
		// URL 앞의 텍스트를 추가
		parts.push(text.slice(lastOffset, offset));
		// URL을 <a> 태그로 변환하여 추가
		parts.push(
			<a
				key={offset}
				href={match}
				target="_blank"
				rel="noopener noreferrer"
				className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
			>
				{match}
			</a>
		);
		// 마지막 처리 위치를 업데이트
		lastOffset = offset + match.length;
		return match;
	});

	// 마지막 URL 이후의 텍스트를 추가
	if (lastOffset < text.length) {
		parts.push(text.slice(lastOffset));
	}

	return parts;
}
