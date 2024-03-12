import clsx from 'clsx';
import { User } from '@/type/user';
import Image from 'next/image';
import { relativeTime } from '@/utils/date/string';

type Props = {
	user: User;
	createAt: string;
};
export default function CommentWriter({ user, createAt }: Props) {
	const date = new Date(createAt);

	return (
		<div className="flex gap-x-2.5 items-center">
			<div className={imageWrapper}>
				<Image
					src={user.profileImageURL}
					fill
					alt={`${user.userName} 프로필 이미지`}
				/>
			</div>
			<b>{user.userName}</b>
			<div className="flex gap-x-5px items-center text-subText text-sm">
				<span>{user.subRegion}</span>
				<i className={devidorStyle} />
				<span>{user.farmingExperience}</span>
				<i className={devidorStyle} />
				<span>{user.majorCrops}</span>
			</div>
			<span className="text-xs text-subText font-bold">
				{relativeTime(date)}
			</span>
		</div>
	);
}

// style
const imageWrapper = clsx('rounded-full size-8 relative overflow-hidden');
const devidorStyle = clsx('w-0 h-2.5 border border-subText');
