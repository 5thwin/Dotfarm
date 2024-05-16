'use server';
import { blockStyle } from '@/app/styles/common/blockStyle';
import ProfileEditForm from './ProfileEditForm';
import clsx from 'clsx';
import { getUserById, getUserMe } from '@/api/user/get';
import MobileBackButton from '@/app/components/common/MobileBackButton';
import LogoutButtonInProfile from './LogoutButtonInProfile';
import { getUserIdByAccessToken } from '@/api/auth/token/utils';
import { loadKoreaRegions } from '@/api/local/region';
import { loadCrops } from '@/api/local/crops';
import NotSignUp from '@/app/auth/kakao/components/fallbackComponents/NotSignUp';
import MemberInfoFallback from './MemberInfoFallback';

export default async function ProfileEditBox() {
	const userme = await getUserMe();
	const krRegions = loadKoreaRegions();
	const { crops } = loadCrops();
	if (userme?.status === 'INACTIVE') return <NotSignUp />;
	return (
		<div className={responsiveContainer}>
			<div className="flex flex-col gap-y-5 h-full">
				<div className="flex items-center w-full justify-between pt-0">
					<div className="flex items-center gap-x-2.5">
						<div className="lg:hidden">
							<MobileBackButton />
						</div>
						<h1 className="text-23 font-bold">프로필 편집</h1>
					</div>
					<LogoutButtonInProfile />
				</div>
				{userme ? (
					<ProfileEditForm
						userMe={userme}
						krRegions={krRegions}
						crops={crops}
					/>
				) : (
					<MemberInfoFallback />
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
	'rounded-none lg:rounded-30',
	'flex flex-col gap-y-15px'
);
