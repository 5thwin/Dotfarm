'use client';
import ComunityPostItem from '@/app/main/components/commutiny/CommunityPostItem';
import { PostPartial, Post } from '@/type/post';
import HeartButton from '@/app/components/button/HeartButton';
import { deleteMyLike } from '@/api/user/likes/delete';
import { useState } from 'react';
import useHandleError from '@/hooks/useHandleError';

type Props = { post: PostPartial | Post };

export default function LikeListItem({ post }: Props) {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { handleError } = useHandleError();
	const handleLike = async () => {
		try {
			setIsLoading(true);
			await deleteMyLike({ postId: post.id });
		} catch (error) {
			if (error instanceof Error) handleError({ error });
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div className="flex gap-x-2.5 items-center justify-between">
			<ComunityPostItem post={post} />
			<HeartButton
				likeCheck={true}
				handleClick={handleLike}
				isLoading={isLoading}
			/>
		</div>
	);
}
