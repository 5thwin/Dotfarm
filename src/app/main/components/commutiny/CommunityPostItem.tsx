import { PostPartial } from '@/type/post';
import { UserPartial } from '@/type/user';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import CommunityPostItemAuthor from './CommunityPostItemAuthor';
import IcChat from '@/../public/icon/chat.svg';
import { colorMainGreen } from '@/constants/color';
type Props = {
	post: PostPartial & { author?: UserPartial };
};
export default function ComunityPostItem({ post }: Props) {
	const { author, commentCount } = post;

	return (
		<Link className={postContainer} href={`/posts/${post.id}`}>
			<div className={contentsWrapper}>
				<p className={catagoryTagStyle}># {post.category}</p>
				<p className={titleStyle}>{post.title}</p>
				<p className="line-clamp-1 sm:text-base text-sm">{post.content}</p>
				{commentCount > 0 && (
					<div className="flex py-5px gap-x-2.5 text-mainGreen items-center">
						<IcChat width="13" height="13" fill={colorMainGreen} />
						<span className="font-bold text-sm">답글 {commentCount}개</span>
					</div>
				)}
				{author && <CommunityPostItemAuthor author={author} />}
			</div>
			{/* {post.contentImageURL && (
				<div className={imgWrapper}>
					<Image
						src={post.contentImageURL}
						fill={true}
						className="rounded-10 bg-subGray"
						alt={post.title}
					/>
				</div>
			)} */}
		</Link>
	);
}

// style
const postContainer = clsx(
	'flex gap-x-5 p-2.5 sm:px-5 sm:py-15px rounded-10 justify-between cursor-pointer',
	'hover:bg-subGray',
	'flex-col-reverse lg:flex-row items-start gap-y-2.5'
);
const contentsWrapper = clsx(
	'flex flex-col gap-y-5px sm:gap-y-2.5 2xl::w-[830px]'
);
const catagoryTagStyle = clsx('text-subText text-xs sm:text-sm');
const titleStyle = clsx('sm:text-lg font-bold');

const imgWrapper = clsx('w-full h-[256px] lg:w-[260px] lg:h-[154px] relative');
