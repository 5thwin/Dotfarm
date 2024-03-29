'use client';

import clsx from 'clsx';
import useParentComentStore from '../../store/parentCommentStore';
import { Comment } from '@/type/comment';

type Props = {
	comment: Comment;
};
export default function ReplyButton({ comment }: Props) {
	const { setParentComment } = useParentComentStore();
	return (
		<button
			onClick={() => {
				setParentComment(comment);
			}}
			className={buttonStyle}
		>
			답글달기
		</button>
	);
}

// style
const buttonStyle = clsx(
	'flexCenter py-5px rounded-[5px] text-subText font-bold text-sm'
);
