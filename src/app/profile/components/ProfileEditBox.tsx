import { blockStyle } from '@/app/styles/common/blockStyle';
import ProfileEditForm from './ProfileEditForm';
import clsx from 'clsx';
import { getUserMe } from '@/api/user/getUserMe';

export default async function ProfileEditBox() {
	const userme = await getUserMe();
	return (
		<div className={clsx(blockStyle, 'w-full lg:w-[640px]')}>
			{userme && <ProfileEditForm userMe={userme} />}
		</div>
	);
}
