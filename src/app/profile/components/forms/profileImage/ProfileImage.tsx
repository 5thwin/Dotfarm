import { useEffect, useState } from 'react';
import ProfileImageEditModal from './ProfileImageEditModal';
import Image from 'next/image';
import useProfileImageStore from '@/app/profile/store/profileImageStore';
import { ImageType } from '@/type/image';

type Props = {
	image?: ImageType | null;
};
export default function ProfileImage({ image }: Props) {
	const {
		profileImageURL,
		setOriginProfileImageURL,
		setProfileImageURL,
		originProfileImageURL,
	} = useProfileImageStore();
	useEffect(() => {
		image && setProfileImageURL(image.path);
		image && setOriginProfileImageURL(image.path);
	}, []);
	// 프로필 이미지 변경 핸들러
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	return (
		<div
			className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 cursor-pointer relative"
			onClick={() => setModalOpen(true)}
		>
			{originProfileImageURL ? (
				<Image
					src={originProfileImageURL}
					alt="Profile Image"
					className="w-full h-full object-cover"
					fill
				/>
			) : (
				<Image
					src="/profile/defaultProfileImg_32x32.svg"
					alt="사용자 기본 이미지"
					className="rounded-full"
					fill
				/>
			)}
			{modalOpen && (
				<ProfileImageEditModal onClose={() => setModalOpen(false)} />
			)}
		</div>
	);
}
