'use client';

import FarmCareersSelect from '@/app/signup/components/FarmCareersSelect';
import { mainGreenRoundedButtonStyle } from '@/app/styles/common/buttonStyle';
import { UserMe } from '@/type/user';
import clsx from 'clsx';
import { useEffect } from 'react';
import useProfileStore from '../store/profileStore';
import ProfileImageSelect from './forms/ProfileImageSelect';
import RegionsContainer from './forms/RegionsContainer';
import ProfileMajorCrops from './forms/ProfileMajorCrops';
import ProfileFarmingExperience from './forms/ProfileFarmingExperience';

type Props = {
	userMe: UserMe;
};
export default function ProfileEditForm({ userMe }: Props) {
	const { init, userName, setUserName } = useProfileStore();
	useEffect(() => init(userMe), []);

	return (
		<form className="flex flex-col gap-y-5">
			<h1 className="text-2xl font-bold">프로필 편집</h1>
			<div className="flexCenter">
				<ProfileImageSelect />
			</div>
			<div className="flex flex-col gap-y-5px">
				<label htmlFor="profileName" className="font-bold">
					프로필명
				</label>
				<div className="flex gap-x-5px w-full">
					<input
						type="text"
						id="profileName"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
						className={clsx(inputStyle, 'flex-1')}
					/>
					<button className={mainGreenRoundedButtonStyle}>중복확인</button>
					{/* 중복 확인 버튼 추가 예정 */}
				</div>
			</div>
			<div className="flex flex-col gap-y-5px">
				<p className="font-bold">지역선택</p>
				<RegionsContainer />
			</div>
			<div className="flex flex-col gap-y-5px">
				<label htmlFor="farm-careers" className="font-bold">
					영농경력
				</label>
				<ProfileFarmingExperience />
			</div>
			<div className="flex flex-col gap-y-5px">
				<label htmlFor="main-crops" className="font-bold">
					주요작물
				</label>
				<ProfileMajorCrops />
			</div>
			<div>
				<button
					type="submit"
					className={clsx(mainGreenRoundedButtonStyle, 'w-full')}
				>
					적용하기
				</button>
			</div>
		</form>
	);
}
// style
const inputStyle = clsx(
	'rounded-10 px-15px py-3 outline-none',
	'border border-subGray'
);
