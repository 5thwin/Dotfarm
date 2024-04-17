import clsx from 'clsx';
import { UserPartial } from '@/type/user';
import Image from 'next/image';
import { relativeTime } from '@/utils/date/string';
import { getUserRegionString } from '@/utils/koreaRegions';

type Props = {
	user: UserPartial;
	createAt: string;
};
export default function CommentWriter({ user, createAt }: Props) {
	const date = new Date(createAt);

	return (
		<div className="flex gap-x-2.5 items-center">
			<div className={imageWrapper}>
				<Image
					src={user.profileImage?.path || '/profile/defaultProfileImg.svg'}
					fill
					alt={`댓글 작성자 ${user.nickname}님의 프로필 이미지`}
				/>
			</div>
			<div className="flex gap-x-2.5 items-center flex-wrap">
				<b>{user.nickname}</b>
				<div className="flex gap-x-5px items-center text-subText text-xs sm:text-sm">
					<span>{getUserRegionString(user)}</span>
					<i className={devidorStyle} />
					<span>{user.farmingExperience}</span>
					<i className={devidorStyle} />
					<span>{user.majorCrops}</span>
				</div>
				<span className="text-xs text-subText font-bold">
					{relativeTime(date)}
				</span>
			</div>
		</div>
	);
}

// style
const imageWrapper = clsx('rounded-full size-8 relative overflow-hidden');
const devidorStyle = clsx('w-0 h-2.5 border border-subText');
