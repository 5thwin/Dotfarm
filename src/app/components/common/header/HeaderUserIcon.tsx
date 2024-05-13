import { UserPartial } from '@/type/user';
import { getFullImagePath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	me: UserPartial;
};
export default function HeaderUserIcon({ me }: Props) {
	const { profileImage, nickname } = me;
	return (
		<Link className="lg:px-15px gap-x-2.5 flex items-center" href={'/profile'}>
			<div className="rounded-full relative size-8 overflow-hidden">
				{profileImage && profileImage.path ? (
					<Image
						src={getFullImagePath(profileImage.path)}
						alt="사용자 이미지"
						fill
					/>
				) : (
					<Image
						src="/profile/defaultProfileImg_32x32.svg"
						alt="기본 사용자 프로필로 사용되는 농부"
						className="rounded-full"
						fill
					/>
				)}
			</div>
			<span className="font-bold lg:inline-block hidden">{nickname}</span>
		</Link>
	);
}
