'use client';
import clsx from 'clsx';
import IcLike from '@/../public/icon/like.svg';
import CopyUrlButton from '@/app/components/button/CopyUrlButton';
import { Post } from '@/type/post';
import { createMyLikes } from '@/api/user/likes/create';
import useHandleError from '@/hooks/useHandleError';
import { useState } from 'react';
import { colorMainGreen } from '@/constants/color';
import { deleteMyLike } from '@/api/user/likes/delete';
type Props = { post: Post; likeCheck?: boolean };
export default function ButtonGroups({ post, likeCheck }: Props) {
	const { handleError } = useHandleError();
	const [isChecked, setIsChecked] = useState<boolean>(likeCheck || false);
	const handleLike = async () => {
		setIsChecked((pre) => !pre);
		try {
			if (!likeCheck) {
				const res = await createMyLikes({ postId: post.id });
			} else {
				const res = await deleteMyLike({ postId: post.id });
			}
		} catch (error) {
			if (error instanceof Error) {
				handleError({ error });
			}
		}
	};
	return (
		<div className="flex gap-x-2.5">
			<button className={buttonStyle} onClick={handleLike}>
				<IcLike
					width="15"
					height="13"
					stroke={isChecked ? colorMainGreen : '#7D7B7B'}
					fill={isChecked ? colorMainGreen : 'none'}
				/>
			</button>
			<CopyUrlButton />
		</div>
	);
}

// style
const buttonStyle = clsx(
	'rounded-full bg-subGray flexCenter size-[37px] hover:bg-gray-200'
);
