'use client';
import { UserPartial } from '@/type/user';
import { useEffect } from 'react';
import useProfileStore from '../store/profileStore';
import ProfileImage from './forms/profileImage/ProfileImage';
import RegionsContainer from './forms/RegionsContainer';
import ProfileMajorCrops from './forms/ProfileMajorCrops';
import ProfileFarmingExperience from './forms/ProfileFarmingExperience';
import ProfileUpdateButton from './forms/ProfileUpdateButton';
import ProfileUserName from './forms/nicknameForm/ProfileUserName';
import clsx from 'clsx';
import { KoreaRegions } from '@/utils/koreaRegions';
import NicknameForm from './forms/nicknameForm/NicknameForm';
import useNicknameFormStore from '../store/nicknameFormStore';

type Props = {
	userMe: UserPartial;
	krRegions: KoreaRegions;
	crops: string[];
};
export default function ProfileEditForm({ userMe, krRegions, crops }: Props) {
	const { init } = useProfileStore();
	const { init: nickNameInit } = useNicknameFormStore();

	useEffect(() => {
		init(userMe);
		nickNameInit(userMe);
	}, []);

	return (
		<div className={containerStyle}>
			<div className="flexCenter">
				<ProfileImage image={userMe.profileImage} />
			</div>
			<NicknameForm />
			<form
				onSubmit={(e) => e.preventDefault()}
				className="flex flex-col gap-y-5 lg:h-auto h-full justify-between lg:justify-normal"
			>
				<div className="flex flex-col gap-y-5">
					<div className="flex flex-col gap-y-5px">
						<p className="font-bold">지역선택</p>
						<RegionsContainer krRegions={krRegions} />
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
						<ProfileMajorCrops crops={crops} />
					</div>
				</div>
				<div className="">
					<ProfileUpdateButton />
				</div>
			</form>
		</div>
	);
}
// style
const containerStyle = clsx('flex flex-col gap-y-5 relative', 'flex-1');
