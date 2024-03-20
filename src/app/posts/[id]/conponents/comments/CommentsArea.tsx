import { Comment } from '@/type/comment';
import CommentItem from './CommentItem';
import CommentWrite from './CommentWrite';

type Props = {
	postId: number;
	comments: Comment[];
};
export default async function CommentsArea({ postId, comments }: Props) {
	const replyMap = getReplyMap(comments);
	const isCommentValid = comments && comments.length > 0;
	return (
		<div className="flex flex-col gap-y-2.5">
			<p className="text-lg font-bold">댓글</p>
			<div className="flex flex-col gap-y-5px">
				{isCommentValid &&
					comments.map((comment, index) =>
						comment.parentId ? null : (
							<CommentItem
								key={`comment${index}`}
								comment={comment}
								replys={replyMap.get(comment.id)}
							/>
						)
					)}
			</div>
		</div>
	);
}

// util
// comments를 받아서 {id: comments} 형식으로 대댓글을 반환
const getReplyMap = (comments: Comment[]) => {
	const replyMap = new Map<number, Comment[]>(); // 대댓글을 담을 맵을 생성

	for (const comment of comments) {
		// comments를 순회
		if (comment.parentId) {
			// 부모 댓글이 있는 경우에만 대댓글로 처리
			// 해당 parentId에 대한 대댓글 배열을 가져옴
			const targetReplies = replyMap.get(comment.parentId) || [];
			targetReplies.push(comment); // 대댓글을 대댓글 배열에 추가
			replyMap.set(comment.parentId, targetReplies); // 맵에 대댓글 배열을 다시 설정
		}
	}

	return replyMap; // 대댓글 맵 반환
};
