import { Comment } from '@/type/comment';
import { User } from '@/type/user';
import clsx from 'clsx';
import Image from 'next/image';

type Props = { comment: Comment };
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
export default function CommentItem({ comment }: Props) {
	// 실제 서버에서는 comment에 user 정보가 포함되어 props로 들어옴

	return (
		<div className="flex gap-x-2.5 items-start">
			<Image
				width={32}
				height={32}
				src={EXAMPLE_USER.profileImageURL}
				alt={`${EXAMPLE_USER.userName}님의 프로필 이미지`}
				className={profileImgStyle}
			/>
			<p>{comment.contents}</p>
			<p>{comment.createdAt}</p>
		</div>
	);
}

const profileImgStyle = clsx('rounded-full');
