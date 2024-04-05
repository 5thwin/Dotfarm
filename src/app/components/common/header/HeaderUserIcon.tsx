import { UserPartial } from '@/type/user';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	me: UserPartial;
};
export default function HeaderUserIcon({ me }: Props) {
	const { profileImage, nickname } = me;
	return (
		<Link className="px-15px gap-x-2.5 flex items-center" href={'/profile'}>
			<div className="rounded-full relative size-8 overflow-hidden">
				{profileImage && profileImage.path ? (
					<Image src={profileImage.path} alt="사용자 이미지" fill />
				) : (
					<Image
						src="/profile/defaultProfileImg_32x32.svg"
						alt="사용자 기본 이미지"
						className="rounded-full"
						fill
					/>
				)}
			</div>
			<span className="font-bold">{nickname}</span>
		</Link>
	);
}
