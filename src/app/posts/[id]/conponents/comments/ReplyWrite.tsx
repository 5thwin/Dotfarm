'use client';

import useParentComentStore from '../../store/parentCommentStore';
import CommentWrite from './CommentWrite';

type Props = {
	commentId: number;
	postId: number;
};
export default function ReplyWrite({ commentId, postId }: Props) {
	const { parentComment } = useParentComentStore();

	if (!parentComment || commentId !== parentComment.id) return null;

	return (
		<div>
			<CommentWrite postId={postId} parentId={commentId} />
		</div>
	);
}
