'use client';
import { UserMe } from '@/type/user';
import { useEffect } from 'react';
import useProfileStore from '../store/profileStore';
import ProfileImageSelect from './forms/ProfileImageSelect';
import RegionsContainer from './forms/RegionsContainer';
import ProfileMajorCrops from './forms/ProfileMajorCrops';
import ProfileFarmingExperience from './forms/ProfileFarmingExperience';
import ProfileUpdateButton from './forms/ProfileUpdateButton';
import ProfileUserName from './forms/ProfileUserName';

type Props = {
	userMe: UserMe;
};
export default function ProfileEditForm({ userMe }: Props) {
	const { init, userName, setUserName } = useProfileStore();
	useEffect(() => init(userMe), []);

	return (
		<form
			className="flex flex-col gap-y-5"
			onSubmit={(e) => e.preventDefault()}
		>
			<h1 className="text-2xl font-bold">프로필 편집</h1>
			<div className="flexCenter">
				<ProfileImageSelect />
			</div>
			<div className="flex flex-col gap-y-5px">
				<label htmlFor="profileName" className="font-bold">
					프로필명
				</label>
				<ProfileUserName />
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
				<ProfileUpdateButton />
			</div>
		</form>
	);
}
