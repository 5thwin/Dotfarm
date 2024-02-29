import { ExtendedPost } from '@/api/post';
import clsx from 'clsx';
import Image from 'next/image';

type Props = {
	post: ExtendedPost;
};
export default function ComunityPostItem({ post }: Props) {
	const { user } = post;
	return (
		<li className={postContainer}>
			<div className={contentsWrapper}>
				<p className={catagoryTagStyle}># {post.category}</p>
				<p className={titleStyle}>{post.title}</p>
				<p>{post.contents}</p>
				{user && (
					<div className={userInfoStyle}>
						<p className="font-bold">{user.userName}</p>
						<p className={userSubInfoStyle}>
							{`${user.subRegion} | ${user.farmingExperience} | ${user.majorCrops}`}
						</p>
					</div>
				)}
			</div>
			<div>
				<Image
					src={post.imgURL}
					width={260}
					height={154}
					className="rounded-10 bg-subGray"
					alt={post.title}
				/>
			</div>
		</li>
	);
}

// style
const postContainer = clsx(
	'flex gap-x-5 px-5 py-15px rounded-10 justify-between cursor-pointer',
	'hover:bg-subGray',
	'flex-col-reverse lg:flex-row items-center lg:items-start gap-y-2.5'
);
const contentsWrapper = clsx('flex flex-col gap-y-2.5 lg:w-[830px]');
const catagoryTagStyle = clsx('text-subText text-sm');
const titleStyle = clsx('text-lg font-bold');
const userInfoStyle = clsx('flex gap-x-2.5 items-center');
const userProfileImgStyle = clsx('rounded-full bg-green-200');
const userSubInfoStyle = clsx('text-sm text-subText');
