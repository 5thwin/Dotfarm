import { Comment } from '@/type/comment';
import { User } from '@/type/user';
import clsx from 'clsx';
import Image from 'next/image';
import CommentWrite from './CommentWrite';
import CommentWriter from './CommentWriter';

type Props = { comment: Comment; replys?: Comment[] };
const EXAMPLE_USER: User = {
	id: 1,
	kakaoId: 101,
	userName: '도농탁',
	region: '경기도',
	subRegion: '고양시',
	profileImageURL:
		'https://ca.slack-edge.com/T01JYGENJG1-U05ASPQHVKK-dd601309d045-512',
	role: '일반',
	status: '활성',
	accessToken: 'someAccessToken1',
	refreshToken: 'someRefreshToken1',
	createdAt: '2023-05-01 21:47:05',
	updatedAt: '2024-02-23 15:29:11',
	farmingExperience: '1년',
	majorCrops: '토마토',
};
export default function CommentItem({ comment, replys }: Props) {
	// 실제 서버에서는 comment에 user 정보가 포함되어 props로 들어옴
	const {} = comment;
	return (
		<div className={container}>
			<div className="flex flex-col gap-y-5px items-start group hover:bg-subGray rounded-10 px-15px py-2.5 ">
				<CommentWriter user={EXAMPLE_USER} createAt={comment.createdAt} />
				<p>{comment.contents}</p>
			</div>

			{replys && (
				<div className="flex gap-x-2.5 items-start w-full">
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
