import { Comment } from '@/type/comment';
import clsx from 'clsx';
import CommentWriter from './CommentWriter';
import ReplyButton from './ReplyButton';
import ReplyWrite from './ReplyWrite';

type Props = { comment: Comment; replys?: Comment[]; postId: number };

export default function CommentItem({ comment, replys, postId }: Props) {
	// 실제 서버에서는 comment에 user 정보가 포함되어 props로 들어옴
	const { author, createdAt, parentId } = comment;
	const isParent = !parentId || parentId === 0;
	return (
		<div className={container}>
			<div className="flex sm:justify-between flex-col sm:flex-row items-start sm:items-center gap-5px group hover:bg-subGray rounded-10 px-2.5 lg:px-15px py-2.5 ">
				<div className="flex flex-col gap-y-5px items-start">
					<CommentWriter user={author} createAt={createdAt} />
					<p>{comment.comment}</p>
				</div>
				{isParent && <ReplyButton comment={comment} />}
			</div>
			<ReplyWrite commentId={comment.id} postId={postId} />
			{replys && (
				<div className="flex items-start">
					<div className="lg:pl-5 pt-5px">
						<ReplyIcon />
					</div>
					<div className={replysWrapper}>
						{replys.map((replyComment) => (
							<CommentItem
								comment={replyComment}
								key={`reply${replyComment.id}`}
								postId={postId}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

const container = clsx('flex flex-col gap-y-5px');
const replysWrapper = clsx('flex flex-col gap-y-5px w-full');

const ReplyIcon = () => (
	<svg
		width="23"
		height="34"
		viewBox="0 0 23 34"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M1 1V26C1 29.866 4.13401 33 8 33H22"
			stroke="#DBDCDF"
			strokeWidth="2"
			strokeLinecap="round"
		/>
	</svg>
);
