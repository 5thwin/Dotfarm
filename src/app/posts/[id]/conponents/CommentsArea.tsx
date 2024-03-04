import { Comment } from '@/type/comment';
import CommentItem from './CommentItem';
import CommentWrite from './CommentWrite';

type Props = {
	postId: number;
	comments: Comment[];
};
export default async function CommentsArea({ postId, comments }: Props) {
	return (
		<div className="flex flex-col gap-y-5">
			<div className="flex flex-col gap-y-2.5">
				{comments.map((comment, index) => (
					<CommentItem key={`comment${index}`} comment={comment} />
				))}
			</div>
			<CommentWrite postId={postId} />
		</div>
	);
}
