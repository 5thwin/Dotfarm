import clsx from 'clsx';
import { UserPartial } from '@/type/user';
import Image from 'next/image';
import { relativeTime } from '@/utils/date/string';
import { getUserRegionString } from '@/utils/koreaRegions';
import { getFullImagePath } from '@/utils/image';
import { getUserIdByAccessToken } from '@/api/auth/token/utils';
import CommentDeleteButton from './CommentDeleteButton';
import { Comment } from '@/type/comment';

type Props = {
	postId: number;
	comment: Comment;
};
export default function CommentWriter({ postId, comment }: Props) {
	const user = comment.author;
	const date = new Date(comment.createdAt);
	const myId = Number(getUserIdByAccessToken() || -1);
	return (
		<div className="flex gap-x-2.5 items-center">
			<div className={imageWrapper}>
				<Image
					src={
						user.profileImage?.path
							? getFullImagePath(user.profileImage?.path)
							: '/profile/defaultProfileImg.svg'
					}
					fill
					alt={`댓글 작성자 ${user.nickname}님의 프로필 이미지`}
				/>
			</div>
			<div className="flex gap-x-2.5 items-center flex-wrap">
				<b>{user.nickname}</b>

				<span className="text-xs text-subText font-bold">
					{relativeTime(date)}
				</span>
				{myId === user.id && (
					<CommentDeleteButton postId={postId} commentId={comment.id} />
				)}
			</div>
		</div>
	);
}

// style
const imageWrapper = clsx('rounded-full size-8 relative overflow-hidden');
const devidorStyle = clsx('w-0 h-2.5 border border-subText');
