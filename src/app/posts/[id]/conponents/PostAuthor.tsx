import { User } from '@/type/user';
import clsx from 'clsx';
import Image from 'next/image';

type Props = { author: User };
export default function PostAuthor({ author }: Props) {
	return (
		<div className="flex gap-x-2.5 p-15px rounded-10 bg-subGray items-center">
			<div className={profileImageWrapper}>
				<Image src={author.profileImageURL} alt="작성자 프로필 이미지" fill />
			</div>
			<div className="flex flex-col gap-y-5px">
				<p className="font-bold "> {author.userName}</p>
				<div className="flex gap-x-5px items-center text-subText text-sm">
					<span>{author.subRegion}</span>
					<i className={devidorStyle} />
					<span>{author.farmingExperience}</span>
					<i className={devidorStyle} />
					<span>{author.majorCrops}</span>
				</div>
			</div>
		</div>
	);
}

// style
const profileImageWrapper = clsx(
	'rounded-full w-[45px] h-[45px] relative overflow-hidden'
);

const devidorStyle = clsx('w-0 h-2.5 border border-subText');
