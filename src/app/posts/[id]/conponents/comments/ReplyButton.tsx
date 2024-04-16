'use client';

import clsx from 'clsx';
import useParentCommentStore from '../../store/parentCommentStore';
import { Comment } from '@/type/comment';

type Props = {
	comment: Comment;
};
export default function ReplyButton({ comment }: Props) {
	const { setParentComment, parentComment } = useParentCommentStore();
	return (
		<button
			onClick={() => {
				if (parentComment?.id === comment.id) {
					setParentComment(undefined);
					return;
				}
				setParentComment(comment);
			}}
			className={buttonStyle}
		>
			{parentComment?.id === comment.id ? '취소' : '답글달기'}
		</button>
	);
}

// style
const buttonStyle = clsx(
	'flexCenter py-5px rounded-[5px] text-subText font-bold text-sm bg-white px-2.5',
	'lg:group-hover:visible lg:invisible'
);
