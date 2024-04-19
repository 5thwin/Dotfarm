'use client';
import clsx from 'clsx';
import IcLike from '@/../public/icon/like.svg';
import CopyUrlButton from '@/app/components/button/CopyUrlButton';
import { Post } from '@/type/post';
import { createMyLikes } from '@/api/user/likes/create';
import useHandleError from '@/hooks/useHandleError';
import { useState } from 'react';
import { deleteMyLike } from '@/api/user/likes/delete';
import { isErrorObject } from '@/utils/error/httpError';

type Props = { post: Post; likeCheck?: boolean; isLogin?: boolean };

export default function ButtonGroups({
	post,
	likeCheck,
	isLogin = true,
}: Props) {
	const { handleError } = useHandleError();
	const [isChecked, setIsChecked] = useState<boolean>(likeCheck || false);
	const handleLike = async () => {
		setIsChecked((pre) => !pre);
		try {
			const res = !likeCheck
				? await createMyLikes({ postId: post.id })
				: await deleteMyLike({ postId: post.id });

			if (isErrorObject(res)) throw new Error(JSON.stringify(res));
		} catch (error) {
			if (error instanceof Error) {
				handleError({ error });
			}
		}
	};
	return (
		<div className="flex gap-x-2.5">
			<button
				className={getButtonStyle(isChecked)}
				onClick={handleLike}
				disabled={!isLogin}
			>
				<IcLike
					width="15"
					height="13"
					stroke={isChecked ? 'white' : '#7D7B7B'}
					fill={isChecked ? 'white' : 'none'}
				/>
			</button>
			<CopyUrlButton />
		</div>
	);
}

const getButtonStyle = (isInterested: boolean) =>
	clsx('rounded-full flexCenter min-w-[37px] size-[37px]', {
		'bg-mainGreen': isInterested,
		'bg-subGray': !isInterested,
	});
