import { Comment } from '@/type/comment';
import { User } from '@/type/user';
import clsx from 'clsx';
import Image from 'next/image';
import CommentWrite from './CommentWrite';
import CommentWriter from './CommentWriter';

type Props = { comment: Comment; replys?: Comment[] };

export default function CommentItem({ comment, replys }: Props) {
	// 실제 서버에서는 comment에 user 정보가 포함되어 props로 들어옴
	const { author, createdAt } = comment;
	return (
		<div className={container}>
			<div className="flex flex-col gap-y-5px items-start group hover:bg-subGray rounded-10 px-15px py-2.5 ">
				<CommentWriter user={author} createAt={createdAt} />
				<p>{comment.comment}</p>
			</div>

			{replys && (
				<div className="flex gap-x-5px items-start w-full">
					<ReplyIcon />
					<div className={replysWrapper}>
						{replys.map((replyComment) => (
							<CommentItem
								comment={replyComment}
								key={`reply${replyComment.id}`}
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
