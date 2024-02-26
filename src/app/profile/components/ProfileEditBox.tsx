import { blockStyle } from '@/app/styles/common/blockStyle';
import ProfileEditForm from './ProfileEditForm';
import clsx from 'clsx';
import { getUserMe, updateUserMe } from '@/api/user';

export default async function ProfileEditBox() {
	const userme = await getUserMe();
	return (
		<div className={clsx(blockStyle, 'w-full lg:w-[640px]')}>
			{userme ? (
				<ProfileEditForm userMe={userme} updateProfile={updateUserMe} />
			) : (
				<p>회원 정보를 불러올 수 없습니다.</p>
			)}
		</div>
	);
}
