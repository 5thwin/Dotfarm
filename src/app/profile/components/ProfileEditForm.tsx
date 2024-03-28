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
import { UserUpdateData } from '@/api/user/get';
import clsx from 'clsx';

type Props = {
	userMe: UserMe;
	updateProfile: (_: UserUpdateData) => void;
};
export default function ProfileEditForm({ userMe, updateProfile }: Props) {
	const { init } = useProfileStore();
	useEffect(() => init(userMe), []);

	return (
		<form className={formStyle} onSubmit={(e) => e.preventDefault()}>
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
			<div className="">
				<ProfileUpdateButton updateProfile={updateProfile} />
			</div>
		</form>
	);
}
// style
const formStyle = clsx('flex flex-col gap-y-5', 'flex-1');
