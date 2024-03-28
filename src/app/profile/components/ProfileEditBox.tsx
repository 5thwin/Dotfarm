import { blockStyle } from '@/app/styles/common/blockStyle';
import ProfileEditForm from './ProfileEditForm';
import clsx from 'clsx';
import { getUserMe, updateUserMe } from '@/api/user/get';
import MobileBackButton from '@/app/components/common/MobileBackButton';

export default async function ProfileEditBox() {
	const userme = await getUserMe();
	return (
		<div className={responsiveContainer}>
			<div className="flex flex-col gap-y-5 h-full">
				<div className="flex gap-x-2.5 items-center">
					<div className="lg:hidden">
						<MobileBackButton />
					</div>
					<h1 className="text-2xl font-bold">프로필 편집</h1>
				</div>

				{userme ? (
					<ProfileEditForm userMe={userme} updateProfile={updateUserMe} />
				) : (
					<p className="flexCenter py-5">회원 정보를 불러올 수 없습니다.</p>
				)}
			</div>
		</div>
	);
}
// style
const responsiveContainer = clsx(
	blockStyle,
	'w-full lg:w-[640px]',
	'shadow-none lg:shadow-main',
	'h-full lg:h-auto',
	'rounded-none lg:rounded-30'
);
