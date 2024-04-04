'use server';
import { blockStyle } from '@/app/styles/common/blockStyle';
import ProfileEditForm from './ProfileEditForm';
import clsx from 'clsx';
import { getUserById } from '@/api/user/get';
import MobileBackButton from '@/app/components/common/MobileBackButton';
import LogoutButtonInProfile from './LogoutButtonInProfile';
import { getUserIdByAccessToken } from '@/api/auth/token/utils';
import { UserMe } from '@/type/user';
import { loadKoreaRegions } from '@/api/local/region';
import { loadCrops } from '@/api/local/crops';

type Props = {
	userId: number;
};
export default async function ProfileEditBox({ userId }: Props) {
	const userme = await getUserById(Number(userId));
	const krRegions = loadKoreaRegions();
	const { crops } = loadCrops();

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
					<ProfileEditForm
						userMe={userme}
						krRegions={krRegions}
						crops={crops}
					/>
				) : (
					<p className="flexCenter py-5">회원 정보를 불러올 수 없습니다.</p>
				)}
			</div>
			<div className="flex flex-col items-center">
				<LogoutButtonInProfile />
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
	'rounded-none lg:rounded-30',
	'flex flex-col gap-y-15px'
);
