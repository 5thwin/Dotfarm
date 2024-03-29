import { PostPartial } from '@/type/post';
import { UserPartial } from '@/type/user';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	post: PostPartial & { author?: UserPartial };
};
export default function ComunityPostItem({ post }: Props) {
	const { author } = post;
	return (
		<Link className={postContainer} href={`/posts/${post.id}`}>
			<div className={contentsWrapper}>
				<p className={catagoryTagStyle}># {post.category}</p>
				<p className={titleStyle}>{post.title}</p>
				<p className="line-clamp-1">{post.content}</p>
				{author && (
					<div className={userInfoStyle}>
						<Image
							src={
								author.profileImageURL ||
								'/public/profile/defaultProfileImg_32x32.svg'
							}
							alt={`${author.nickname}님의 프로필 이미지`}
							className="rounded-full"
							width={32}
							height={32}
						/>
						<p className="font-bold">{author.nickname}</p>
						<p className={userSubInfoStyle}>
							{`${author.subRegion} | ${author.farmingExperience} | ${author.majorCrops}`}
						</p>
					</div>
				)}
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
	'flex gap-x-5 px-5 py-15px rounded-10 justify-between cursor-pointer',
	'hover:bg-subGray',
	'flex-col-reverse lg:flex-row items-start gap-y-2.5'
);
const contentsWrapper = clsx('flex flex-col gap-y-2.5 2xl::w-[830px]');
const catagoryTagStyle = clsx('text-subText text-sm');
const titleStyle = clsx('text-lg font-bold');
const userInfoStyle = clsx('flex gap-x-2.5 items-center');
const userProfileImgStyle = clsx('rounded-full bg-green-200');
const userSubInfoStyle = clsx('text-sm text-subText');
const imgWrapper = clsx('w-full h-[256px] lg:w-[260px] lg:h-[154px] relative');
