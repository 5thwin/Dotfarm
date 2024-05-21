import { PostPartial } from '@/type/post';
import { UserPartial } from '@/type/user';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import CommunityPostItemAuthor from './CommunityPostItemAuthor';
import IcChat from '@/../public/icon/chat.svg';
import { colorMainGreen } from '@/constants/color';
import { getFullImagePath } from '@/utils/image';
type Props = {
	post: PostPartial & { author?: UserPartial };
};
export default function ComunityPostItem({ post }: Props) {
	const { author, commentCount, images } = post;
	return (
		<Link className={postContainer} href={`/posts/${post.id}`}>
			<div className={contentsWrapper}>
				<p className={catagoryTagStyle}># {post.category}</p>
				<p className={titleStyle}>{post.title}</p>
				<div className="lg:flex hidden">
					<p className="line-clamp-1 sm:text-base text-sm overflow-clip break-all">
						{post.content}
					</p>
				</div>
				{commentCount > 0 && (
					<div className="flex py-5px gap-x-2.5 text-mainGreen items-center">
						<IcChat width="13" height="13" fill={colorMainGreen} />
						<span className="font-bold text-sm">댓글 {commentCount}개</span>
					</div>
				)}
				<div className="hidden lg:flex">
					{author && <CommunityPostItemAuthor author={author} />}
				</div>
			</div>
			{images[0] && (
				<div className={imgWrapper}>
					<Image
						objectFit="cover"
						src={getFullImagePath(post.images[0].path)}
						fill={true}
						className="rounded-10 bg-subGray"
						alt={post.title}
					/>
				</div>
			)}
		</Link>
	);
}

// style
const postContainer = clsx(
	'flex gap-x-5 p-2.5 sm:px-5 sm:py-15px rounded-10 justify-between cursor-pointer',
	'hover:bg-subGray',
	'items-start gap-y-2.5'
);
const contentsWrapper = clsx('flex flex-col gap-y-5px sm:gap-y-2.5 ');
const catagoryTagStyle = clsx('text-subText text-xs sm:text-sm');
const titleStyle = clsx('sm:text-lg font-bold line-clamp-1');

const imgWrapper = clsx('w-[75px] h-[75px] lg:w-[260px] lg:h-[154px] relative');
